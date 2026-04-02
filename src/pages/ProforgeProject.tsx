import { motion } from "framer-motion";
import { ArrowLeft, Gamepad2, Trophy, Users, Swords, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Users, title: "Team Formation", desc: "Find and connect with players to build competitive teams based on skill level and game preferences." },
  { icon: Trophy, title: "Tournament System", desc: "Create, join, and manage esports tournaments with brackets, scoring, and leaderboards." },
  { icon: Swords, title: "Matchmaking", desc: "Smart matchmaking that pairs players and teams of similar skill for fair, competitive matches." },
  { icon: MessageSquare, title: "Community Hub", desc: "Chat rooms, forums, and social features to connect gamers and grow the community." },
];

const ProforgeProject = () => {
  return (
    <div className="min-h-screen theme-proforge">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full accent-glow-bg blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl accent-bg flex items-center justify-center mb-6">
              <Gamepad2 className="accent-text" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Proforge – <span className="gradient-text-theme">Esports Gaming App</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A prototype platform built for gamers to connect, form competitive teams, and participate in esports tournaments. Proforge focuses on community building, fair matchmaking, and delivering an immersive competitive gaming experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Web Development", "UI/UX Design", "Prototype", "Gaming"].map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-md accent-tag">
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
            Core <span className="gradient-text-theme">Features</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border accent-border accent-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg accent-bg flex items-center justify-center mb-4">
                  <f.icon className="accent-text" size={22} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-12"
          >
            The <span className="gradient-text-theme">Vision</span>
          </motion.h2>
          <div className="max-w-2xl space-y-8">
            {[
              { step: "01", title: "Discover", desc: "Browse games, find active communities, and discover players near your skill level." },
              { step: "02", title: "Connect", desc: "Send team invites, chat with players, and build your competitive squad." },
              { step: "03", title: "Compete", desc: "Enter tournaments, climb leaderboards, and prove your skills against the best." },
              { step: "04", title: "Grow", desc: "Track your stats, earn achievements, and build your esports profile over time." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-3xl font-bold gradient-text-theme font-mono">{item.step}</span>
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

export default ProforgeProject;
