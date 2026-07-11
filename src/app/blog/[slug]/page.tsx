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
    <RevealGroup className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <RevealItem>
        <Link
          href="/blog"
          className="font-mono text-sm text-fuchsia-300 hover:underline"
        >
          &larr; Back to blog
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="font-mono">{post.date}</span>
          <span>{post.readingTime}</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-2.5 py-1 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </RevealItem>
      <RevealItem>
        <div
          className="prose prose-invert prose-fuchsia glass mt-10 max-w-none rounded-3xl p-9 prose-pre:border prose-pre:border-white/10 prose-pre:bg-slate-950/60"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </RevealItem>
    </RevealGroup>
  );
}
