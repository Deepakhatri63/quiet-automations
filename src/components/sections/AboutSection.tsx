export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-16 items-start">
            {/* Left - Photo placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden">
                {/* Abstract representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 animate-pulse-subtle" />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Builder at heart. Systems thinker by nature.
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I've always been fascinated by how things connect. Before AI voice agents, 
                  I was building complex automations that saved teams hundreds of hours. 
                  The technology changed, but the goal didn't: make systems that work 
                  reliably, at scale, without constant hand-holding.
                </p>
                <p>
                  What draws me to AI voice specifically is the human element. There's 
                  something remarkable about building a system that can have a genuine 
                  conversation, understand context, and actually help someone. That's not 
                  about hype — it's about utility.
                </p>
                <p>
                  I work with a small number of clients at a time because I believe in 
                  depth over breadth. Each project gets my full attention. No account 
                  managers, no handoffs — just direct collaboration with someone who 
                  genuinely cares whether your system works.
                </p>
                <p className="text-foreground font-medium">
                  If you're building something serious and need reliable AI voice or 
                  automation infrastructure, I'd be happy to talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
