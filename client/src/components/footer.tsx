import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-16 bg-text-dark">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold text-white">EMDRise</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Professional EMDR therapy accessible to everyone. Evidence-based treatment for trauma, anxiety, and PTSD.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus-visible" aria-label="Twitter" data-testid="link-social-twitter">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus-visible" aria-label="Facebook" data-testid="link-social-facebook">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus-visible" aria-label="LinkedIn" data-testid="link-social-linkedin">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors focus-visible" data-testid="link-footer-features">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors focus-visible" data-testid="link-footer-pricing">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors focus-visible" data-testid="link-footer-download">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors focus-visible" data-testid="link-footer-faq">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors focus-visible" data-testid="link-footer-contact">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors focus-visible" data-testid="link-footer-help">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © <span data-testid="text-copyright-year">{currentYear}</span> EMDRise. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors focus-visible" data-testid="link-footer-privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors focus-visible" data-testid="link-footer-terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
