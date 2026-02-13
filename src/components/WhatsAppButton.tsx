import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5547992199595?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Gabriela."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-shadow"
      style={{
        background: "hsl(142, 70%, 45%)",
        boxShadow: "0 4px 20px -2px hsl(142 70% 45% / 0.4)",
      }}
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} className="text-primary-foreground" />
    </motion.a>
  );
};

export default WhatsAppButton;
