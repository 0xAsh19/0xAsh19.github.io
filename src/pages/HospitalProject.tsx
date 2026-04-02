import { motion } from "framer-motion";
import { ArrowLeft, Building2, Users, Calendar, CreditCard, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Users, title: "Patient Records", desc: "Store and manage complete patient information including medical history, prescriptions, and reports." },
  { icon: Calendar, title: "Appointment Scheduling", desc: "Book, reschedule, and track appointments with doctors across departments." },
  { icon: ClipboardList, title: "Doctor Management", desc: "Manage doctor profiles, specializations, availability, and schedules." },
  { icon: CreditCard, title: "Billing System", desc: "Generate invoices, track payments, and manage insurance claims seamlessly." },
];

const HospitalProject = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Building2 className="text-primary" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Hospital Management <span className="gradient-text">System</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A comprehensive hospital management system designed to streamline daily operations — from patient registration and appointment scheduling to doctor management and billing. Built with a focus on efficiency, data integrity, and ease of use.
            </p>
            <div className="flex flex-wrap gap-2">
              {["C++", "OOP", "File Handling", "Data Structures"].map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-12"
          >
            Key <span className="gradient-text">Features</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-12"
          >
            How It <span className="gradient-text">Works</span>
          </motion.h2>
          <div className="max-w-2xl space-y-8">
            {[
              { step: "01", title: "Register Patient", desc: "Add new patients with their personal and medical details into the system." },
              { step: "02", title: "Schedule Appointment", desc: "Book appointments with available doctors based on department and time slots." },
              { step: "03", title: "Manage Records", desc: "Update medical records, prescriptions, and treatment history after each visit." },
              { step: "04", title: "Generate Bills", desc: "Automatically calculate and generate itemized bills for treatments and services." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-3xl font-bold gradient-text font-mono">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalProject;
