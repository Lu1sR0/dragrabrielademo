import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#atendimento" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Passo a passo", href: "#passoapasso" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Track active section
      const sections = links.map(l => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-nav-scrolled" : "glass-nav"
      }`}
    >
      <motion.div
        style={{ height: navHeight }}
        className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8"
      >
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <motion.img
            style={{ scale: logoScale }}
            src={logo}
            alt="Dra. Gabriela Azevedo"
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://www.instagram.com/gabrielaendocrinoped"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-colors"
          >
            <Instagram size={16} className="text-primary" />
          </a>
          <a
            href="https://wa.me/5547992199595?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Gabriela."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-6"
          >
            Agendar consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center active:scale-95 transition-transform"
          aria-label="Menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={18} className="text-foreground" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={18} className="text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-card/98 backdrop-blur-2xl border-b border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-1 py-6 px-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full text-center py-3 text-sm font-medium rounded-xl transition-colors ${
                    activeSection === l.href.replace("#", "")
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex gap-3 mt-4 w-full"
              >
                <a
                  href="https://www.instagram.com/gabrielaendocrinoped"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center"
                >
                  <Instagram size={18} className="text-primary" />
                </a>
                <a
                  href="https://wa.me/5547992199595?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Gabriela."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  Agendar consulta
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
