import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import draGabriela from "@/assets/dra-gabriela.png";

const typingWords = ["Ciência", "cuidado", "acolhimento"];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Typing effect
  const [displayText, setDisplayText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const word = typingWords[wordIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
        if (charIdx + 1 === word.length) {
          if (wordIdx === typingWords.length - 1) {
            setDone(true);
            return;
          }
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(word.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setWordIdx(wordIdx + 1);
        }
      }
    }, isDeleting ? 40 : 90);
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx, done]);

  return (
    <section ref={ref} id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background shapes */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, -3, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/3 w-[350px] h-[350px] rounded-full bg-lavender/40 blur-3xl"
        />
      </motion.div>

      <motion.div style={{ y, opacity }} className="container relative mx-auto px-4 sm:px-6 md:px-8 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="section-label bg-primary/8 text-primary mb-8 mx-auto lg:mx-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
              Endocrinologia Pediátrica
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[2.5rem] sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-semibold leading-[1.08] text-foreground mb-6 text-balance"
            >
              <span className="text-gradient italic inline-block min-w-[3ch]">
                {displayText}
                {!done && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[3px] h-[0.85em] bg-primary ml-0.5 align-baseline"
                  />
                )}
              </span>
              {done && ", "}
              {!done && " "}
              <br className="hidden sm:block" />
              no crescimento do seu filho
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Acompanhamento completo da saúde hormonal, crescimento e desenvolvimento de crianças e adolescentes — com atenção individualizada e medicina baseada em evidências.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/553891861703?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Gabriela."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2 text-base py-4 px-8"
              >
                Agendar consulta
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/553891861703?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Dra.%20Gabriela."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline gap-2 text-base py-4 px-8"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground justify-center lg:justify-start"
            >
              {["CRM-SC 27691", "RQE 25198", "Presencial & Online"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo — larger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/10 to-lavender/20 blur-2xl animate-pulse-soft" />

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: [3, 5, 3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 rounded-[2.5rem] border-2 border-dashed border-primary/10"
              />

              <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] md:w-[22rem] md:h-[26rem] lg:w-[26rem] lg:h-[30rem] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-primary/15">
                <img
                  src={draGabriela}
                  alt="Dra. Gabriela Azevedo - Endocrinologista Pediátrica"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-8 bg-card rounded-2xl p-3 sm:p-4 shadow-xl shadow-primary/8 border border-primary/10"
              >
                <p className="text-xs sm:text-sm font-semibold text-foreground">Dra. Gabriela Azevedo</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Endocrinologista Pediátrica</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
