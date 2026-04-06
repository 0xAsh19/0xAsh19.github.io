import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow - green */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      {/* Ambient glow - pink */}
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 glow-text text-foreground"
        >
          Ashish Anil
          <br />
          <span className="gradient-text">Chaudhari</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 font-light"
        >
          Computer Science Engineering Student | C++ | DSA | Web Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[var(--glow-primary-strong)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download="Ashish_Anil_Chaudhari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:shadow-[var(--glow-accent-strong)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:shadow-[var(--glow-primary)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground animate-bounce block">
          <ChevronDown size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
