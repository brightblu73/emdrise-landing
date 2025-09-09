import { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import EndorsementsTicker from "@/components/endorsements-ticker";
import HowItWorks from "@/components/how-it-works";
import WhyEMDR from "@/components/why-emdr";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      fadeInSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-light">
      <Header />
      <main>
        <Hero />
        <EndorsementsTicker />
        <HowItWorks />
        <WhyEMDR />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
