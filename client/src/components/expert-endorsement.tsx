export default function ExpertEndorsement() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-500 to-emerald-500">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
          What The Experts Say
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-white italic text-lg lg:text-xl leading-relaxed">
            "As a Consultant Psychiatrist in the NHS, I think the EMDRise app is a really helpful tool for people living with trauma. It is slick and easy to use. Also it gives patients something practical they can engage with outside of sessions. For those with complex PTSD and other trauma-related difficulties, having this kind of support at their fingertips can make a real difference and is a much-needed resource."
          </blockquote>
          <p className="text-white font-semibold mt-6 text-right" data-testid="text-expert-name">
            — Mohamed, Consultant Psychiatrist, NHS
          </p>
        </div>
      </div>
    </section>
  );
}
