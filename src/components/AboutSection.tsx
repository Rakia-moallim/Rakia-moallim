"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            A little about me
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
              <Image
                src="/img/profile.jpeg"
                alt="Rakia Moallim Profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              <strong className="text-white font-medium">I'm a Software Engineer who enjoys building things that are useful, practical, and meaningful.</strong>
            </p>
            <p>
              My experience spans both frontend and backend development, and I enjoy working on complete systems, from designing user interfaces and developing APIs to managing databases and connecting different parts of an application.
            </p>
            <p>
              I've worked with technologies including Next.js, React, TypeScript, Node.js, Payload CMS, MongoDB, Firebase, Flutter. I've also worked on IoT projects that connect hardware, sensors, cloud services, and applications to solve real-world problems.
            </p>
            <p className="p-4 rounded-xl bg-accent-secondary/5 border border-accent-secondary/10">
              I'm currently learning <strong className="text-accent-secondary font-medium">Cybersecurity</strong> and developing my knowledge in areas such as security monitoring, threat detection, and secure software development. I'm also interested in exploring how AI and machine learning can contribute to building smarter and more secure systems.
            </p>
            <p>
              I believe that learning never really stops in technology, so I'm always curious to explore new tools, technologies, and ways of solving problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
