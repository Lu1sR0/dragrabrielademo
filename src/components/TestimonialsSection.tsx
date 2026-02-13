import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    child: "Mãe do Pedro, 8 anos",
    text: "A Dra. Gabriela transformou nossa experiência. Meu filho tinha medo de médicos e ela conquistou ele na primeira consulta. Explica tudo com calma e carinho.",
    stars: 5,
  },
  {
    name: "Fernanda M.",
    child: "Mãe da Sofia, 11 anos",
    text: "Depois de passar por vários médicos, finalmente encontramos alguém que nos ouviu de verdade. A Dra. Gabriela investigou tudo com cuidado e encontrou o diagnóstico certo.",
    stars: 5,
  },
  {
    name: "Juliana S.",
    child: "Mãe do Lucas, 6 anos",
    text: "O acompanhamento é incrível. Ela está sempre disponível para tirar dúvidas e nos tranquiliza em cada etapa. Recomendo de olhos fechados!",
    stars: 5,
  },
  {
    name: "Patricia L.",
    child: "Mãe da Beatriz, 13 anos",
    text: "Minha filha estava com puberdade precoce e ficamos muito preocupados. A Dra. Gabriela nos acolheu e conduziu tudo com muita competência e sensibilidade.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose/20 via-background to-background" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 max-w-xl mx-auto"
        >
          <span className="section-label bg-rose text-rose-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground mt-4 mb-5 text-balance">
            O que dizem as <span className="text-gradient italic">famílias</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A confiança dos pais é o maior reconhecimento do nosso trabalho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card-premium p-6 sm:p-7 relative group"
            >
              <Quote
                size={32}
                className="absolute top-5 right-5 text-primary/[0.06] group-hover:text-primary/10 transition-colors duration-500"
              />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 + 0.3, type: "spring", stiffness: 400 }}
                  >
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 relative z-10">
                "{t.text}"
              </p>

              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.child}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
