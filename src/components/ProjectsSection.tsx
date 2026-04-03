import { motion } from "framer-motion";
import { ExternalLink, Box, Cpu } from "lucide-react";

const projects = [
  {
    title: "3D Complex Visualizer",
    description:
      "An interactive 3D visualization tool for complex mathematical functions, built with Python. Explore and render complex number mappings in stunning three-dimensional space.",
    icon: Box,
    tags: ["Python", "3D Graphics", "Math", "Visualization"],
    link: "https://github.com/0xAsh19/3D-Complex-Visualizer",
  },
  {
    title: "Raymarcher",
    description:
      "A raymarching renderer built from scratch in C++. Renders 3D scenes using signed distance functions with lighting, shadows, and reflections.",
    icon: Cpu,
    tags: ["C++", "Graphics", "Raymarching", "SDF"],
    link: "https://github.com/0xAsh19/raymarcher",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtext mx-auto">
            Some things I've built and worked on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group p-8 rounded-2xl bg-card border border-border card-hover h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <project.icon className="text-primary" size={28} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  {project.title}
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
