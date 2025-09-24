import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 fade-in-section">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Professional <span className="text-gradient">Self-Directed EMDR</span> In Your Own Space
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-8">
            Led by a therapist-designed video guide. Walking with you step be step offering structure, support, and connection when you need it most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-primary font-semibold text-lg" data-testid="button-start-trial">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-2 border-custom text-primary px-8 py-4 rounded-custom font-semibold text-lg hover:bg-surface" data-testid="button-learn-more">
              Learn More
            </Button>
          </div>
          
          {/* App Store Badge Placeholder */}
          {/* TODO: Replace with official App Store badge and real App Store link when available */}
          <div className="flex justify-center">
            <a href="#" className="hover:opacity-90 transition-opacity" data-testid="link-app-store">
              <img 
                src="/assets/app-store-badge.svg" 
                alt="Download EMDRise on the App Store - Placeholder Badge" 
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
