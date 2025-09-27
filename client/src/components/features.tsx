export default function Features() {
  const features = [
    {
      icon: "👁️",
      title: "Bilateral Stimulation",
      description: "Visual, auditory, and tactile bilateral stimulation options for optimal processing.",
      gradient: "from-primary-blue to-secondary-blue"
    },
    {
      icon: "📊", 
      title: "Progress Analytics",
      description: "Detailed insights into your therapeutic progress with mood tracking and session analysis.",
      gradient: "from-secondary-blue to-primary-green"
    },
    {
      icon: "🔒",
      title: "Privacy First", 
      description: "End-to-end encryption ensures your therapy sessions remain completely confidential.",
      gradient: "from-primary-green to-warm-accent"
    },
    {
      icon: "🎯",
      title: "Personalized Plans",
      description: "AI-driven treatment recommendations based on your unique needs and progress.",
      gradient: "from-warm-accent to-primary-blue"
    },
    {
      icon: "🧘",
      title: "Guided Meditation",
      description: "Complementary mindfulness exercises to enhance your therapeutic experience.",
      gradient: "from-primary-blue to-primary-green"
    },
    {
      icon: "📱",
      title: "Offline Access",
      description: "Download sessions for offline use, ensuring therapy is available whenever you need it.",
      gradient: "from-secondary-blue to-warm-accent"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
