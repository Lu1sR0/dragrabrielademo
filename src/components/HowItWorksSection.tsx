import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, ClipboardList, FileHeart, RefreshCw } from "lucide-react";

const steps = [
  { icon: CalendarCheck, num: "01", title: "Agendamento", desc: "Entre em contato pelo WhatsApp e escolha o melhor horário." },
  { icon: Stethoscope, num: "02", title: "Primeira consulta", desc: "Consulta detalhada com escuta ativa e avaliação completa." },
  { icon: ClipboardList, num: "03", title: "Avaliação e diagnóstico", desc: "Análise criteriosa com exames complementares quando necessário." },
  { icon: FileHeart, num: "04", title: "Plano personalizado", desc: "Plano de cuidado e orientações claras para a família." },
  { icon: RefreshCw, num: "05", title: "Acompanhamento", desc: "Retornos regulares para monitorar evolução e ajustar condutas." },
];


const HowItWorksSection = () => {
  return (
    <section id="passoapasso" className="py-24 sm:py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 max-w-xl mx-auto"
        >
          <span className="section-label bg-lavender text-lavender-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            Passo a passo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground mt-4 mb-5 text-balance">
            Como funciona a <span className="text-gradient italic">consulta</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Linha central da timeline */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/10 z-0" />
          <div className="flex flex-col gap-12 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {i % 2 === 0 ? (
                  <>
                    <div className="w-1/2 flex justify-end">
                      <div className="bg-card border border-primary/10 rounded-xl shadow-md p-6 max-w-xs">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <s.icon size={20} className="text-primary" />
                          </div>
                          <span className="text-xs font-bold text-primary/40">{s.num}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <div className="w-0 flex flex-col items-center">
                      <div className="w-5 h-5 rounded-full bg-primary border-4 border-background z-10 shadow-lg" />
                    </div>
                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2" />
                    <div className="w-0 flex flex-col items-center">
                      <div className="w-5 h-5 rounded-full bg-primary border-4 border-background z-10 shadow-lg" />
                    </div>
                    <div className="w-1/2 flex justify-start">
                      <div className="bg-card border border-primary/10 rounded-xl shadow-md p-6 max-w-xs">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <s.icon size={20} className="text-primary" />
                          </div>
                          <span className="text-xs font-bold text-primary/40">{s.num}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
