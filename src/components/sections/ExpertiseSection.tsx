import { Phone, Calendar, ShoppingBag, Globe, Zap, Database } from "lucide-react";

const capabilities = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    subtitle: "Outbound & Inbound",
    description:
      "Production-ready voice agents that handle real conversations. Lead qualification, customer support, appointment scheduling — all running 24/7.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    subtitle: "Calendar + CRM Sync",
    description:
      "Agents that book meetings directly into your calendar, update your CRM, and send confirmations. No human in the loop required.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Workflows",
    subtitle: "E-commerce Automation",
    description:
      "Order status, returns, support queries — automated. Deep integrations with Shopify's ecosystem for D2C brands at scale.",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    subtitle: "French, Arabic & More",
    description:
      "Voice agents that speak your customers' language. Native-quality multilingual support without managing separate systems.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    subtitle: "Make / n8n / Zapier",
    description:
      "Complex multi-step automations that connect your entire stack. From lead capture to closed deal, fully automated.",
  },
  {
    icon: Database,
    title: "API Integrations",
    subtitle: "Systems That Talk",
    description:
      "Custom integrations that make your tools work together. CRMs, payment processors, scheduling tools — connected seamlessly.",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            What I Build
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Production-level AI systems, not experiments
          </h2>
          <p className="text-lg text-muted-foreground">
            Every capability is battle-tested in real business environments. 
            These aren't demos — they're systems that run in production.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <capability.icon className="h-6 w-6" />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-semibold mb-1">{capability.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">
                {capability.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
