import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing on backend engineering, systems, and tools.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <RevealGroup className="mx-auto max-w-3xl px-6 py-16">
      <RevealItem>
        <p className="flex items-center gap-2 font-mono text-sm text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.6)]" />
          Blog
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-100">
          Writing on <span className="gradient-text">backend engineering</span>
        </h1>
        <p className="mt-3 text-slate-400">
          Notes on APIs, microservices, databases, and the occasional
          production incident.
        </p>
      </RevealItem>

      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <RevealItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="glass glass-hover group block rounded-xl p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-emerald-300">
                  {post.title}
                </h2>
                <span className="font-mono text-xs text-slate-500">
                  {post.date}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {post.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
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
            </Link>
          </RevealItem>
        ))}
      </div>
    </RevealGroup>
  );
}
