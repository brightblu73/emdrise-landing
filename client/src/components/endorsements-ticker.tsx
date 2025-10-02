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
      className="py-12 lg:py-20 bg-gradient-to-br from-blue-500 via-blue-400 to-emerald-500"
      aria-labelledby="recog-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <h2 
          id="recog-heading" 
          className="text-white text-center font-extrabold tracking-wide text-xl lg:text-2xl mb-6"
        >
          EMDR THERAPY IS RECOGNISED OR RECOMMENDED BY
        </h2>
        
        <ul 
          className="flex flex-wrap items-center justify-center gap-2 lg:gap-0 bg-white/10 backdrop-blur-sm rounded-2xl p-3 lg:p-4 mx-auto max-w-6xl"
          role="list" 
          aria-label="Recognising organisations"
        >
          {organizations.map((org, index) => (
            <li 
              key={index}
              className="text-white font-extrabold uppercase tracking-widest whitespace-nowrap px-4 lg:px-6 py-2 text-center text-xs lg:text-base relative"
              data-testid={`org-${index + 1}`}
            >
              {index > 0 && (
                <span 
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-5 bg-white/40"
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
