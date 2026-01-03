"use client";

import Link from "next/link";
import { NavItem } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

interface MegaMenuProps {
  item: NavItem;
}

export default function MegaMenu({ item }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const handleClose = () => {
    // Small delay prevents flicker when moving from trigger to panel
    closeTimeout.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  if (!item.columns?.length) {
    return (
      <Link
        href={item.href}
        className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 10 6"
          aria-hidden="true"
        >
          <path
            d="M1 1.5 5 5l4-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
      {open && (
        <div
          className="absolute left-1/2 top-12 z-30 w-[640px] -translate-x-1/2 rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-2xl"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className="text-sm text-slate-500">{item.description}</div>
          <div className="grid grid-cols-2 gap-6">
            {item.columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {column.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-slate-700 transition hover:text-brand-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
