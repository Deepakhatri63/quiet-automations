import { Users, Target, CheckSquare, Wifi } from "lucide-react";

const idealClients = [
  {
    icon: Users,
    title: "Founders & agencies scaling AI workflows",
    description:
      "You're building products or services that need reliable AI voice and automation infrastructure.",
  },
  {
    icon: Target,
    title: "Teams who value clarity and structure",
    description:
      "You appreciate well-defined scopes, documented systems, and clear communication.",
  },
  {
    icon: CheckSquare,
    title: "Projects with defined outcomes",
    description:
      "You know what success looks like. We'll agree on it upfront and build toward it.",
  },
  {
    icon: Wifi,
    title: "People comfortable working async",
    description:
      "You trust the process. Updates are clear, progress is visible, meetings are minimal.",
  },
];

export function ClientsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
              Who I Work With
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              A good fit looks like this
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work best with a specific type of client. If this sounds like you, 
              we'll probably get along.
            </p>
          </div>

          {/* Client types */}
          <div className="grid sm:grid-cols-2 gap-6">
            {idealClients.map((client) => (
              <div
                key={client.title}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <client.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{client.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {client.description}
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
