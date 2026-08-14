"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "input", text: "whoami" },
  { type: "output", text: "rakia.dev" },
  { type: "output", text: " " },
  { type: "output", text: "role:", color: "text-accent-primary" },
  { type: "output", text: "Software Engineer" },
  { type: "output", text: " " },
  { type: "output", text: "focus:", color: "text-accent-primary" },
  { type: "output", text: "Full-Stack Development" },
  { type: "output", text: " " },
  { type: "output", text: "currently_learning:", color: "text-accent-secondary" },
  { type: "output", text: "Cybersecurity" },
];

export default function TerminalInteractive() {
  const [displayedLines, setDisplayedLines] = useState<number>(0);

  useEffect(() => {
    if (displayedLines < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => prev + 1);
      }, displayedLines === 0 ? 800 : 300);
      return () => clearTimeout(timer);
    }
  }, [displayedLines]);

  return (
    <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden glass border border-white/10 shadow-2xl relative group">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-gray-400 font-mono flex items-center gap-2">
          <span>bash</span>
          <span className="text-gray-600">—</span>
          <span>80x24</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm sm:text-base min-h-[320px]">
        {terminalLines.slice(0, displayedLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`mb-1 ${line.type === "input" ? "flex gap-3" : ""}`}
          >
            {line.type === "input" && (
              <span className="text-accent-secondary">$</span>
            )}
            <span
              className={`${
                line.color || (line.type === "input" ? "text-white" : "text-gray-300")
              }`}
            >
              {line.text}
            </span>
          </motion.div>
        ))}
        {displayedLines < terminalLines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2.5 h-5 bg-accent-primary ml-1 align-middle"
          />
        )}
        {displayedLines === terminalLines.length && (
          <div className="flex gap-3 mt-1 text-gray-400">
            <span className="text-accent-secondary">$</span>
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-5 bg-accent-primary align-middle"
            />
          </div>
        )}
      </div>

      {/* Decorative Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>
    </div>
  );
}
