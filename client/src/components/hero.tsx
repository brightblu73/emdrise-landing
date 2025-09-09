import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 fade-in-section">
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Professional <span className="text-gradient">EMDR Therapy</span> at Your Fingertips
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
              Evidence-based trauma treatment through guided EMDR sessions. Trusted by thousands of users and endorsed by leading mental health organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="btn-primary font-semibold text-lg" data-testid="button-start-trial">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-2 border-custom text-primary px-8 py-4 rounded-custom font-semibold text-lg hover:bg-surface" data-testid="button-learn-more">
                Learn More
              </Button>
            </div>
            
            {/* App Store Badge Placeholder */}
            {/* TODO: Replace with official App Store badge and real App Store link when available */}
            <div className="flex justify-center lg:justify-start">
              <a href="#" className="hover:opacity-90 transition-opacity" data-testid="link-app-store">
                <img 
                  src="/assets/app-store-badge.svg" 
                  alt="Download EMDRise on the App Store - Placeholder Badge" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="phone-mockup">
              <img 
                src="/assets/iphone-frame.png" 
                alt="iPhone device frame for EMDRise app demonstration" 
                className="phone-frame" 
              />
              <video 
                className="phone-video" 
                poster="/assets/promo-poster.jpg" 
                muted 
                loop 
                autoPlay
                data-testid="video-promo"
              >
                <source src="/assets/emdrise-promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
