export default function Hero() {
  return (
    <section className="py-20 lg:py-32 fade-in-section emdr-gradient">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Professional <span className="text-emerald-400">Self-Directed EMDR</span> In Your Own Space
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Created by EMDR therapists, EMDRise guides you step by step with therapist-designed videos that provide structure, reassurance, and support whenever you need it.
          </p>
          
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="inline-flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl px-8 py-5" data-testid="badge-coming-soon">
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
      </div>
    </section>
  );
}
