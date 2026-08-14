"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-12 md:p-20 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay"></div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight relative z-10">
            Let's build something <br className="hidden md:block" />
            <span className="text-gradient">together.</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto relative z-10">
            Have an idea, a project, or an opportunity? I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a
              href="mailto:rakiamoallim@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
            >
              Let's Talk
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-6 relative z-10">
            <a href="mailto:rakiamoallim@gmail.com" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all group">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/Rakia-moallim" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all group">
              <GithubIcon width={20} height={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/rakia-moallim-3b3582262/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent-primary hover:border-accent-primary/50 transition-all group">
              <LinkedinIcon width={20} height={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
