import { motion } from "framer-motion";
import { ExternalLink, Building2, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive system to manage patient records, appointments, doctor schedules, and billing — streamlining hospital operations with an intuitive interface.",
    icon: Building2,
    tags: ["C++", "OOP", "File Handling"],
    link: "/projects/hospital-management",
  },
  {
    title: "Proforge – Esports Gaming App",
    description:
      "A prototype platform designed for gamers to connect, form teams, and compete in esports tournaments. Built with a focus on community and competitive play.",
    icon: Gamepad2,
    tags: ["Web Dev", "UI/UX", "Prototype"],
    link: "/projects/proforge",
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
            <Link key={project.title} to={project.link} className="block">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 rounded-2xl bg-card border border-border card-hover h-full"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
