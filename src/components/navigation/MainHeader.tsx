'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { MainNavItem, NavLink, mainNavItems } from "@/data/navigation";

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <span
            aria-hidden
            className={`ml-1 inline-block transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
                }`}
        >
            <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-500"
            >
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </span>
    );
}

function MenuIcon({ open }: { open: boolean }) {
    return open ? (
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--brand-navy)]"
        >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="18" y2="6" />
        </svg>
    ) : (
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--brand-navy)]"
        >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
    );
}

const depthText = [
    "text-xs font-semibold uppercase tracking-[0.25em] text-slate-400",
    "text-base font-semibold text-slate-900",
    "text-sm text-slate-600",
];

const depthPadding = ["", "border-l border-slate-100 pl-4", "pl-6"];

function NestedNavList({ nodes, depth = 0 }: { nodes?: NavLink[]; depth?: number }) {
    if (!nodes?.length) return null;

    const spacingClass = depth > 1 ? "space-y-2" : "space-y-3";

    return (
        <ul className={`mt-3 ${spacingClass}`}>
            {nodes.map((node) => {
                const currentDepth = Math.min(depth, depthText.length - 1);
                const nextDepth = depth + 1;
                const labelClass = depthText[currentDepth];
                const paddingClass = depthPadding[Math.min(depth, depthPadding.length - 1)];

                return (
                    <li key={node.label} className={`${paddingClass} flex flex-col gap-1`}>
                        {node.href ? (
                            <Link
                                href={node.href}
                                className={`${labelClass} transition-colors hover:text-[var(--brand-navy)]`}
                            >
                                {node.label}
                            </Link>
                        ) : (
                            <span className={labelClass}>{node.label}</span>
                        )}
                        {node.description && (
                            <span className="text-sm text-slate-500">{node.description}</span>
                        )}
                        {node.children && <NestedNavList nodes={node.children} depth={nextDepth} />}
                    </li>
                );
            })}
        </ul>
    );
}

function DropdownPanel({ item, open }: { item: MainNavItem; open: boolean }) {
    if (!item.children?.length) return null;

    return (
        <div
            className={`pointer-events-none absolute left-1/2 top-full z-40 mt-4 hidden w-[min(90vw,900px)] -translate-x-1/2 rounded-3xl border border-slate-100 bg-white/95 p-8 text-left shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur transition duration-200 lg:block ${open
                    ? "pointer-events-auto opacity-100 translate-y-0"
                    : "-translate-y-2 opacity-0"
                }`}
            role="menu"
            aria-label={`${item.label} menu`}
        >
            {item.summary && (
                <p className="max-w-2xl text-sm text-slate-500">{item.summary}</p>
            )}
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {item.children.map((column) => (
                    <div key={column.label}>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-navy)]">
                            {column.label}
                        </p>
                        <NestedNavList nodes={column.children} depth={1} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function MainHeader() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});

    useEffect(() => {
        if (typeof window === "undefined") return;
        const close = () => setActiveDropdown(null);
        window.addEventListener("scroll", close);
        return () => window.removeEventListener("scroll", close);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveDropdown(null);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const handleMobileToggle = () => {
        setMobileMenuOpen((prev) => !prev);
        setActiveDropdown(null);
    };

    const toggleMobileDropdown = (id: string) => {
        setMobileDropdowns((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <header className="bg-white/95 shadow-sm ring-1 ring-slate-100 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link href="/" className="group flex flex-col leading-tight">
                    <span className="text-lg font-black uppercase tracking-[0.3em] text-[var(--brand-navy)]">
                        Shivalik
                    </span>
                    <span className="text-xs font-semibold tracking-[0.4em] text-slate-400">
                        COLLEGE
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--brand-sun)]">
                        Dehradun · Uttarakhand
                    </span>
                </Link>
                <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setActiveDropdown(null)}>
                    {mainNavItems.map((item) => {
                        if (item.type === "button") {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href ?? "#"}
                                    className="ml-3 inline-flex items-center rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-sun)] px-5 py-2 text-sm font-semibold text-[var(--brand-navy)] shadow-md shadow-[var(--brand-gold)]/30 transition hover:brightness-105"
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        if (item.type === "link") {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href ?? "#"}
                                    className="text-sm font-semibold text-slate-700 transition hover:text-[var(--brand-navy)]"
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        const open = activeDropdown === item.id;
                        return (
                            <div
                                key={item.id}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(item.id)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-slate-50 ${open ? "text-[var(--brand-navy)]" : "text-slate-700"
                                        }`}
                                    onClick={() => setActiveDropdown(open ? null : item.id)}
                                >
                                    {item.label}
                                    <ChevronIcon open={open} />
                                </button>
                                <DropdownPanel item={item} open={open} />
                            </div>
                        );
                    })}
                </nav>
                <button
                    type="button"
                    className="lg:hidden"
                    aria-label="Toggle menu"
                    onClick={handleMobileToggle}
                >
                    <MenuIcon open={mobileMenuOpen} />
                </button>
            </div>
            <div
                className={`lg:hidden overflow-hidden border-t border-slate-100 transition-[max-height] duration-300 ${mobileMenuOpen ? "max-h-[90vh]" : "max-h-0"
                    }`}
            >
                <div className="space-y-2 px-4 py-4">
                    {mainNavItems.map((item) => {
                        if (item.type === "button") {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href ?? "#"}
                                    className="block rounded-xl bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-sun)] px-4 py-3 text-center text-base font-semibold text-[var(--brand-navy)]"
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        if (item.type === "link") {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href ?? "#"}
                                    className="block rounded-xl px-3 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        const mobileOpen = Boolean(mobileDropdowns[item.id]);
                        return (
                            <div key={item.id} className="rounded-2xl border border-slate-100 bg-white">
                                <button
                                    className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-slate-800"
                                    onClick={() => toggleMobileDropdown(item.id)}
                                >
                                    {item.label}
                                    <ChevronIcon open={mobileOpen} />
                                </button>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                                    <div className="border-t border-slate-100 px-4 py-3">
                                        {item.summary && (
                                            <p className="text-sm text-slate-500">{item.summary}</p>
                                        )}
                                        {item.children?.map((column) => (
                                            <div key={column.label} className="mt-4">
                                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-navy)]">
                                                    {column.label}
                                                </p>
                                                <NestedNavList nodes={column.children} depth={1} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
