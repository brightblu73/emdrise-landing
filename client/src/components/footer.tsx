import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-16 bg-gradient-to-br from-blue-500 to-emerald-500">
      <div className="max-w-container mx-auto px-6">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <img 
              src="/assets/emdrise-logo.svg" 
              alt="EMDRise - Professional Self-Directed EMDR Therapy App Logo" 
              className="brightness-0 invert"
              style={{ height: '64px' }}
            />
          </div>
          <p className="text-white/80 leading-relaxed mb-6 max-w-md">
            Self-directed EMDR therapy, professionally designed and available on demand
          </p>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-sm">
            © <span data-testid="text-copyright-year">{currentYear}</span> EMDRise. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm focus-visible" data-testid="link-footer-contact">Contact</a>
            <Link href="/privacy" className="text-white/80 hover:text-white transition-colors text-sm focus-visible" data-testid="link-footer-privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/80 hover:text-white transition-colors text-sm focus-visible" data-testid="link-footer-terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
