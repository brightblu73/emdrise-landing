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
    <section 
      className="py-8 lg:py-12 emdr-gradient"
      aria-labelledby="recog-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <h2 
          id="recog-heading" 
          className="text-white text-center font-extrabold tracking-tight text-xs lg:text-sm mb-4 max-w-4xl mx-auto"
        >
          EMDR THERAPY IS RECOGNISED OR RECOMMENDED BY
        </h2>
        
        <ul 
          className="flex flex-wrap items-center justify-center gap-1 lg:gap-0 bg-white/10 backdrop-blur-sm rounded-xl p-2 lg:p-3 mx-auto max-w-5xl"
          role="list" 
          aria-label="Recognising organisations"
        >
          {organizations.map((org, index) => (
            <li 
              key={index}
              className="text-white font-extrabold uppercase tracking-tight whitespace-nowrap px-2 lg:px-4 py-1 text-center text-[10px] lg:text-xs relative"
              data-testid={`org-${index + 1}`}
            >
              {index > 0 && (
                <span 
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-4 bg-white/40"
                  aria-hidden="true"
                />
              )}
              {org}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
