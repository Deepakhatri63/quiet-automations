import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { WorkSection } from "@/components/sections/WorkSection";
import { StackSection } from "@/components/sections/StackSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { VoiceAgentWidget } from "@/components/VoiceAgentWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <PhilosophySection />
        <WorkSection />
        <StackSection />
        <ClientsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <VoiceAgentWidget />
    </div>
  );
};

export default Index;
