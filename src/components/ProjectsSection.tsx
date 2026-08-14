"use client";

import { motion } from "framer-motion";
import { ExternalLink, Activity } from "lucide-react";
import { GithubIcon } from "./Icons";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "KOOR",
    subtitle: "GL&FLMS (Gas Leakage & Flame Detection System)",
    description:
      "KOOR is an IoT-based safety system I developed to help detect gas leaks, monitor gas levels, and provide real-time safety alerts.\n\nThe project brings together hardware, software, and cloud technologies. It uses ESP32 and gas sensors to collect data, Firebase to manage real-time information, a Flutter mobile app for users, and a Next.js dashboard for administration and monitoring.\n\nThis project allowed me to work across different areas of development and understand how hardware, backend services, databases, cloud technologies, mobile applications, and web dashboards can work together as one complete system.",
    tags: ["ESP32", "Sensors", "Firebase", "Flutter", "Next.js", "TypeScript", "JavaScript", "React", "Tailwind CSS"],
    imagePlaceholder: "KOOR Dashboard & Mobile App",
    image: "/img/koorDashboard.png",
    highlight: true,
    githubUrl: "https://github.com/Rakia-moallim/GL-FLMS",
  },
  {
    num: "02",
    title: "CyberSentinel",
    subtitle: "Security Monitoring & Threat Detection Platform",
    description:
      "CyberSentinel is a security monitoring project focused on helping security teams make sense of large amounts of log data.\n\nThe project explores how different detection techniques can be combined to identify suspicious activity and separate potential security threats from normal system behaviour.\n\nThrough this project, I'm exploring the intersection of software development, cybersecurity, data analysis, and machine learning.",
    tags: ["Python", "Machine Learning", "Cybersecurity", "Log Analysis", "Threat Detection"],
    imagePlaceholder: "CyberSentinel Analytics Dashboard",
    highlight: false,
    learning: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div
                    className={`absolute -inset-1 rounded-2xl blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-500 ${
                      project.highlight ? "bg-accent-primary" : "bg-white/50"
                    }`}
                  ></div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden glass-card flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                          <Activity className={project.highlight ? "text-accent-primary" : "text-gray-400"} size={32} />
                        </div>
                        <p className="text-lg font-medium text-white">{project.imagePlaceholder}</p>
                        <p className="text-sm text-gray-500 mt-2 font-mono">Project Visual Placeholder</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-black text-white/10 font-mono">
                    {project.num}
                  </span>
                  {project.learning && (
                    <span className="px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/30 text-accent-secondary text-xs font-mono font-medium">
                      Learning Project
                    </span>
                  )}
                </div>

                <h3 className={`text-3xl font-bold mb-2 ${project.highlight ? "text-white" : "text-gray-100"}`}>
                  {project.title}
                </h3>
                <h4 className={`text-lg mb-6 ${project.highlight ? "text-accent-primary" : "text-gray-400"}`}>
                  {project.subtitle}
                </h4>

                <div className="glass-card p-6 rounded-xl mb-8 border-l-2 border-l-accent-primary relative overflow-hidden">
                  {project.description.split("\n\n").map((para, i) => (
                    <p key={i} className="text-gray-300 text-base leading-relaxed mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-mono bg-white/5 text-gray-300 rounded-lg border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                      <GithubIcon width={18} height={18} />
                      View Code
                    </a>
                  ) : (
                    <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                      <GithubIcon width={18} height={18} />
                      View Code
                    </button>
                  )}
                  {project.highlight && (
                    <button className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2">
                      Case Study
                      <ExternalLink size={18} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
