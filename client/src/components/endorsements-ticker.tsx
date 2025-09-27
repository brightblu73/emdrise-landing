export default function EndorsementsTicker() {
  const endorsements = [
    { name: "World Health Organization", logo: "/assets/endorse/who.png", alt: "World Health Organization logo - endorsing EMDR therapy" },
    { name: "American Psychological Association", logo: "/assets/endorse/apa.png", alt: "American Psychological Association logo - EMDR therapy endorsement" },
    { name: "Department of Veterans Affairs", logo: "/assets/endorse/va.png", alt: "Department of Veterans Affairs logo - supporting EMDR for veterans" },
    { name: "National Institute for Health", logo: "/assets/endorse/nice.png", alt: "National Institute for Health and Care Excellence logo - EMDR guidelines" },
    { name: "EMDR International Association", logo: "/assets/endorse/emdria.png", alt: "EMDR International Association logo - professional standards" },
  ];

  return (
    <section className="py-12 border-y border-custom">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold text-primary">Leading organisations that endorse or recommend EMDR</h2>
      </div>
      <div className="ticker-container">
        <div className="ticker-track">
          {/* First set of endorsements */}
          <div className="flex items-center space-x-16 px-8">
            {endorsements.map((endorsement, index) => (
              <div key={`first-${index}`} className="flex items-center space-x-3" data-testid={`endorsement-${endorsement.name.toLowerCase().replace(/\s+/g, '-')}-1`}>
                <img 
                  src={endorsement.logo} 
                  alt={endorsement.alt}
                  className="w-12 h-12 object-contain"
                />
                <span className="font-semibold text-muted whitespace-nowrap">{endorsement.name}</span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 px-8">
            {endorsements.map((endorsement, index) => (
              <div key={`second-${index}`} className="flex items-center space-x-3" data-testid={`endorsement-${endorsement.name.toLowerCase().replace(/\s+/g, '-')}-2`}>
                <img 
                  src={endorsement.logo} 
                  alt={endorsement.alt}
                  className="w-12 h-12 object-contain"
                />
                <span className="font-semibold text-muted whitespace-nowrap">{endorsement.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
