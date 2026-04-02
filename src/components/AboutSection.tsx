import { motion } from "framer-motion";
import { Code2, BookOpen, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-heading mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12">
            I'm a second-year Computer Science Engineering student with a deep passion for
            coding, problem-solving, and building real-world applications. I specialize in
            C++ and Data Structures & Algorithms, constantly sharpening my competitive
            programming skills. I also enjoy crafting clean, responsive web experiences
            and love turning ideas into functional software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Code2, title: "Problem Solver", desc: "Passionate about algorithmic thinking and competitive coding." },
            { icon: BookOpen, title: "Lifelong Learner", desc: "Always exploring new technologies and CS fundamentals." },
            { icon: Lightbulb, title: "Builder", desc: "Love turning ideas into working projects and prototypes." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border card-hover text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
