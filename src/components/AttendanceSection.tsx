import { motion } from "framer-motion";
import { MapPin, Monitor, ArrowRight } from "lucide-react";

const AttendanceSection = () => {
  return (
    <section className="py-24 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky/20 to-background" />

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
            Modalidades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground mt-4 mb-5 text-balance">
            Atendimento presencial e <span className="text-gradient italic">online</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            O mesmo padrão de cuidado e dedicação — independentemente do formato.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="card-premium p-6 sm:p-8 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-lavender flex items-center justify-center mx-auto mb-6">
              <MapPin size={24} className="text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Presencial</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Ambiente acolhedor para receber crianças e famílias com conforto e privacidade.
            </p>
            <div className="text-xs text-muted-foreground/70 space-y-1">
              <p>Clínica Sowa · InterBlu Centro Clínico</p>
              <p>AngioKormann · ICNV — Blumenau/SC</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card-premium p-6 sm:p-8 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-sage flex items-center justify-center mx-auto mb-6">
              <Monitor size={24} className="text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Online</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Telemedicina para todo o Brasil com o mesmo nível de atenção e detalhamento.
            </p>
            <a
              href="https://wa.me/553891861703?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20online%20com%20a%20Dra.%20Gabriela."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
            >
              Agendar online <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceSection;
