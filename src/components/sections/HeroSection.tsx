import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  "AI Voice Agents",
  "VAPI / Twilio / SIP",
  "Shopify Integrations",
  "Make / n8n / Zapier",
  "CRM Automation",
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
            I build production-ready{" "}
            <span className="text-gradient">AI voice agents</span>{" "}
            and automations that actually ship.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delayed">
            Outbound & inbound AI calling systems, workflow automations, and 
            integrations for Shopify and B2B teams.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-delayed">
            <Button
              size="lg"
              onClick={() => scrollToSection("#work")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12"
            >
              View my work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-border hover:bg-secondary px-8 h-12"
            >
              Get in touch
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-delayed">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 text-sm text-muted-foreground bg-secondary/50 rounded-full border border-border/50"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#expertise")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to expertise section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
