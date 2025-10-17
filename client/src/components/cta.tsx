export default function CTA() {
  return (
    <section className="py-20 emdr-gradient fade-in-section">
      <div className="max-w-container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Begin Your Healing Journey?</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          EMDRise is launching soon. Join the growing community ready to experience the power of professional Self-Directed EMDR.
        </p>
        
        <div className="flex justify-center">
          <div className="inline-flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl px-8 py-5" data-testid="badge-coming-soon-cta">
            <div className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">
              Coming Soon
            </div>
            <div className="text-2xl font-bold text-white">
              Launching November 2025
            </div>
            <div className="text-sm text-white/80">
              Available on the App Store
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
