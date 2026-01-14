const stackCategories = [
  {
    category: "Voice & Telephony",
    tools: [
      { name: "VAPI", description: "Voice AI infrastructure" },
      { name: "Twilio", description: "Telephony & messaging" },
      { name: "SIP", description: "Enterprise voice systems" },
      { name: "ElevenLabs", description: "Voice synthesis" },
      { name: "Deepgram", description: "Speech recognition" },
    ],
  },
  {
    category: "AI & LLMs",
    tools: [
      { name: "OpenAI", description: "GPT models & embeddings" },
      { name: "Anthropic", description: "Claude models" },
      { name: "LangChain", description: "LLM orchestration" },
      { name: "Pinecone", description: "Vector databases" },
    ],
  },
  {
    category: "Automation",
    tools: [
      { name: "Make", description: "Complex workflows" },
      { name: "n8n", description: "Self-hosted automation" },
      { name: "Zapier", description: "Quick integrations" },
      { name: "Pipedream", description: "Code-first workflows" },
    ],
  },
  {
    category: "E-commerce",
    tools: [
      { name: "Shopify", description: "Store & APIs" },
      { name: "Gorgias", description: "Support platform" },
      { name: "Klaviyo", description: "Email automation" },
      { name: "Stripe", description: "Payments" },
    ],
  },
  {
    category: "CRM & Scheduling",
    tools: [
      { name: "HubSpot", description: "Sales CRM" },
      { name: "Salesforce", description: "Enterprise CRM" },
      { name: "Cal.com", description: "Scheduling" },
      { name: "Calendly", description: "Appointment booking" },
    ],
  },
  {
    category: "Communication",
    tools: [
      { name: "Slack", description: "Team notifications" },
      { name: "Email APIs", description: "Transactional email" },
      { name: "WhatsApp", description: "Business messaging" },
      { name: "SMS", description: "Text notifications" },
    ],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Tools & Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            I can plug into your existing system
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep experience with the tools that power modern AI voice and automation. 
            Whether you're on Shopify or Salesforce, I speak your stack.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stackCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold mb-5">{category.category}</h3>
              <div className="space-y-3">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between">
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {tool.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
