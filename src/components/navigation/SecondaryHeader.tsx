import Link from "next/link";
import { secondaryLinks } from "@/data/navigation";

export function SecondaryHeader() {
    return (
        <div className="w-full bg-[var(--brand-secondary)] text-white shadow-[0_10px_30px_rgba(1,22,64,0.4)]">
            <div className="flex w-full flex-wrap items-center gap-4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] sm:px-6 lg:text-[0.7rem] lg:px-10">
                <span className="hidden flex-1 text-white/70 sm:inline">
                    Shivalik College · Inspiring Futures Since 2004
                </span>
                <nav className="flex w-full flex-wrap justify-between gap-3 text-[0.65rem] font-medium normal-case tracking-tight text-white/80 sm:w-auto sm:flex-1 sm:justify-end sm:text-[0.75rem]">
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
