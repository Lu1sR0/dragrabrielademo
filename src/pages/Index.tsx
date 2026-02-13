import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConditionsSection from "@/components/ConditionsSection";
import MethodologySection from "@/components/MethodologySection";
import DifferentialsSection from "@/components/DifferentialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AttendanceSection from "@/components/AttendanceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ConditionsSection />
        <MethodologySection />
        <DifferentialsSection />
        <HowItWorksSection />
        <AttendanceSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
