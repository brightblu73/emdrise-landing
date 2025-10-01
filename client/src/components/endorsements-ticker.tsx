export default function EndorsementsTicker() {
  const organizations = [
    "NICE",
    "World Health Organization",
    "American Psychological Association",
    "U.S. Department of Veterans Affairs",
    "EMDR International Association (EMDRIA)",
    "SAMHSA"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-500 to-emerald-500">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-8">
            EMDR therapy is recognised or recommended by
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {organizations.map((org, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center"
                data-testid={`recognition-${org.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
              >
                <span className="text-white font-bold uppercase tracking-wide text-center text-sm lg:text-base">
                  {org}
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-white/80 text-sm max-w-4xl mx-auto leading-relaxed">
            These organisations recognise EMDR therapy in clinical guidelines. Inclusion here reflects support for EMDR as a method, not this specific app.
          </p>
        </div>
      </div>
    </section>
  );
}
