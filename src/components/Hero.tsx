"use client";

import { motion } from "framer-motion";
import CodeWindow from "@/components/CodeWindow";
import { site } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.p
          variants={item}
          className="flex items-center gap-2 font-mono text-sm text-emerald-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          available for backend roles
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-xl text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl"
        >
          Hi, I&apos;m {site.name.split(" ")[0]} —{" "}
          <span className="gradient-text">{site.title}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-lg text-lg leading-relaxed text-slate-400"
        >
          {site.bio}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="glow-btn rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="glass glass-hover rounded-md px-5 py-2.5 text-sm font-medium text-slate-200"
          >
            Get in Touch
          </a>
          <a
            href={site.resumeUrl}
            className="glass glass-hover rounded-md px-5 py-2.5 text-sm font-medium text-slate-200"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center lg:justify-end"
      >
        <CodeWindow />
      </motion.div>
    </section>
  );
}
