import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-gradient-to-br from-blue-500 to-emerald-500">
      <div className="max-w-container mx-auto px-6">
        <div>
          <img 
            src="/assets/emdrise-logo.svg" 
            alt="EMDRise - Professional Self-Directed EMDR Therapy App Logo" 
            className="brightness-0 invert h-12 w-auto max-w-[200px] object-contain mb-3 block"
          />
          <p className="text-white/80 whitespace-nowrap text-sm">
            Self-directed EMDR therapy, professionally designed and available on demand
          </p>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-xs">
            © <span data-testid="text-copyright-year">{currentYear}</span> EMDRise Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="mailto:support@emdrise.com" className="text-white/80 hover:text-white transition-colors text-xs focus-visible" data-testid="link-footer-contact">Contact</a>
            <Link href="/privacy" className="text-white/80 hover:text-white transition-colors text-xs focus-visible" data-testid="link-footer-privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/80 hover:text-white transition-colors text-xs focus-visible" data-testid="link-footer-terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
