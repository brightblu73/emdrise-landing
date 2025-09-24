import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function WhyEMDR() {
  const benefits = [
    {
      title: "Evidence-Based Treatment",
      description: "Recognized by WHO and APA as an effective treatment for trauma and PTSD."
    },
    {
      title: "Faster Results", 
      description: "Studies show EMDR can be more effective than traditional talk therapy alone."
    },
    {
      title: "Accessible Care",
      description: "Get professional-grade therapy from the comfort and privacy of your home."
    }
  ];

  return (
    <section className="py-20 bg-surface fade-in-section">
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-surface rounded-custom shadow-lg w-full aspect-video flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Therapist Video</h3>
                <p className="text-sm text-muted">What is EMDR? - Professional explanation</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">Why EMDR Therapy?</h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`benefit-${index + 1}`}>
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center mt-1">
                    <Check className="text-white text-sm" size={16} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">{benefit.title}</h4>
                    <p className="text-muted">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary font-semibold text-lg mt-8" data-testid="button-learn-emdr">
              Learn About EMDR
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
