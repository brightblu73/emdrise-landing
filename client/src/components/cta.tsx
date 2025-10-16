import { APP_STORE_URL } from "@/config";

export default function CTA() {
  return (
    <section className="py-20 emdr-gradient fade-in-section">
      <div className="max-w-container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Begin Your Healing Journey?</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          Join the growing community of users who have found relief through EMDRise. Start your free trial today and experience the power of professional Self-Directed EMDR.
        </p>
        
        <div className="flex justify-center">
          <a href={APP_STORE_URL} className="hover:opacity-90 transition-opacity" data-testid="link-app-store">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download EMDRise on the App Store" 
              className="h-16"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
