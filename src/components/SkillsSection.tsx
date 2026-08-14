"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs", "Payload CMS", "Authentication", "API Integration", "Server-side Development"],
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "Firebase", "Firebase Realtime Database", "Google Cloud Storage"],
  },
  {
    title: "Mobile & IoT",
    skills: ["Flutter", "Dart", "ESP32", "Sensors", "Embedded Systems", "Real-Time Monitoring"],
  },
  {
    title: "Tools & Environment",
    skills: ["Linux", "Terminal / Command Line", "Git", "GitHub", "Postman", "VS Code", "AI-Assisted Development"
],
  },
];

const learningSkills = [
  "Security Monitoring",
  "Threat Detection",
  "Secure Software Development",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 border border-white/10 rounded-md hover:border-accent-primary/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-full"
          >
            <div className="relative h-full glass-card p-6 rounded-2xl border-accent-secondary/30 bg-accent-secondary/5 overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-secondary/20 blur-3xl rounded-full"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent-secondary/20 text-accent-secondary rounded-lg">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Cybersecurity</h3>
                    <p className="text-xs text-accent-secondary font-mono">Currently Learning</p>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {learningSkills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-accent-secondary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-accent-secondary rounded-full animate-pulse-slow"></div>
                      </div>
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-xs text-gray-400">
                  <p className="text-accent-secondary mb-1">~$ status --learning</p>
                  <p>Building practical projects and exploring secure development lifecycle.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
