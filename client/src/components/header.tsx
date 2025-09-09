import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 header-blur">
      <nav className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
          <img 
            src="/assets/emdrise-logo.svg" 
            alt="EMDRise - Professional EMDR Therapy App Logo" 
            className="h-[100px]"
            style={{ height: '100px' }}
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-muted hover:text-primary transition-colors focus-visible" data-testid="link-how-it-works">
            How It Works
          </a>
          <a href="#features" className="text-muted hover:text-primary transition-colors focus-visible" data-testid="link-features">
            Features
          </a>
          <a href="#testimonials" className="text-muted hover:text-primary transition-colors focus-visible" data-testid="link-testimonials">
            Testimonials
          </a>
          <a href="#faq" className="text-muted hover:text-primary transition-colors focus-visible" data-testid="link-faq">
            FAQ
          </a>
        </div>
        
        <Button className="btn-primary" data-testid="button-download">
          Download App
        </Button>
      </nav>
    </header>
  );
}
