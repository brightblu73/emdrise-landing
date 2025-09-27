import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 fade-in-section">
      <div className="max-w-container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Begin Your Healing Journey?</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          Join the growing community of users who have found relief through EMDRise. Start your free trial today and experience the power of professional Self-Directed EMDR.
        </p>
        
        <div className="flex justify-center">
          <Button 
            className="bg-white text-primary px-8 py-4 rounded-custom font-semibold text-lg hover:bg-gray-50 transition-colors focus-visible"
            data-testid="button-download-app-store"
          >
            Download on App Store
          </Button>
        </div>
      </div>
    </section>
  );
}
