import Link from "next/link";
import { secondaryLinks } from "@/data/navigation";

export function SecondaryHeader() {
    return (
        <div className="bg-[var(--brand-navy)] text-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] lg:text-[0.7rem]">
                <span className="hidden text-white/70 sm:inline">
                    Shivalik College · Inspiring Futures Since 2004
                </span>
                <nav className="flex w-full flex-wrap justify-between gap-3 text-[0.65rem] font-medium normal-case tracking-tight text-white/80 sm:w-auto sm:justify-end sm:text-[0.75rem]">
                    {secondaryLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href ?? "#"}
                            className="transition-colors hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
