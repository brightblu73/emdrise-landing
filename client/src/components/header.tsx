import { Link } from "wouter";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 header-blur">
      <nav className="max-w-container mx-auto px-6 py-4 flex items-center justify-center">
        <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
          <img 
            src="/assets/emdrise-logo.svg" 
            alt="EMDRise - Professional EMDR Therapy App Logo" 
            className="h-[100px]"
            style={{ height: '100px' }}
          />
        </Link>
      </nav>
    </header>
  );
}
