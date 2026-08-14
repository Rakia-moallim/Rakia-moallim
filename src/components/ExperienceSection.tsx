"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full md:mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center justify-between group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent-primary md:-translate-x-1/2 transform translate-y-8 md:translate-y-0 z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>

            {/* Left side (empty on desktop for layout, icon on mobile) */}
            <div className="hidden md:block w-[45%] text-right pr-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card bg-white/5 border border-white/10">
                <Briefcase className="text-accent-primary" size={28} />
              </div>
            </div>

            {/* Content Card */}
            <div className="w-full md:w-[45%] pl-16 md:pl-8 py-4">
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-accent-primary/30 transition-colors relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 blur-3xl -z-10 rounded-full"></div>
                
                <div className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl glass-card bg-white/5 border border-white/10 mb-4">
                  <Briefcase className="text-accent-primary" size={20} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">
                  Software Developer Intern
                </h3>
                <h4 className="text-accent-primary font-medium mb-4 flex items-center gap-2">
                  <span className="bg-accent-primary/10 px-3 py-1 rounded-full text-sm">WaranCloud</span>
                </h4>
                
                <div className="space-y-4 text-gray-300 text-sm leading-relaxed mb-6">
                  <p>
                    During my software development internship at WaranCloud, I gained hands-on experience working in a professional software development environment and contributing to real-world software projects.
                  </p>
                  <p>
                    I worked with modern technologies including Next.js, React, Payload CMS, MongoDB, and Git. My work involved developing and improving application features, working with backend systems, and contributing to the development of maintainable web applications.
                  </p>
                  <p>
                    This experience helped me strengthen my skills in full-stack development and gave me a better understanding of how software is developed, maintained, and delivered in a professional team environment.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Payload CMS", "MongoDB", "GitHub"].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-mono bg-black/40 text-gray-400 rounded-md border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
