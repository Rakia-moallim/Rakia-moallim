"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Layout, Cpu, Lightbulb } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    desc: "I build complete applications from frontend to backend, making sure the different parts of a system work together smoothly.",
    icon: Monitor,
  },
  // {
  //   num: "02",
  //   title: "Backend Development",
  //   desc: "I build the logic behind applications, including APIs, database integrations, authentication, and server-side functionality.",
  //   icon: Server,
  // },
  // {
  //   num: "03",
  //   title: "Frontend Development",
  //   desc: "I create responsive and user-friendly interfaces that make applications simple and enjoyable to use.",
  //   icon: Layout,
  // },
  {
    num: "02",
    title: "IoT & Connected Systems",
    desc: "I build systems that connect hardware, sensors, cloud services, and software to monitor real-world environments and provide useful information in real time.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Problem Solving",
    desc: "I enjoy taking a problem, understanding what is needed, and turning it into a practical software solution.",
    icon: Lightbulb,
  },
];

export default function WhatIDoSection() {
  return (
    <section id="what-i-do" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full md:mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-white/5 text-accent-primary group-hover:bg-accent-primary group-hover:text-black transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors font-mono select-none">
                  {service.num}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
