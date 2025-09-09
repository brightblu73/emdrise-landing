import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 fade-in-section">
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
              Professional <span className="text-gradient">EMDR Therapy</span> at Your Fingertips
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-8">
              Evidence-based trauma treatment through guided EMDR sessions. Trusted by thousands of users and endorsed by leading mental health organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="btn-primary px-8 py-4 rounded-custom font-semibold text-lg" data-testid="button-start-trial">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-2 border-border-light text-text-dark px-8 py-4 rounded-custom font-semibold text-lg hover:bg-surface-white" data-testid="button-learn-more">
                Learn More
              </Button>
            </div>
            
            {/* App Store Badge Placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-text-dark rounded-lg px-6 py-3 flex items-center space-x-3 cursor-pointer hover:bg-opacity-90 transition-opacity" data-testid="link-app-store">
                <div className="w-8 h-8 bg-white rounded-md"></div>
                <div>
                  <div className="text-xs text-white/70">Download on the</div>
                  <div className="text-lg font-semibold text-white">App Store</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="phone-mockup">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=280&h=560" 
                alt="iPhone frame mockup" 
                className="phone-frame" 
              />
              <video 
                className="phone-video" 
                poster="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600" 
                muted 
                loop 
                autoPlay
                data-testid="video-promo"
              >
                <source src="/assets/emdrise-promo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
