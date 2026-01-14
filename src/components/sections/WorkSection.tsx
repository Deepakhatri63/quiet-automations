import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Outbound Lead Qualification",
    problem: "Sales team spending 60% of time on unqualified leads",
    solution: "AI voice agent that qualifies leads and books meetings directly into Cal.com",
    tools: ["VAPI", "OpenAI", "Cal.com", "HubSpot", "Slack"],
    outcome: "3x more qualified meetings booked, zero manual qualification",
  },
  {
    title: "E-commerce Support Automation",
    problem: "Support tickets overwhelming small team during peak seasons",
    solution: "Inbound voice agent handling order status, returns, and FAQs with Shopify integration",
    tools: ["Twilio", "Shopify API", "Gorgias", "Make"],
    outcome: "70% of inquiries resolved without human intervention",
  },
  {
    title: "Multi-language Appointment Scheduling",
    problem: "French and Arabic-speaking customers underserved by English-only system",
    solution: "Trilingual voice agent for appointment booking with real-time calendar sync",
    tools: ["ElevenLabs", "VAPI", "Google Calendar", "n8n"],
    outcome: "40% increase in bookings from non-English markets",
  },
  {
    title: "B2B Lead-to-Close Pipeline",
    problem: "Manual data entry causing delays and errors across sales pipeline",
    solution: "End-to-end automation from lead capture to contract sent",
    tools: ["Zapier", "Salesforce", "DocuSign", "Stripe", "Slack"],
    outcome: "Sales cycle reduced from 14 days to 5 days average",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Systems that run in production
          </h2>
          <p className="text-lg text-muted-foreground">
            Not case studies full of fluff — real system snapshots. 
            Each project shows the problem, what I built, and the outcome.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-semibold pr-4">{project.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>

              {/* Problem */}
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Problem
                </p>
                <p className="text-foreground">{project.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Solution
                </p>
                <p className="text-foreground">{project.solution}</p>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Outcome
                </p>
                <p className="text-primary font-medium">{project.outcome}</p>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs text-muted-foreground bg-secondary rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
