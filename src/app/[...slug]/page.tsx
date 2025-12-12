import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageDetail from "@/components/sections/PageDetail";
import { getPageBySlug } from "@/lib/content";

interface PageParams {
  slug?: string[];
}

interface PageProps {
  params: PageParams | Promise<PageParams>;
}

function buildSlug(segments: string[] = []) {
  return segments.join("/");
}

async function resolveParams(params: PageProps["params"]) {
  return await Promise.resolve(params);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await resolveParams(params);
  const slug = buildSlug(resolvedParams.slug);
  const page = await getPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await resolveParams(params);
  const slug = buildSlug(resolvedParams.slug);
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="mx-auto px-6 py-12">
      <PageDetail page={page} />
    </main>
  );
}
