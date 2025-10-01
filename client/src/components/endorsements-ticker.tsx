export default function EndorsementsTicker() {
  const endorsements = [
    { name: "World Health Organization", logo: "/assets/endorse/who.png", alt: "World Health Organization logo - endorsing EMDR therapy" },
    { name: "US Department of Veterans Affairs", logo: "/assets/endorse/va.png", alt: "Department of Veterans Affairs logo - supporting EMDR for veterans" },
    { name: "National Institute for Health and Care Excellence", logo: "/assets/endorse/nice.png", alt: "National Institute for Health and Care Excellence logo - EMDR guidelines" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-500 to-emerald-500">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Leading organisations that endorse or recommend EMDR</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {endorsements.map((endorsement, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200" 
              data-testid={`endorsement-${endorsement.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img 
                src={endorsement.logo} 
                alt={endorsement.alt}
                className="w-16 h-16 object-contain mb-4 brightness-0 invert"
              />
              <span className="font-semibold text-white text-center text-sm leading-tight">{endorsement.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
