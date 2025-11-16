import Image from "next/image";
import Link from "next/link";

import { pageContentRegistry } from "@/data/pageContent";
import type { PageContent } from "@/data/pageContent";

type PageRendererProps = {
    path: string;
    title?: string;
    description?: string;
    content?: PageContent;
};

const isExternal = (href: string) =>
    href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");

const linkProps = (href: string) =>
    isExternal(href)
        ? {
            target: "_blank" as const,
            rel: "noreferrer",
        }
        : {};

const sectionTone = (index: number) => {
    if (index % 3 === 1) {
        return "bg-gradient-to-br from-white to-[var(--surface)] shadow-sm";
    }

    if (index % 3 === 2) {
        return "bg-white/90 shadow-lg ring-1 ring-slate-100";
    }

    return "bg-[var(--surface)]/80 shadow";
};

const linkCardTone = (toneIndex: number) => {
    const palette = [
        "from-[var(--brand-primary)]/90 to-[var(--brand-secondary)]/90",
        "from-[#1f3a8a] to-[#475569]",
        "from-[#9b2c2c] to-[#f6ad55]",
    ];

    return palette[toneIndex % palette.length];
};

const ActionLink = ({
    href,
    label,
    variant = "primary",
}: {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
}) => {
    const baseClasses =
        "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
    const variantClasses =
        variant === "secondary"
            ? "bg-[var(--brand-secondary)] text-white shadow-sm ring-1 ring-[var(--brand-secondary)]/30 hover:opacity-90"
            : "bg-[var(--brand-primary)] text-white shadow-md hover:bg-[var(--brand-gold)]";

    if (isExternal(href)) {
        return (
            <a href={href} {...linkProps(href)} className={`${baseClasses} ${variantClasses}`}>
                {label}
            </a>
        );
    }

    return (
        <Link href={href} className={`${baseClasses} ${variantClasses}`}>
            {label}
        </Link>
    );
};

const SidebarGroup = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
    <section className="rounded-2xl bg-white/80 p-5 shadow-lg ring-1 ring-slate-100">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-primary)]">{title}</p>
        <ul className="mt-4 space-y-3 text-sm">
            {links.map((link) => (
                <li key={`${title}-${link.label}`}>
                    {isExternal(link.href) ? (
                        <a
                            href={link.href}
                            {...linkProps(link.href)}
                            className="font-medium text-slate-700 transition hover:text-[var(--brand-primary)]"
                        >
                            {link.label}
                        </a>
                    ) : (
                        <Link
                            href={link.href}
                            className="font-medium text-slate-700 transition hover:text-[var(--brand-primary)]"
                        >
                            {link.label}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    </section>
);

export function PageRenderer({ path, title, description, content: overrideContent }: PageRendererProps) {
    const content = overrideContent ?? pageContentRegistry[path];

    if (!content) {
        return (
            <div className="mx-auto w-full max-w-5xl px-6 py-16">
                <header>
                    {title && <p className="text-sm font-semibold text-[var(--brand-primary)]">{title}</p>}
                    <h1 className="text-3xl font-bold text-slate-900">{path}</h1>
                    {description && <p className="mt-3 text-base text-slate-600">{description}</p>}
                </header>
                <section className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-slate-500">
                    Detailed content for this route will be rendered here in the next step.
                </section>
            </div>
        );
    }

    const { hero, quickFacts, sections, sidebar } = content;

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <section className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-white via-[#fef9f1] to-[#f4efe6] p-8 shadow-xl ring-1 ring-slate-100">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -right-12 top-4 h-64 w-64 rounded-full bg-[var(--brand-primary)]/5 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[var(--brand-secondary)]/10 blur-3xl" />
                </div>
                <div className="relative flex flex-col gap-8 lg:flex-row">
                    <div className="flex-1 space-y-4">
                        {hero.eyebrow && (
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-primary)]">
                                {hero.eyebrow}
                            </p>
                        )}
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{hero.title}</h1>
                            {hero.subtitle && (
                                <p className="mt-2 text-lg font-medium text-[var(--brand-secondary)]">{hero.subtitle}</p>
                            )}
                        </div>
                        <p className="text-base leading-relaxed text-slate-600">{hero.description}</p>
                        {hero.actions && hero.actions.length > 0 && (
                            <div className="flex flex-wrap gap-3 pt-2">
                                {hero.actions.map((action) => (
                                    <ActionLink key={action.label} {...action} />
                                ))}
                            </div>
                        )}
                    </div>
                    {hero.media && (
                        <div className="w-full max-w-[360px] self-stretch overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={hero.media.src}
                                    alt={hero.media.alt}
                                    fill
                                    sizes="(min-width: 1024px) 360px, 100vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>
                {hero.highlights && hero.highlights.length > 0 && (
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {hero.highlights.map((highlight, highlightIndex) => (
                            <article
                                key={highlight.label}
                                className={`rounded-3xl bg-white/80 p-5 text-slate-700 shadow-lg ring-1 ring-slate-100 ${highlightIndex % 2 === 0 ? "border-l-4 border-[var(--brand-primary)]" : "border-l-4 border-[var(--brand-secondary)]"
                                    }`}
                            >
                                <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                                    {highlight.label}
                                </p>
                                <p className="mt-3 text-2xl font-semibold text-slate-900">{highlight.value}</p>
                                {highlight.subtext && (
                                    <p className="mt-1 text-sm text-slate-500">{highlight.subtext}</p>
                                )}
                            </article>
                        ))}
                    </div>
                )}
            </section>

            {quickFacts && quickFacts.length > 0 && (
                <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {quickFacts.map((fact, factIndex) => (
                        <article
                            key={fact.label}
                            className={`rounded-3xl p-5 text-slate-700 shadow-lg ring-1 ring-slate-100 ${factIndex % 2 === 0 ? "bg-white" : "bg-[var(--surface)]"
                                }`}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-primary)]">{fact.label}</p>
                            <p className="mt-2 text-xl font-semibold text-slate-900">{fact.value}</p>
                        </article>
                    ))}
                </section>
            )}

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(260px,320px)]">
                <div className="space-y-8">
                    {sections.map((section, index) => {
                        const wrapperClasses = `rounded-3xl p-6 ${sectionTone(index)}`;
                        if (section.type === "richText") {
                            return (
                                <article key={`section-${index}`} className={wrapperClasses}>
                                    {section.eyebrow && (
                                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-primary)]">
                                            {section.eyebrow}
                                        </p>
                                    )}
                                    {section.title && (
                                        <h2 className="mt-1 text-2xl font-semibold text-slate-900">{section.title}</h2>
                                    )}
                                    <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                                            <p key={`paragraph-${paragraphIndex}`}>{paragraph}</p>
                                        ))}
                                    </div>
                                </article>
                            );
                        }

                        if (section.type === "list") {
                            const columns = section.columns ?? 1;
                            const columnClass =
                                columns === 3
                                    ? "sm:grid-cols-3"
                                    : columns === 2
                                        ? "sm:grid-cols-2"
                                        : "sm:grid-cols-1";

                            return (
                                <article key={`section-${index}`} className={wrapperClasses}>
                                    <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                                    {section.intro && <p className="mt-3 text-base text-slate-600">{section.intro}</p>}
                                    <ul className={`mt-5 grid grid-cols-1 gap-4 text-base text-slate-700 ${columnClass}`}>
                                        {section.items.map((item, itemIndex) => (
                                            <li key={`list-${itemIndex}`} className="rounded-2xl bg-[var(--surface)] p-4">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        }

                        if (section.type === "cards") {
                            return (
                                <article key={`section-${index}`} className={wrapperClasses}>
                                    <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                                        {section.cards.map((card, cardIndex) => (
                                            <div key={`card-${cardIndex}`} className="rounded-2xl bg-[var(--surface)] p-5">
                                                <p className="text-lg font-semibold text-slate-900">{card.title}</p>
                                                <p className="mt-2 text-sm text-slate-600">{card.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            );
                        }

                        if (section.type === "table") {
                            return (
                                <article key={`section-${index}`} className={wrapperClasses}>
                                    <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                                    <div className="mt-5 overflow-x-auto">
                                        <table className="min-w-full divide-y divide-slate-100 text-left text-sm">
                                            <thead>
                                                <tr>
                                                    {section.headers.map((header) => (
                                                        <th key={header} className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {section.rows.map((row, rowIndex) => (
                                                    <tr key={`row-${rowIndex}`} className="text-slate-700">
                                                        {row.map((cell, cellIndex) => (
                                                            <td key={`cell-${rowIndex}-${cellIndex}`} className="px-4 py-3">
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {section.footnote && <p className="mt-3 text-xs text-slate-500">{section.footnote}</p>}
                                </article>
                            );
                        }

                        if (section.type === "faq") {
                            return (
                                <article key={`section-${index}`} className={wrapperClasses}>
                                    <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                                    <div className="mt-4 space-y-4">
                                        {section.items.map((item, faqIndex) => (
                                            <details
                                                key={`faq-${faqIndex}`}
                                                className="group rounded-2xl border border-slate-100 bg-[var(--surface)] p-4"
                                            >
                                                <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                                                    {item.question}
                                                </summary>
                                                <p className="mt-3 text-base text-slate-600">{item.answer}</p>
                                            </details>
                                        ))}
                                    </div>
                                </article>
                            );
                        }

                        if (section.type === "links") {
                            const columns = section.columns ?? 1;
                            const columnClass =
                                columns === 3
                                    ? "sm:grid-cols-3"
                                    : columns === 2
                                        ? "sm:grid-cols-2"
                                        : "sm:grid-cols-1";

                            return (
                                <article key={`section-${index}`} className="rounded-3xl bg-transparent">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                        <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                                        <div className="h-px flex-1 bg-gradient-to-r from-[var(--brand-primary)]/40 to-transparent" />
                                    </div>
                                    <div className={`mt-4 grid grid-cols-1 gap-4 ${columnClass}`}>
                                        {section.links.map((link, linkIndex) => (
                                            <div key={link.label} className={`rounded-3xl bg-gradient-to-br ${linkCardTone(linkIndex)} p-4 shadow-lg transition hover:-translate-y-0.5`}>
                                                {isExternal(link.href) ? (
                                                    <a
                                                        href={link.href}
                                                        {...linkProps(link.href)}
                                                        className="flex items-center justify-between text-sm font-semibold text-white"
                                                    >
                                                        <span>{link.label}</span>
                                                        <span aria-hidden>→</span>
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        className="flex items-center justify-between text-sm font-semibold text-white"
                                                    >
                                                        <span>{link.label}</span>
                                                        <span aria-hidden>→</span>
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            );
                        }

                        if (section.type === "media") {
                            return (
                                <article key={`section-${index}`} className={wrapperClasses}>
                                    {section.title && <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>}
                                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                                        {section.images.map((image) => (
                                            <figure key={image.src} className="space-y-3">
                                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        fill
                                                        sizes="(min-width: 1024px) 45vw, 100vw"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                {image.caption && (
                                                    <figcaption className="text-sm text-slate-500">{image.caption}</figcaption>
                                                )}
                                            </figure>
                                        ))}
                                    </div>
                                </article>
                            );
                        }

                        return null;
                    })}
                </div>
                {sidebar && sidebar.length > 0 && (
                    <aside className="space-y-6 lg:sticky lg:top-28">
                        {sidebar.map((group) => (
                            <SidebarGroup key={group.title} {...group} />
                        ))}
                    </aside>
                )}
            </div>
        </div>
    );
}
