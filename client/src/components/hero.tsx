import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 fade-in-section bg-gradient-to-br from-blue-500 to-emerald-500">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Professional <span className="text-yellow-200">Self-Directed EMDR</span> In Your Own Space
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Led by a therapist-designed video guide. Walking with you step be step offering structure, support, and connection when you need it most.
          </p>
          
          <div className="flex justify-center mt-8">
            <a href="#" className="hover:opacity-90 transition-opacity" data-testid="link-app-store">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download EMDRise on the App Store" 
                className="h-16"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
