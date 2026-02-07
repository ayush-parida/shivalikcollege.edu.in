import Image from "next/image";
import type { Metadata } from "next";
import { getBoardPage } from "@/lib/content";

const boardDataPromise = getBoardPage();

export async function generateMetadata(): Promise<Metadata> {
	const data = await boardDataPromise;
	return data.metadata;
}

export default async function BoardPage() {
	const { hero, members, highlightLabel } = await boardDataPromise;
	const featuredMembers = members.slice(0, 5);

	return (
		<main className="space-y-16 pb-20 pt-10 px-6">
			<section className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-slate-900 text-white shadow-2xl">
				{hero.image ? (
					<Image
						src={hero.image}
						alt={hero.title}
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
				) : null}
				<div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
				<div className="relative z-10 grid gap-8 px-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-16">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
							{hero.eyebrow}
						</p>
						<h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
							{hero.title}
						</h1>
						<p className="mt-4 text-lg text-white/80">{hero.intro}</p>
					</div>
					{featuredMembers.length ? (
						<div className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
							<p className="text-sm uppercase tracking-[0.4em] text-white/60">
								{highlightLabel}
							</p>
							<ul className="space-y-3 text-white/90">
								{featuredMembers.map((member) => (
									<li key={member} className="text-base font-semibold">
										{member}
									</li>
								))}
							</ul>
						</div>
					) : null}
				</div>
			</section>

			{members.length ? (
				<section className="rounded-4xl border border-brand-100 bg-brand-50/60 p-8">
					<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
								{highlightLabel}
							</p>
							<h3 className="text-2xl font-semibold text-slate-900">
								BOG COMPOSITION IS AS FOLLOWS:
							</h3>
						</div>
						<p className="text-sm text-brand-800/80">
							Seasoned educators, researchers, and industry leaders guiding SCE.
						</p>
					</div>
					<div className="mt-8 grid gap-4 md:grid-cols-2">
						{members.map((member) => {
							const [name, ...details] = member.split(" - ");
							const detailText = details.join(" - ");

							return (
								<article
									key={member}
									className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-sm"
								>
									<p className="text-base font-semibold text-slate-900">{name}</p>
									{detailText ? (
										<p className="mt-1 text-sm text-slate-600">{detailText}</p>
									) : null}
								</article>
							);
						})}
					</div>
				</section>
			) : null}
		</main>
	);
}
