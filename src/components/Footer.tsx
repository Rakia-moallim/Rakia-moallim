import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-md">
            <Link href="/" className="inline-block font-bold text-xl tracking-tight text-white mb-4">
              Rakia Moallim
            </Link>
            <p className="text-accent-primary font-medium mb-2">
              Software Engineer & Full-Stack Developer
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              "Building practical software, backend systems, and connected solutions."
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/Rakia-moallim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon width={24} height={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rakia-moallim-3b3582262/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-primary transition-colors">
              <LinkedinIcon width={24} height={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:rakiamoallim@gmail.com" className="text-gray-400 hover:text-accent-secondary transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Rakia Moallim. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
