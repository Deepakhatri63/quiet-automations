import { CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Clean scope",
    description: "Every project starts with clear boundaries. No scope creep, no ambiguity.",
  },
  {
    title: "Clear success criteria",
    description: "We define what 'done' looks like before writing a single line of code.",
  },
  {
    title: "Small teams",
    description: "Direct communication, fast decisions. No layers, no bureaucracy.",
  },
  {
    title: "Automation over manual",
    description: "If it can be automated, it should be. Human time is for human problems.",
  },
  {
    title: "Reliability over demos",
    description: "I build systems that work at 3am, not just during the pitch.",
  },
  {
    title: "Documentation-first",
    description: "Every system is documented. You'll understand it long after I'm gone.",
  },
];

export function PhilosophySection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Quote */}
          <div>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
              How I Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              I prefer fewer projects, done properly.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm not trying to be the busiest. I'm trying to be the most reliable. 
              That means saying no to most things so I can say yes properly to a few.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When we work together, you get focus. Not a ticket number in a queue — 
              a partner who cares whether your system actually works.
            </p>
          </div>

          {/* Right column - Principles */}
          <div className="space-y-5">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
