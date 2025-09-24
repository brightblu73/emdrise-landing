import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is EMDRise?",
      answer: "EMDRise is a self-guided EMDR (Eye Movement Desensitisation and Reprocessing) self-help app. It provides structured guided EMDR therapy sessions led by professional videos, combined with bilateral stimulation (visual, auditory, and tapping). It is designed for individuals looking for accessible tools to support their emotional healing, mental health, and self-guided therapy journey."
    },
    {
      question: "Is EMDRise a replacement for therapy with a clinician?",
      answer: "No. EMDRise is not a medical device and is not a substitute for therapy with a qualified mental health professional. It is best used as a wellness and self-help tool for self-guided EMDR practice, complementing professional care or supporting individuals between therapy sessions."
    },
    {
      question: "Is EMDRise free?",
      answer: "EMDRise offers a 7-day free trial so users can explore its guided EMDR therapy sessions. After that, a subscription is required to continue using the app. This ensures ongoing access to self-guided EMDR tools, therapist-led videos, and bilateral stimulation modes."
    },
    {
      question: "What types of bilateral stimulation are available?",
      answer: "EMDRise offers three types of bilateral stimulation: Visual (moving dots across the screen), Auditory (alternating stereo tones), and Tactile (self-tapping prompts). You can choose the method that works best for you during each session."
    },
    {
      question: "What does a session look like?",
      answer: "Each session follows the standard EMDR protocol with therapist-led videos and bilateral stimulation. The core journey includes: Preparation, Target Memory Setup, Reprocessing, Installation of Positive Belief, Body Scan, and Closure and Aftercare."
    },
    {
      question: "How is my data protected?",
      answer: "EMDRise is fully GDPR and UK Data Protection Act compliant. All user data is encrypted in transit and at rest, and stored securely on trusted platforms. The app follows strict data minimisation principles, collecting only what is necessary to provide safe and effective self-help and therapy support."
    },
    {
      question: "What if I can't finish a session?",
      answer: "The app includes a 'safe closure' option. If you pause, you can return later and resume from where you left off. This ensures you can always safely exit a session if needed."
    },
    {
      question: "What if I feel overwhelmed during a session?",
      answer: "The app includes grounding tools (e.g., calm place visualisation) and safe closure steps. If distress continues, we recommend pausing the session and seeking support from a qualified therapist."
    },
    {
      question: "How can I cancel my subscription?",
      answer: "Subscriptions can be managed and cancelled directly through your app store account settings (Apple App Store or Google Play)."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach us at support@emdrise.com for technical or account issues."
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
