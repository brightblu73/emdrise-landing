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
      question: "Who created EMDRise?",
      answer: "EMDRise was developed by a small team of qualified and accredited CBT and EMDR therapists. The aim was to create an evidence-informed, professional, and accessible EMDR self-help platform that empowers users to practice self-guided therapy safely and effectively."
    },
    {
      question: "Do I need an account to use EMDRise?",
      answer: "Yes. You need to create an account to access the app. You can sign up using Apple, Google, or email and password."
    },
    {
      question: "Do I need to agree to Terms and Privacy Policy?",
      answer: "Yes. On sign-up, users must confirm that they have read and agreed to EMDRise's Terms of Use and Privacy Policy."
    },
    {
      question: "How do I delete my account?",
      answer: "You can request full account deletion within the app. This will permanently remove your data."
    },
    {
      question: "Is EMDRise free?",
      answer: "EMDRise offers a 7-day free trial so users can explore its guided EMDR therapy sessions. After that, a subscription is required to continue using the app. This ensures ongoing access to self-guided EMDR tools, therapist-led videos, and bilateral stimulation modes. EMDRise is available on a monthly subscription. Pricing may vary by region — please check your app store for the latest price."
    },
    {
      question: "How are payments handled?",
      answer: "Payments are managed securely through your device's app store (Apple App Store or Google Play)."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "Subscriptions can be managed and cancelled directly through your app store account settings."
    },
    {
      question: "What does a session look like?",
      answer: "Each session follows the standard EMDR protocol with therapist-led videos and bilateral stimulation. The core journey includes: Preparation, Target Memory Setup, Reprocessing, Installation of Positive Belief, Body Scan, and Closure and Aftercare."
    },
    {
      question: "What if I can't finish a session?",
      answer: "The app includes a 'safe closure' option. If you pause, you can return later and resume from where you left off."
    },
    {
      question: "What types of bilateral stimulation are available?",
      answer: "Visual: moving dots across the screen, Auditory: alternating stereo tones, Tactile: self-tapping prompts."
    },
    {
      question: "How is my data protected?",
      answer: "EMDRise is fully GDPR and UK Data Protection Act compliant. All user data is encrypted in transit and at rest, and stored securely on trusted platforms. The app follows strict data minimisation principles, collecting only what is necessary to provide safe and effective self-help and therapy support."
    },
    {
      question: "Does EMDRise share my personal data?",
      answer: "No. EMDRise does not sell or share your personal data with third parties for marketing."
    },
    {
      question: "What if I feel overwhelmed during a session?",
      answer: "The app includes grounding tools (e.g., calm place visualisation) and safe closure steps. If distress continues, we recommend pausing the session and seeking support from a qualified therapist."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="card-custom" data-testid={`faq-item-${index + 1}`}>
              <button 
                className="w-full text-left flex items-center justify-between focus-visible"
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
                <div className="pt-4 border-t border-custom mt-4" data-testid={`faq-answer-${index + 1}`}>
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
