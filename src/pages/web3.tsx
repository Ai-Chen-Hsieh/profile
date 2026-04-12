import { useEffect, useRef } from "react";
import Web3Navbar from "@/components/web3/Web3Navbar";
import Web3Hero from "@/components/web3/Web3Hero";
import Web3Stats from "@/components/web3/Web3Stats";
import Web3Features from "@/components/web3/Web3Features";
import Web3HowItWorks from "@/components/web3/Web3HowItWorks";
import Web3Testimonials from "@/components/web3/Web3Testimonials";
import Web3CTA from "@/components/web3/Web3CTA";
import Web3Footer from "@/components/web3/Web3Footer";

/* Scroll-reveal: attach IntersectionObserver to all .section-hidden elements */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".section-hidden").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Web3Page = () => {
  useScrollReveal();

  return (
    <div
      className="web3-bg min-h-screen text-white antialiased"
      style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}
    >
      <Web3Navbar />
      <main>
        <Web3Hero />
        <Web3Stats />
        <Web3Features />
        <Web3HowItWorks />
        <Web3Testimonials />
        <Web3CTA />
      </main>
      <Web3Footer />
    </div>
  );
};

export default Web3Page;
