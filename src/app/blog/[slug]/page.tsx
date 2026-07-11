import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

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
    <article className="mx-auto max-w-3xl px-6 py-16">
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
            className="rounded-full bg-slate-800 px-2.5 py-1 text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className="prose prose-invert prose-emerald mt-10 max-w-none prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
