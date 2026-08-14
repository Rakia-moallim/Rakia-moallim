"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";
import TerminalInteractive from "./TerminalInteractive";

const badges = [
  { text: "Next.js", delay: 0.1, position: "top-[10%] left-[-5%]" },
  { text: "TypeScript", delay: 0.3, position: "top-[30%] right-[-10%]" },
  { text: "Node.js", delay: 0.5, position: "bottom-[20%] left-[-15%]" },
  { text: "MongoDB", delay: 0.2, position: "bottom-[5%] right-[10%]" },
  { text: "Flutter", delay: 0.6, position: "top-[-5%] right-[20%]" },
  //{ text: "ESP32", delay: 0.4, position: "bottom-[40%] right-[-15%]" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse-slow" />
              <span className="text-sm font-medium tracking-wide text-gray-300">
                HELLO, I'M RAKIA 👋
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              I build software that <br className="hidden sm:block" />
              <span className="text-gradient">solves real-world problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              I'm a Software Engineer and Full-Stack Developer building practical
              web applications, backend systems, and connected solutions. I'm
              currently expanding my skills in Cybersecurity and exploring how
              secure development practices can be applied to the software I build.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <Link
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
              >
                Let's Connect
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-5 mt-6"
            >
              <a href="https://github.com/Rakia-moallim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                <GithubIcon width={22} height={22} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/rakia-moallim-3b3582262/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-primary transition-colors p-2 hover:bg-white/10 rounded-full">
                <LinkedinIcon width={22} height={22} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:rakiamoallim@gmail.com" className="text-gray-400 hover:text-accent-secondary transition-colors p-2 hover:bg-white/10 rounded-full">
                <Mail size={22} />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Terminal & Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:ml-10 mt-12 lg:mt-0"
          >
            {/* Floating Badges */}
            <div className="absolute inset-0 pointer-events-none hidden sm:block">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: badge.delay,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${badge.position} px-3 py-1.5 rounded-md glass-card text-xs font-mono text-gray-300 shadow-xl border border-white/10 z-20`}
                >
                  {badge.text}
                </motion.div>
              ))}
            </div>

            <TerminalInteractive />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
