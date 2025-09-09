export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Assessment",
      description: "Complete a comprehensive intake assessment to personalize your therapy experience and identify target memories.",
      gradient: "from-primary-blue to-secondary-blue"
    },
    {
      number: "2", 
      title: "Guided Sessions",
      description: "Follow structured EMDR protocols with bilateral stimulation, guided imagery, and therapeutic techniques.",
      gradient: "from-secondary-blue to-primary-green"
    },
    {
      number: "3",
      title: "Progress Tracking", 
      description: "Monitor your healing journey with detailed progress reports and adaptive treatment recommendations.",
      gradient: "from-primary-green to-accent-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 fade-in-section">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-6">How EMDRise Works</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Our evidence-based approach guides you through structured EMDR therapy sessions designed by licensed professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`step-${step.number}`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-custom mx-auto mb-6 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-4">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
