import { motion } from "framer-motion";
import { Ear, ClipboardCheck, Search, FileText, HeartHandshake, RefreshCw } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: Ear, title: "Escuta ativa", desc: "Cada família é ouvida com atenção e respeito, sem pressa.", color: "bg-rose" },
  { icon: ClipboardCheck, title: "Consulta detalhada", desc: "Anamnese completa para entender toda a história clínica.", color: "bg-lavender" },
  { icon: Search, title: "Avaliação clínica completa", desc: "Exame físico e análise laboratorial criteriosa.", color: "bg-sage" },
  { icon: FileText, title: "Diagnóstico individualizado", desc: "Cada criança é única e recebe um diagnóstico personalizado.", color: "bg-sky" },
  { icon: HeartHandshake, title: "Plano de cuidado", desc: "Tratamento baseado em evidências, adaptado à família.", color: "bg-warm" },
  { icon: RefreshCw, title: "Acompanhamento contínuo", desc: "Retornos regulares para garantir o melhor resultado.", color: "bg-lavender" },
];




const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-24 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-lavender/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 max-w-xl mx-auto"
        >
          <span className="section-label bg-lavender text-lavender-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            Metodologia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground mt-4 mb-5 text-balance">
            Como cuido do{" "}
            <span className="text-gradient italic">seu filho</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Um atendimento que combina rigor científico com empatia genuína — do primeiro encontro ao acompanhamento de longo prazo.
          </p>
        </motion.div>

        {/* Cards empilhados com animação tradicional */}
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white dark:bg-background rounded-2xl border border-primary/10 shadow-md p-6 sm:p-7 flex items-start gap-4"
              >
                <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${step.color} flex items-center justify-center shadow-sm`}>
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[10px] font-bold text-primary/25 uppercase tracking-widest">
                      0{i + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
