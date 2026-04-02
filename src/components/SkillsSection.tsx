import { motion } from "framer-motion";

const skills = [
  { name: "C++", level: "Advanced" },
  { name: "Data Structures & Algorithms", level: "Advanced" },
  { name: "Web Development", level: "Intermediate" },
  { name: "HTML / CSS", level: "Proficient" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "Problem Solving", level: "Advanced" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtext mx-auto">
            Technologies and areas I work with regularly.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="skill-badge"
            >
              <span className="text-foreground">{skill.name}</span>
              <span className="ml-2 text-xs text-primary/70">• {skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
