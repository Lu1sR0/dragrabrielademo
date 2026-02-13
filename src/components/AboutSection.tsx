import { motion } from "framer-motion";
import draGabriela from "@/assets/dra-gabriela.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 sm:py-28 md:py-36">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/8 via-accent/8 to-lavender/15 blur-2xl animate-pulse-soft" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] md:w-[22rem] md:h-[26rem] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={draGabriela}
                  alt="Dra. Gabriela Azevedo"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <span className="section-label bg-lavender text-lavender-foreground mb-6 mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              Sobre
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground mt-4 mb-6 text-balance">
              Dra. Gabriela <span className="text-gradient italic">Azevedo</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Médica endocrinologista pediátrica com formação sólida e dedicação integral à saúde de crianças e adolescentes. Graduada em Medicina com residência em Pediatria e especialização em Endocrinologia Pediátrica.
              </p>
              <p>
                Acredita que cada criança merece um olhar atento, um diagnóstico cuidadoso e um plano de tratamento pensado especialmente para ela. Sua prática é guiada pela ciência, pela empatia e pelo respeito às famílias.
              </p>
              <p>
                Sua missão é oferecer um atendimento que vai além dos exames — é sobre construir confiança, esclarecer dúvidas e caminhar junto com os pais no cuidado com a saúde dos seus filhos.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              {["CRM-SC 27691", "RQE 25198", "Endocrinologia Pediátrica", "Telemedicina"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
