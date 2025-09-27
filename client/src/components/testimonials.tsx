export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Trauma Survivor",
      content: "EMDRise has been life-changing. The guided sessions helped me process trauma I've carried for years. I finally feel like myself again.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80"
    },
    {
      name: "Michael R.",
      role: "Veteran", 
      content: "As a veteran with PTSD, finding effective treatment was crucial. EMDRise made EMDR therapy accessible when I couldn't get to appointments.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80"
    },
    {
      name: "Dr. Jennifer L.",
      role: "Licensed Therapist",
      content: "I recommend EMDRise to clients for between-session support. The app follows proper EMDR protocols and provides valuable continuity of care.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80"
    },
    {
      name: "Alex T.",
      role: "Anxiety Sufferer",
      content: "The convenience of having EMDR therapy on my phone has been incredible. I can work through anxiety triggers as they come up in real life.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 fade-in-section bg-gradient-to-b from-emerald-50 to-blue-50">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">What Our Users Say</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Real stories from people who've transformed their lives with EMDRise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-custom p-8" data-testid={`testimonial-${index + 1}`}>
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}, satisfied user testimonial`} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-muted italic leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              <div style={{color: 'var(--accent)'}}>★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
