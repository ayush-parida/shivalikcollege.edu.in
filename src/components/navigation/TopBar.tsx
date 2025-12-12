import Link from "next/link";
import { NavigationData } from "@/lib/types";

interface TopBarProps {
  message: NavigationData["topBar"]["message"];
  links: NavigationData["topBar"]["links"];
}

export default function TopBar({ message, links }: TopBarProps) {
  return (
    <div
      className="hidden border-b border-white/10 text-sm text-white/70 md:block"
      style={{
        background:
          "linear-gradient(110deg, rgba(5,5,5,0.95), rgba(40,40,40,0.85))",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex w-full items-center justify-between px-6 py-2">
        <p className="font-medium text-white">{message}</p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
