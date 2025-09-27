export default function Features() {
  const features = [
    {
      icon: "👥",
      title: "Choice of Therapist Guide",
      description: "Select a male or female virtual therapist to guide you through each stage.",
      gradient: "from-primary-blue to-secondary-blue"
    },
    {
      icon: "🎥", 
      title: "Therapist-Written Video Introductions",
      description: "Each stage begins with a short video written by qualified EMDR therapists, preparing you for the process.",
      gradient: "from-secondary-blue to-primary-green"
    },
    {
      icon: "👁️",
      title: "Flexible Bilateral Stimulation",
      description: "Choose from visual tracking, alternating audio tones, or gentle tapping — whatever suits you best.",
      gradient: "from-primary-green to-warm-accent"
    },
    {
      icon: "⏸️",
      title: "Pause and Resume Anytime",
      description: "If you need a break, pause your session and return later without losing progress.",
      gradient: "from-warm-accent to-primary-blue"
    },
    {
      icon: "🧘",
      title: "Calm Place & After-Care",
      description: "Includes built-in support for safe closure and grounding, so you finish each session feeling settled.",
      gradient: "from-primary-blue to-primary-green"
    },
    {
      icon: "📋",
      title: "Memory Clear Dashboard",
      description: "Track how many memories you've successfully cleared as you progress through your journey.",
      gradient: "from-secondary-blue to-warm-accent"
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description: "Simple tracking tools help you reflect on your journey. SUDS and VOC scores are provided for your own reference, but only you record and monitor them.",
      gradient: "from-primary-green to-secondary-blue"
    },
    {
      icon: "🔒",
      title: "Privacy First", 
      description: "End-to-end encryption ensures your sessions remain completely confidential.",
      gradient: "from-warm-accent to-primary-green"
    }
  ];

  return (
    <section id="features" className="py-20 fade-in-section bg-gradient-to-b from-blue-50 to-emerald-50">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Powerful Features</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Everything you need for effective EMDR therapy, designed with input from licensed professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-custom p-8 hover:shadow-lg transition-shadow" data-testid={`feature-${index + 1}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-custom mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Why EMDRise Banner */}
        <div className="mt-16">
          <div className="card-custom p-10 bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold text-center mb-8">Why EMDRise?</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">Guided by therapist-written content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">Virtual guide takes you step by step through the EMDR journey</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">No waitlists — sign up and start your EMDR journey immediately</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">Designed for flexibility and safety</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">Built around privacy and control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">Accessible anytime, anywhere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
