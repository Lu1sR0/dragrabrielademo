import { motion } from "framer-motion";
import { Heart, MessageCircle, Clock, Users, BookOpen, Sparkles } from "lucide-react";

const items = [
  { icon: Heart, title: "Atendimento humanizado", desc: "Cada criança é tratada com carinho, paciência e atenção individualizada.", gradient: "from-rose/60 to-rose/20" },
  { icon: MessageCircle, title: "Linguagem clara", desc: "Explicações simples e acessíveis, sem jargões médicos desnecessários.", gradient: "from-lavender/60 to-lavender/20" },
  { icon: Clock, title: "Consulta sem pressa", desc: "Tempo dedicado para ouvir, examinar e orientar com calma.", gradient: "from-warm/60 to-warm/20" },
  { icon: Users, title: "Acompanhamento próximo", desc: "Disponibilidade e proximidade durante todo o tratamento.", gradient: "from-sage/60 to-sage/20" },
  { icon: BookOpen, title: "Medicina baseada em evidências", desc: "Condutas atualizadas, seguras e cientificamente comprovadas.", gradient: "from-sky/60 to-sky/20" },
  { icon: Sparkles, title: "Cuidado integral", desc: "Olhar amplo que considera a saúde física, emocional e social.", gradient: "from-lavender/60 to-rose/20" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const DifferentialsSection = () => {
  return (
    <section className="py-24 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lavender/20 via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      {/* Floating accents */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[10%] w-20 h-20 rounded-full bg-primary/[0.04] blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-[15%] w-28 h-28 rounded-full bg-rose/30 blur-2xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 max-w-xl mx-auto"
        >
          <span className="section-label bg-primary/8 text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Diferenciais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground mt-4 mb-5 text-balance">
            O que torna esse atendimento{" "}
            <span className="text-gradient italic">único</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cada detalhe foi pensado para oferecer uma experiência de cuidado completa e acolhedora.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto"
        >
          {items.map((d, i) => (
            <motion.div
              key={d.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl bg-card border border-border/50 p-6 sm:p-7 overflow-hidden transition-shadow duration-500 hover:shadow-xl hover:shadow-primary/[0.06] hover:border-primary/15 cursor-default"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${d.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-2xl bg-card border border-primary/10 flex items-center justify-center mb-5 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:border-primary/20 transition-all duration-500"
                >
                  <d.icon size={24} className="text-primary" />
                </motion.div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2.5">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
