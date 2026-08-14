"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";

export default function CurrentlyLearningSection() {
  return (
    <section className="py-24 relative bg-black">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-secondary/10 border border-accent-secondary/30 text-accent-secondary text-sm font-bold tracking-widest uppercase mb-6">
            Currently Learning
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-secondary/20 via-blue-500/10 to-accent-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative glass-card p-10 md:p-16 rounded-3xl border border-white/10 overflow-hidden">
            {/* Abstract Background element */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-[url('/grid.svg')] opacity-10 [mask-image:radial-gradient(circle,white,transparent_70%)] pointer-events-none"></div>

            <div className="flex justify-center mb-8 relative">
              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-black border border-accent-secondary/30 shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                <ShieldCheck className="text-accent-secondary" size={40} />
                {/* Floating particle */}
                <motion.div 
                  animate={{ y: [-5, 5, -5], x: [-2, 2, -2] }} 
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-2 text-accent-primary"
                >
                  <Lock size={16} />
                </motion.div>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Cybersecurity
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              I'm currently learning Cybersecurity and developing my understanding of security concepts, security monitoring, threat detection, and secure software development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              I'm building practical projects and exploring how security can be considered throughout the software development process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
