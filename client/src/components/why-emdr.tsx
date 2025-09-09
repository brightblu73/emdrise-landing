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
            <img 
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Professional therapy setting with comfortable seating" 
              className="rounded-custom shadow-lg w-full"
              data-testid="img-therapy-setting"
            />
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
