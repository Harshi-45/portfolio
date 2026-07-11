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
        className="h-[2px] origin-left bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400"
        style={{ scaleX }}
      />
      <div className="glass border-x-0 border-t-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-mono text-base font-bold tracking-tight text-white"
          >
            <span className="gradient-text">hari</span>
            <span className="text-fuchsia-400">.</span>dev
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1 text-sm text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 transition-all duration-300 hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
