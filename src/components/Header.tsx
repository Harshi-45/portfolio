"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400"
        style={{ scaleX }}
      />
      <div className="glass border-x-0 border-t-0">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-tight text-slate-100"
          >
            <span className="gradient-text">hari</span>
            <span className="text-emerald-400">.</span>dev
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 transition-colors hover:text-slate-100"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
