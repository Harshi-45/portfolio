import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getAllSlugs();
  if (!slugs.includes(slug)) return {};

  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const slugs = getAllSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = await getPostBySlug(slug);

  return (
    <RevealGroup className="mx-auto max-w-3xl px-6 py-16">
      <RevealItem>
        <Link
          href="/blog"
          className="font-mono text-sm text-emerald-400 hover:underline"
        >
          &larr; Back to blog
        </Link>
        <h1 className="mt-4 text-3xl font-semibold text-slate-100">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="font-mono">{post.date}</span>
          <span>{post.readingTime}</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800/70 px-2.5 py-1 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </RevealItem>
      <RevealItem>
        <div
          className="prose prose-invert prose-emerald glass mt-10 max-w-none rounded-2xl p-8 prose-pre:border prose-pre:border-white/10 prose-pre:bg-slate-950/60"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </RevealItem>
    </RevealGroup>
  );
}
