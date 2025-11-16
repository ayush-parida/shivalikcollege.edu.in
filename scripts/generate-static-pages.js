/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const siteStructurePath = path.join(projectRoot, "src", "data", "siteStructure.ts");
const appDirectory = path.join(projectRoot, "src", "app");

const manualPaths = [
    "/alumni",
    "/scholarship",
    "/privacy-policy",
    "/terms-of-use",
];

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

const capWord = (word) => {
    if (!word) return "";
    const special = specialCases.get(word.toLowerCase());
    if (special) return special;
    return word.charAt(0).toUpperCase() + word.slice(1);
};

const formatSegment = (segment) =>
    segment
        .split("-")
        .filter(Boolean)
        .map((part) => capWord(part))
        .join(" ") || segment;

const buildTitle = (segments) => {
    if (!segments.length) {
        return "Shivalik Page";
    }
    return segments.map(formatSegment).join(" • ");
};

const sanitizeSegment = (segment) =>
    segment
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");

const buildComponentName = (segments) => {
    const combined = segments
        .map((segment, index) => sanitizeSegment(segment) || `Segment${index + 1}`)
        .join("");
    const base = combined || "Generated";
    const safeBase = /^[A-Za-z]/.test(base) ? base : `Route${base}`;
    return `${safeBase}Page`;
};

const normalizePath = (rawPath) => {
    const trimmed = rawPath.trim();
    if (!trimmed || trimmed === "`") {
        return "";
    }
    const stripped = trimmed.replace(/^\/+|\/+$/g, "");
    return stripped ? `/${stripped}` : "/";
};

const fileContent = fs.readFileSync(siteStructurePath, "utf8");
const blobMatch = fileContent.match(/const rawPathBlob = `([\s\S]*?)`;/);

if (!blobMatch) {
    throw new Error("Unable to locate rawPathBlob in siteStructure.ts");
}

const rawPaths = blobMatch[1]
    .split(/\r?\n/)
    .map(normalizePath)
    .filter(Boolean);

const hierarchicalPaths = new Set();

rawPaths.forEach((routePath) => {
    const segments = routePath.split("/").filter(Boolean);
    if (!segments.length) {
        return;
    }

    let prefix = "";
    segments.forEach((segment) => {
        prefix += `/${segment}`;
        hierarchicalPaths.add(prefix);
    });
});

manualPaths.forEach((manualPath) => hierarchicalPaths.add(manualPath));

const allPaths = Array.from(hierarchicalPaths).sort();

const hasFileExtension = (routePath) => {
    const lastSegment = routePath.split("/").pop() || "";
    return /\.[a-z0-9]{2,5}$/i.test(lastSegment);
};

const shouldSkip = (routePath) => {
    if (!routePath || routePath === "/" || routePath === "/index") {
        return true;
    }

    if (routePath.includes("wp-content") || routePath.includes("wp-includes")) {
        return true;
    }

    if (hasFileExtension(routePath)) {
        return true;
    }

    const blockedPrefixes = [
        "/wp-json",
        "/wp-admin",
        "/wp-login",
        "/feed",
        "/xmlrpc",
        "/page/",
    ];

    if (blockedPrefixes.some((prefix) => routePath.startsWith(prefix))) {
        return true;
    }

    return false;
};

let created = 0;
let skippedExisting = 0;
let skippedFiltered = 0;

allPaths.forEach((routePath) => {
    if (shouldSkip(routePath)) {
        skippedFiltered += 1;
        return;
    }

    const segments = routePath.split("/").filter(Boolean);
    const directory = path.join(appDirectory, ...segments);
    fs.mkdirSync(directory, { recursive: true });

    const pageFile = path.join(directory, "page.tsx");
    if (fs.existsSync(pageFile)) {
        skippedExisting += 1;
        return;
    }

    const title = buildTitle(segments);
    const componentName = buildComponentName(segments);
    const metadataTitle = `${title} | Shivalik College of Engineering`;
    const metadataDescription = `Sample overview for ${title} at Shivalik College of Engineering.`;
    const pageDescription = `Sample content for ${title} will be added soon.`;

    const fileContents = `import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "${routePath}";

export const metadata: Metadata = {
  title: ${JSON.stringify(metadataTitle)},
  description: ${JSON.stringify(metadataDescription)},
};

export default function ${componentName}() {
  return (
    <PageRenderer
      path={path}
      title=${JSON.stringify(title)}
      description=${JSON.stringify(pageDescription)}
    />
  );
}
`;

    fs.writeFileSync(pageFile, fileContents, "utf8");
    created += 1;
});

console.log(`Created ${created} new pages.`);
console.log(`Skipped ${skippedExisting} existing directories.`);
console.log(`Filtered out ${skippedFiltered} entries.`);
