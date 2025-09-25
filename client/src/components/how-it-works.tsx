import { 
  Sunrise, 
  Home, 
  Target, 
  Waves, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Flower2, 
  Lightbulb 
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Sunrise,
      title: "Welcome & Introduction",
      description: "Meet your guide and learn how EMDR helps the brain process stuck memories."
    },
    {
      icon: Home,
      title: "Calm Place",
      description: "Create a personal safe space you can return to at any time during your journey."
    },
    {
      icon: Target,
      title: "Target Memory Setup",
      description: "Select a memory, identify negative and positive beliefs, and rate your feelings (SUDS & VOC)."
    },
    {
      icon: Waves,
      title: "Desensitisation",
      description: "Follow bilateral stimulation while noticing what comes up, reducing distress over time."
    },
    {
      icon: RotateCcw,
      title: "Reprocessing Continued",
      description: "Continue processing with guidance until the memory feels less disturbing."
    },
    {
      icon: Sparkles,
      title: "Installation of Positive Belief",
      description: "Strengthen the positive belief you want to hold about yourself."
    },
    {
      icon: ShieldCheck,
      title: "Installation Continued",
      description: "Reinforce the belief with further bilateral stimulation until it feels fully true."
    },
    {
      icon: Activity,
      title: "Body Scan",
      description: "Check your body for any tension or disturbance; process anything remaining."
    },
    {
      icon: Flower2,
      title: "Calm Place",
      description: "Return to your safe space to ground and close the session."
    },
    {
      icon: Lightbulb,
      title: "Aftercare",
      description: "Learn how to look after yourself and integrate the work between sessions."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 fade-in-section">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">How EMDRise Works</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Built on the evidence-based eight-phase EMDR model, EMDRise provides step-by-step guidance for self-directed sessions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* First block of 5 cards */}
          <div className="space-y-6">
            {steps.slice(0, 5).map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white dark:bg-surface p-6 rounded-custom shadow-card border border-custom text-center" data-testid={`step-${index + 1}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-green rounded-custom mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Second block of 5 cards */}
          <div className="space-y-6">
            {steps.slice(5, 10).map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index + 5} className="bg-white dark:bg-surface p-6 rounded-custom shadow-card border border-custom text-center" data-testid={`step-${index + 6}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-green rounded-custom mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
