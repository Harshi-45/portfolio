import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing on backend engineering, systems, and tools.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-sm text-emerald-400">Blog</p>
      <h1 className="mt-1 text-3xl font-semibold text-slate-100">
        Writing on backend engineering
      </h1>
      <p className="mt-3 text-slate-400">
        Notes on APIs, microservices, databases, and the occasional
        production incident.
      </p>

      <div className="mt-10 divide-y divide-slate-800 border-t border-slate-800">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-emerald-400">
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
                  className="rounded-full bg-slate-800 px-2.5 py-1 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
