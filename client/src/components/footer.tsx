import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-16 footer-soft bg-gradient-to-br from-primary-blue/90 to-primary-green/90">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/assets/emdrise-logo.svg" 
                alt="EMDRise - Professional EMDR Therapy App Logo" 
                className="h-10"
              />
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Professional EMDR therapy accessible to everyone. Evidence-based treatment for trauma, anxiety, and PTSD.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="footer-link focus-visible" aria-label="Twitter" data-testid="link-social-twitter">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="footer-link focus-visible" aria-label="Facebook" data-testid="link-social-facebook">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="footer-link focus-visible" aria-label="LinkedIn" data-testid="link-social-linkedin">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="footer-link focus-visible" data-testid="link-footer-features">Features</a></li>
              <li><a href="#" className="footer-link focus-visible" data-testid="link-footer-pricing">Pricing</a></li>
              <li><a href="#" className="footer-link focus-visible" data-testid="link-footer-download">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="footer-link focus-visible" data-testid="link-footer-faq">FAQ</a></li>
              <li><a href="#" className="footer-link focus-visible" data-testid="link-footer-contact">Contact</a></li>
              <li><a href="#" className="footer-link focus-visible" data-testid="link-footer-help">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-custom mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-sm">
            © <span data-testid="text-copyright-year">{currentYear}</span> EMDRise. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="footer-link text-sm focus-visible" data-testid="link-footer-privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-link text-sm focus-visible" data-testid="link-footer-terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
