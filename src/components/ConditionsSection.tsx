import { motion } from "framer-motion";
import { TrendingUp, Clock, Scale, Activity, Droplets, Stethoscope, BarChart3 } from "lucide-react";

const conditions = [
  { icon: TrendingUp, title: "Crescimento inadequado", desc: "Avaliação da estatura e velocidade de crescimento com acompanhamento individualizado.", color: "bg-lavender" },
  { icon: Clock, title: "Puberdade precoce ou tardia", desc: "Investigação e condução cuidadosa de alterações no desenvolvimento puberal.", color: "bg-rose" },
  { icon: Scale, title: "Obesidade infantil", desc: "Abordagem integral e acolhedora do excesso de peso em crianças e adolescentes.", color: "bg-warm" },
  { icon: Activity, title: "Resistência à insulina", desc: "Diagnóstico precoce e acompanhamento atento de alterações metabólicas.", color: "bg-sage" },
  { icon: Droplets, title: "Diabetes", desc: "Controle e monitoramento de diabetes tipo 1 e tipo 2 na infância.", color: "bg-sky" },
  { icon: Stethoscope, title: "Distúrbios hormonais", desc: "Investigação completa e tratamento de disfunções hormonais pediátricas.", color: "bg-lavender" },
  { icon: BarChart3, title: "Saúde metabólica", desc: "Monitoramento contínuo e preventivo da saúde metabólica infantil.", color: "bg-rose" },
];

const ConditionsSection = () => {
  return (
    <section id="atendimento" className="py-24 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 max-w-xl mx-auto"
        >
          <span className="section-label bg-primary/8 text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Áreas de atuação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground mt-4 mb-5 text-balance">
            Para quem é o <span className="text-gradient italic">atendimento?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Se o seu filho apresenta alguma dessas condições, a Dra. Gabriela pode ajudar com cuidado especializado e humanizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {conditions.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card-premium p-6 sm:p-7 group cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl ${c.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <c.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
