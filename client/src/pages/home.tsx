import { useEffect, useRef } from "react";
import { ChevronRight, Play, Shield, Brain, Clock, CheckCircle, Phone } from "lucide-react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create optimized IntersectionObserver for mobile
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // Unobserve after animation to improve performance
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        // Optimized threshold for mobile performance
        threshold: 0.1,
        // Start animating slightly before element is in view
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all fade-in sections
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header - Sticky with GPU acceleration */}
      <header className="sticky-header bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900" data-testid="text-logo">EMDRise</span>
          </div>
          <button 
            data-testid="button-download"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="fade-in-section container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            data-testid="text-hero-title"
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Professional EMDR Therapy
            <span className="block text-blue-600 mt-2">In Your Pocket</span>
          </h1>
          <p 
            data-testid="text-hero-subtitle"
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Evidence-based treatment for trauma, anxiety, and PTSD. 
            Start your healing journey today with guided EMDR sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              data-testid="button-get-started"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Get Started
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              data-testid="button-watch-demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="fade-in-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 
            data-testid="text-features-title"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Why Choose EMDRise?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="fade-in-section p-6 rounded-xl bg-blue-50" data-testid="card-feature-1">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Built on clinically proven EMDR therapy techniques recognized by WHO, APA, and EMDRIA.
              </p>
            </div>
            <div className="fade-in-section p-6 rounded-xl bg-blue-50" data-testid="card-feature-2">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Private & Secure</h3>
              <p className="text-gray-600">
                Your data is encrypted and protected. We take your privacy seriously with HIPAA compliance.
              </p>
            </div>
            <div className="fade-in-section p-6 rounded-xl bg-blue-50" data-testid="card-feature-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anytime, Anywhere</h3>
              <p className="text-gray-600">
                Access guided EMDR sessions whenever you need them, from the comfort of your own space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="fade-in-section py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 
            data-testid="text-how-it-works-title"
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="fade-in-section flex gap-4" data-testid="step-1">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Session</h3>
                <p className="text-gray-600">
                  Select from guided sessions tailored to specific issues like anxiety, trauma, or stress.
                </p>
              </div>
            </div>
            <div className="fade-in-section flex gap-4" data-testid="step-2">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow the Guidance</h3>
                <p className="text-gray-600">
                  Our app guides you through bilateral stimulation using visual, audio, or tactile cues.
                </p>
              </div>
            </div>
            <div className="fade-in-section flex gap-4" data-testid="step-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Process & Heal</h3>
                <p className="text-gray-600">
                  Experience the therapeutic benefits as your brain processes difficult memories and emotions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="fade-in-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 
            data-testid="text-endorsements-title"
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Recognized by Leading Organizations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto opacity-60">
            <div className="text-2xl font-bold text-gray-700" data-testid="endorsement-who">WHO</div>
            <div className="text-2xl font-bold text-gray-700" data-testid="endorsement-apa">APA</div>
            <div className="text-2xl font-bold text-gray-700" data-testid="endorsement-emdria">EMDRIA</div>
            <div className="text-2xl font-bold text-gray-700" data-testid="endorsement-nice">NICE</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fade-in-section py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 
            data-testid="text-cta-title"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Start Your Healing Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands who have found relief through EMDR therapy. Download EMDRise now.
          </p>
          <button 
            data-testid="button-download-cta"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Download for iOS
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">EMDRise</span>
              </div>
              <p className="text-gray-400">
                Professional EMDR therapy at your fingertips.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors" data-testid="link-privacy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors" data-testid="link-terms">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">support@emdrise.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p data-testid="text-copyright">&copy; 2025 EMDRise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
