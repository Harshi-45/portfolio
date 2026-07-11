"use client";

import { motion } from "framer-motion";
import CodeWindow from "@/components/CodeWindow";
import TiltCard from "@/components/TiltCard";
import { site } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-24 sm:pt-32 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div
        className="flex flex-col gap-7"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.p
          variants={item}
          className="pill-badge flex w-fit items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-fuchsia-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
          </span>
          available for backend roles
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-2xl text-6xl font-extrabold tracking-tight text-white sm:text-7xl"
        >
          {site.name.split(" ")[0]}
          <br />
          <span className="gradient-text">builds backend systems</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-lg text-lg leading-relaxed text-slate-300/90 sm:text-xl"
        >
          {site.bio}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold text-white"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-ghost glass rounded-full px-7 py-3.5 text-sm font-semibold text-slate-100"
          >
            Get in Touch
          </a>
          <a
            href={site.resumeUrl}
            className="btn-ghost glass rounded-full px-7 py-3.5 text-sm font-semibold text-slate-100"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center lg:justify-end"
      >
        <TiltCard className="glow-border rounded-xl">
          <CodeWindow />
        </TiltCard>
      </motion.div>
    </section>
  );
}
