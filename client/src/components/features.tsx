import { APP_STORE_URL } from "@/config";

export default function Features() {
  const reasons = [
    "Therapist-written content guides you with clear video introductions before each stage.",
    "Virtual EMDR guide supports you step by step through the process.",
    "Choice of therapist guide – select a male or female voice to match your preference.",
    "Flexible bilateral stimulation – visual tracking, alternating audio tones, or gentle tapping.",
    "Pause and resume anytime – take breaks without losing your place.",
    "Calm place and after-care built in for safe closure at the end of each session.",
    "Memory clear dashboard to track how many memories you've worked through.",
    "Simple progress reflection with SUDS and VOC scores recorded by you, for your own insight.",
    "No waiting lists – sign up and begin your EMDR journey immediately.",
    "Privacy-first design – your sessions remain fully confidential."
  ];

  return (
    <section id="features" className="py-20 fade-in-section bg-gradient-to-b from-blue-50 to-emerald-50">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Why EMDRise?</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* First column - first 5 reasons */}
            <div className="space-y-6">
              {reasons.slice(0, 5).map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 card-custom hover:shadow-lg transition-all duration-200 h-32" data-testid={`reason-${index + 1}`}>
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-muted leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
            
            {/* Second column - last 5 reasons */}
            <div className="space-y-6">
              {reasons.slice(5, 10).map((reason, index) => (
                <div key={index + 5} className="flex items-start space-x-4 p-6 card-custom hover:shadow-lg transition-all duration-200 h-32" data-testid={`reason-${index + 6}`}>
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-muted leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <a href={APP_STORE_URL} className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform inline-block" data-testid="button-get-started">
              Get Started with EMDRise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
