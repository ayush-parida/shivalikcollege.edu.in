import Link from "next/link";
import { FooterData } from "@/lib/types";

interface FooterColumnsProps {
  footer: FooterData;
}

export default function FooterColumns({ footer }: FooterColumnsProps) {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-slate-900">
            {footer.address.headline}
          </p>
          <div className="mt-3 text-sm text-slate-600">
            {footer.address.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-4 text-sm text-slate-600">
            <p>{footer.address.contact.phone}</p>
            <p>{footer.address.contact.email}</p>
          </div>
        </div>
        {footer.columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-brand-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            {footer.social.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="font-semibold text-brand-600"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {footer.legal.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
