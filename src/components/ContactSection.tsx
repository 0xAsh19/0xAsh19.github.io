import { motion } from "framer-motion";
import { Mail, Phone, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "ashishchaudhari9012@gmail.com",
    href: "mailto:ashishchaudhari9012@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9324172879",
    href: "tel:+919324172879",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Asheesh",
    href: "https://github.com/Asheesh",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtext mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "GitHub" ? "_blank" : undefined}
              rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border card-hover text-center block"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground break-all">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
