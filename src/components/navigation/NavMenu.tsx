"use client";

import Image from "next/image";
import Link from "next/link";
import { NavigationData } from "@/lib/types";
import MegaMenu from "./MegaMenu";
import { useState } from "react";

interface NavMenuProps {
  navigation: NavigationData;
}

export default function NavMenu({ navigation }: NavMenuProps) {
  const { brand, mainNav, utilityLinks, applyCta, controls } = navigation;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative flex w-full items-center justify-between gap-4 px-6 py-4 text-white">
      <Link href="/" className="flex items-center gap-3 lg:flex-1">
        {brand.logo && (
          <Image
            src={brand.logo}
            alt={brand.name}
            width={200}
            height={60}
            className="object-contain"
            priority
            quality={100}
          />
        )}
      </Link>

      <nav className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 lg:flex">
        {mainNav.map((item) => (
          <MegaMenu key={item.label} item={item} />
        ))}
      </nav>

      <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
        {utilityLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-white/70 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={applyCta.href}
          className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-700"
        >
          {applyCta.label}
        </Link>
      </div>

      <button
        type="button"
        aria-label={mobileOpen ? controls.closeLabel : controls.menuLabel}
        className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white lg:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        {mobileOpen ? controls.closeLabel : controls.menuLabel}
      </button>

      {mobileOpen && (
        <div className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl lg:hidden">
          <div className="space-y-6">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="text-base font-semibold text-slate-900"
                >
                  {item.label}
                </Link>
                <p className="text-sm text-slate-500">{item.description}</p>
                {item.columns && (
                  <ul className="mt-3 space-y-2">
                    {item.columns
                      .flatMap((column) => column.links)
                      .map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-slate-600"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={applyCta.href}
            className="mt-6 block rounded-full bg-rose-600 px-5 py-2 text-center text-sm font-semibold text-white"
          >
            {applyCta.label}
          </Link>
        </div>
      )}
    </div>
  );
}
