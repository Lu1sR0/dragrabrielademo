import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Onde a Dra. Gabriela atende?", a: "As consultas presenciais são realizadas em Blumenau/SC, nas clínicas Sowa, InterBlu Centro Clínico, AngioKormann e ICNV. As orientações de acesso são enviadas após o agendamento." },
  { q: "A Dra. Gabriela atende online?", a: "Sim! As consultas online são realizadas por telemedicina e estão disponíveis para pacientes de todo o Brasil, com o mesmo padrão de cuidado e atenção da consulta presencial." },
  { q: "Como funciona o agendamento?", a: "O agendamento pode ser feito diretamente pelo WhatsApp. Basta enviar uma mensagem informando o nome e idade da criança, e a equipe retornará com os horários disponíveis." },
  { q: "Qual o valor da consulta?", a: "Os valores variam de acordo com o tipo de consulta e podem ser consultados diretamente pelo WhatsApp. A Dra. Gabriela trabalha com atendimento particular." },
  { q: "A Dra. Gabriela atende convênios?", a: "Atualmente, o atendimento é exclusivamente particular, garantindo consultas sem pressa e com o tempo necessário para cada família." },
  { q: "Como funciona o acompanhamento?", a: "Após a primeira consulta, a Dra. Gabriela elabora um plano individualizado, com retornos agendados para monitorar a evolução do tratamento e ajustar condutas quando necessário." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 max-w-xl mx-auto"
        >
          <span className="section-label bg-warm text-warm-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            Dúvidas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground mt-4 mb-5 text-balance">
            Perguntas <span className="text-gradient italic">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl bg-card border border-primary/5 px-5 sm:px-6 overflow-hidden shadow-sm hover:shadow-md hover:shadow-primary/5 transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-sans font-semibold text-foreground hover:no-underline py-5 text-sm sm:text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
