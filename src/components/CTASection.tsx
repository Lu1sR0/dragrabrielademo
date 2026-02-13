import { motion } from "framer-motion";
import { Heart, ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-lavender/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
            className="w-16 h-16 rounded-2xl bg-rose flex items-center justify-center mx-auto mb-8"
          >
            <Heart size={28} className="text-primary" />
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-5 text-balance leading-tight">
            Cuidar da saúde do seu filho é um{" "}
            <span className="text-gradient italic">ato de amor</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-12 leading-relaxed max-w-md mx-auto">
            Dê o primeiro passo para um acompanhamento seguro, acolhedor e baseado em evidências científicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/5547992199595?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Gabriela."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2 text-base py-4 px-8"
            >
              Agendar consulta
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/5547992199595?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Dra.%20Gabriela."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline gap-2 text-base py-4 px-8"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
