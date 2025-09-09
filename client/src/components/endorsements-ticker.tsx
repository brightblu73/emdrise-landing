export default function EndorsementsTicker() {
  const endorsements = [
    { name: "World Health Organization", logo: "WHO", bgColor: "bg-blue-600" },
    { name: "American Psychological Association", logo: "APA", bgColor: "bg-red-600" },
    { name: "Department of Veterans Affairs", logo: "VA", bgColor: "bg-green-600" },
    { name: "National Institute for Health", logo: "NICE", bgColor: "bg-purple-600" },
    { name: "EMDR International Association", logo: "EMDR", bgColor: "bg-orange-600" },
  ];

  return (
    <section className="py-12 border-y border-custom">
      <div className="ticker-container">
        <div className="ticker-track">
          {/* First set of endorsements */}
          <div className="flex items-center space-x-16 px-8">
            {endorsements.map((endorsement, index) => (
              <div key={`first-${index}`} className="flex items-center space-x-3" data-testid={`endorsement-${endorsement.logo.toLowerCase()}-1`}>
                <div className={`w-12 h-12 ${endorsement.bgColor} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-xs">{endorsement.logo}</span>
                </div>
                <span className="font-semibold text-muted whitespace-nowrap">{endorsement.name}</span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 px-8">
            {endorsements.map((endorsement, index) => (
              <div key={`second-${index}`} className="flex items-center space-x-3" data-testid={`endorsement-${endorsement.logo.toLowerCase()}-2`}>
                <div className={`w-12 h-12 ${endorsement.bgColor} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-xs">{endorsement.logo}</span>
                </div>
                <span className="font-semibold text-muted whitespace-nowrap">{endorsement.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
