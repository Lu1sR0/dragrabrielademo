import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-primary/5 py-10 sm:py-12 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dra. Gabriela Azevedo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/gabrielaendocrinoped"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-primary" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary/5 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dra. Gabriela Azevedo · Endocrinologista Pediátrica · CRM-SC 27691 · RQE 25198
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
