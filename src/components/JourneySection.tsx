"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  "Software Engineering",
  "Full-Stack Development",
  "Backend Development",
  "IoT & Connected Systems",
  "Cybersecurity",
];

export default function JourneySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Always learning. Always building.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My journey is about continuously expanding what I can build. I'm currently exploring Cybersecurity and learning how to build software with security in mind from the beginning.
          </p>
        </motion.div>

        <div className="relative py-12 max-w-lg mx-auto">
          {/* Animated Pathway Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white/10 via-accent-primary/20 to-accent-secondary/50 -translate-x-1/2 rounded-full"></div>
          
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-accent-primary to-accent-secondary -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />

          <div className="flex flex-col gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center justify-center relative group"
              >
                <div className={`px-6 py-4 rounded-xl border font-bold tracking-wide transition-all duration-300 w-full sm:w-[80%] backdrop-blur-md ${
                  index === steps.length - 1 
                    ? "bg-accent-secondary/10 border-accent-secondary/50 text-accent-secondary shadow-[0_0_20px_rgba(52,211,153,0.15)] scale-105" 
                    : "bg-black/60 border-white/10 text-gray-300 group-hover:border-accent-primary/50 group-hover:text-white"
                }`}>
                  {step}
                  
                  {index !== steps.length - 1 && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/20 hidden sm:block">
                      <ArrowDown size={24} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
