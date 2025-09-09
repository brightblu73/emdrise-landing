import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is EMDRise a replacement for professional therapy?",
      answer: "No, EMDRise is designed to supplement professional therapy, not replace it. We recommend using our app under the guidance of a licensed mental health professional or as a continuation of professional EMDR therapy."
    },
    {
      question: "How does the bilateral stimulation work?",
      answer: "EMDRise offers multiple forms of bilateral stimulation including visual (moving objects), auditory (alternating sounds), and tactile (vibration patterns). You can choose the method that works best for you during each session."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, we use end-to-end encryption for all user data and sessions. Your personal information and therapy content are never shared with third parties and remain completely confidential. We comply with HIPAA privacy standards."
    },
    {
      question: "Can I use EMDRise for any type of trauma?",
      answer: "EMDRise can be helpful for various types of trauma, including single-incident trauma, complex trauma, and PTSD. However, we recommend consultation with a mental health professional to determine if EMDR is appropriate for your specific situation."
    },
    {
      question: "How much does EMDRise cost?",
      answer: "EMDRise offers a free trial with basic features. Our premium subscription provides access to all guided sessions, progress tracking, and personalized treatment plans. Visit our pricing page for detailed information."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 fade-in-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted leading-relaxed">
            Get answers to common questions about EMDRise and EMDR therapy.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card-custom" data-testid={`faq-item-${index + 1}`}>
              <button 
                className="w-full p-6 text-left flex items-center justify-between focus-visible"
                onClick={() => toggleItem(index)}
                data-testid={`faq-button-${index + 1}`}
              >
                <h3 className="text-xl font-semibold text-primary pr-4">{faq.question}</h3>
                <Plus 
                  className={`text-2xl text-muted transition-transform ${openItem === index ? 'rotate-45' : ''}`}
                  size={24}
                />
              </button>
              {openItem === index && (
                <div className="px-6 pb-6" data-testid={`faq-answer-${index + 1}`}>
                  <p className="text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
