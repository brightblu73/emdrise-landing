import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-blue via-secondary-blue to-primary-green fade-in-section">
      <div className="max-w-container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Begin Your Healing Journey?</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          Join thousands of users who have found relief through EMDRise. Start your free trial today and experience the power of professional EMDR therapy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-white text-primary px-8 py-4 rounded-custom font-semibold text-lg hover:bg-gray-50 transition-colors focus-visible"
            data-testid="button-download-ios"
          >
            Download for iOS
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-custom font-semibold text-lg hover:bg-white/10 transition-colors focus-visible bg-transparent"
            data-testid="button-watch-demo"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
