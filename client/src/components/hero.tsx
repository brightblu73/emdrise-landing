import { Button } from "@/components/ui/button";
import { APP_STORE_URL } from "@/config";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 fade-in-section bg-gradient-to-br from-blue-500 to-emerald-500">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Professional <span className="text-emerald-400">Self-Directed EMDR</span> In Your Own Space
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Created by EMDR therapists, EMDRise guides you step by step with therapist-designed videos that provide structure, reassurance, and support whenever you need it.
          </p>
          
          <div className="flex justify-center mt-8">
            <a href={APP_STORE_URL} className="hover:opacity-90 transition-opacity" data-testid="link-app-store">
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
