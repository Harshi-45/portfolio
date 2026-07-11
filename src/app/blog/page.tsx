import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing on backend engineering, systems, and tools.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <RevealGroup className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <RevealItem>
        <span className="pill-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-fuchsia-200">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_3px_rgba(217,70,239,0.6)]" />
          Blog
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
          Writing on <span className="gradient-text">backend engineering</span>
        </h1>
        <p className="mt-3 text-lg text-slate-300/90">
          Notes on APIs, microservices, databases, and the occasional
          production incident.
        </p>
      </RevealItem>

      <div className="mt-10 space-y-5">
        {posts.map((post) => (
          <RevealItem key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <TiltCard className="glow-border card-hover glass group block rounded-2xl p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-lg font-semibold text-white transition-colors group-hover:text-fuchsia-300">
                    {post.title}
                  </h2>
                  <span className="font-mono text-xs text-slate-400">
                    {post.date}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
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
              </TiltCard>
            </Link>
          </RevealItem>
        ))}
      </div>
    </RevealGroup>
  );
}
