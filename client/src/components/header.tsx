import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-white/95 backdrop-blur-sm border-b border-border-light">
      <nav className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-2xl font-bold text-text-dark">EMDRise</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-text-muted hover:text-text-dark transition-colors focus-visible" data-testid="link-how-it-works">
            How It Works
          </a>
          <a href="#features" className="text-text-muted hover:text-text-dark transition-colors focus-visible" data-testid="link-features">
            Features
          </a>
          <a href="#testimonials" className="text-text-muted hover:text-text-dark transition-colors focus-visible" data-testid="link-testimonials">
            Testimonials
          </a>
          <a href="#faq" className="text-text-muted hover:text-text-dark transition-colors focus-visible" data-testid="link-faq">
            FAQ
          </a>
        </div>
        
        <Button className="btn-primary px-6 py-3 rounded-custom" data-testid="button-download">
          Download App
        </Button>
      </nav>
    </header>
  );
}
