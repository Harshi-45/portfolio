"use client";

import { motion } from "framer-motion";

const lines: { tokens: { text: string; className?: string }[] }[] = [
  {
    tokens: [
      { text: "@RestController", className: "text-violet-300" },
    ],
  },
  {
    tokens: [
      { text: "class ", className: "text-cyan-300" },
      { text: "PortfolioService ", className: "text-emerald-300" },
      { text: "{", className: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "  @GetMapping", className: "text-violet-300" },
      { text: "(", className: "text-slate-400" },
      { text: '"/status"', className: "text-amber-300" },
      { text: ")", className: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "  Status ", className: "text-cyan-300" },
      { text: "check", className: "text-emerald-300" },
      { text: "() {", className: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "    return ", className: "text-violet-300" },
      { text: "Status.", className: "text-slate-300" },
      { text: "OPEN_TO_WORK", className: "text-emerald-300" },
      { text: ";", className: "text-slate-400" },
    ],
  },
  { tokens: [{ text: "  }", className: "text-slate-400" }] },
  { tokens: [{ text: "}", className: "text-slate-400" }] },
];

export default function CodeWindow() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="glass w-full max-w-md rounded-xl shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 font-mono text-xs text-slate-500">
          PortfolioService.java
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <div key={i}>
            {line.tokens.map((token, j) => (
              <span key={j} className={token.className}>
                {token.text}
              </span>
            ))}
          </div>
        ))}
      </pre>
    </motion.div>
  );
}
