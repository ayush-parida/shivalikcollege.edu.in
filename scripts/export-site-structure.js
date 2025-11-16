/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const siteStructurePath = path.join(projectRoot, "src", "data", "siteStructure.ts");
const outputPath = path.join(projectRoot, "docs", "all-links-structure.md");

const manualPaths = ["/", "/alumni", "/scholarship", "/privacy-policy", "/terms-of-use"];

const specialCases = new Map([
    ["iqac", "IQAC"],
    ["naac", "NAAC"],
    ["nba", "NBA"],
    ["sce", "SCE"],
    ["sips", "SIPS"],
    ["cbii", "CBII"],
    ["ihub", "iHUB"],
    ["ncc", "NCC"],
    ["n-s-s", "NSS"],
    ["n-c-c", "NCC"],
    ["mba", "MBA"],
    ["bba", "BBA"],
    ["bca", "BCA"],
    ["b-pharm", "B.Pharm"],
    ["d-pharm", "D.Pharm"],
    ["b-tech", "B.Tech"],
    ["b-sc", "B.Sc"],
    ["mou", "MoU"],
    ["dotp", "DoTP"],
]);

const normalizePath = (rawPath) => {
    if (!rawPath) return "";
    const trimmed = rawPath.trim();
    if (!trimmed) return "";
    const stripped = trimmed.replace(/^\/+|\/+$/g, "");
    return stripped ? `/${stripped}` : "/";
};

const rawContent = fs.readFileSync(siteStructurePath, "utf8");
const blobMatch = rawContent.match(/const rawPathBlob = `([\s\S]*?)`;/);

if (!blobMatch) {
    throw new Error("Unable to locate rawPathBlob in siteStructure.ts");
}

const rawPaths = blobMatch[1]
    .split(/\r?\n/)
    .map(normalizePath)
    .filter(Boolean);

const canonicalPaths = new Set(["/"]);

const addHierarchicalPaths = (routePath) => {
    const normalized = normalizePath(routePath);
    if (!normalized || normalized === "/") {
        canonicalPaths.add("/");
        return;
    }

    const segments = normalized.split("/").filter(Boolean);
    let prefix = "";
    segments.forEach((segment) => {
        prefix += `/${segment}`;
        canonicalPaths.add(prefix);
    });
};

rawPaths.forEach(addHierarchicalPaths);
manualPaths.forEach(addHierarchicalPaths);

const sortedPaths = Array.from(canonicalPaths).sort((a, b) => a.localeCompare(b));

const humanize = (segment) => {
    if (!segment) return "";
    const match = specialCases.get(segment.toLowerCase());
    if (match) return match;
    return segment
        .split("-")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ") || segment;
};

const root = {
    segment: "",
    label: "Home",
    fullPath: "/",
    children: new Map(),
    isPage: true,
};

const insertPath = (routePath) => {
    if (routePath === "/") {
        return;
    }

    const segments = routePath.split("/").filter(Boolean);
    let current = root;
    let prefix = "";

    segments.forEach((segment, index) => {
        prefix += `/${segment}`;
        if (!current.children.has(segment)) {
            current.children.set(segment, {
                segment,
                label: humanize(segment),
                fullPath: prefix,
                children: new Map(),
                isPage: false,
            });
        }

        current = current.children.get(segment);

        if (index === segments.length - 1) {
            current.isPage = true;
        }
    });
};

sortedPaths.forEach(insertPath);

const lines = [
    "# Shivalik College – Link Inventory",
    "",
    `_Generated on ${new Date().toISOString().split("T")[0]}_`,
    "",
    "## Site Tree",
    "",
    "- [Home](/)",
];

const renderChildren = (node, depth) => {
    const indent = "  ".repeat(depth);
    const children = Array.from(node.children.values()).sort((a, b) => a.label.localeCompare(b.label));

    children.forEach((child) => {
        const bullet = child.isPage ? `[${child.label || child.segment}](${child.fullPath})` : child.label || child.segment;
        lines.push(`${indent}- ${bullet}`);
        renderChildren(child, depth + 1);
    });
};

renderChildren(root, 1);

lines.push("", `> Total unique routes listed: ${sortedPaths.length}`);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, lines.join("\n") + "\n", "utf8");

console.log(`Generated ${sortedPaths.length} routes into ${path.relative(projectRoot, outputPath)}`);
