"use client";

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/constants/data";
import { IMAGES } from "@/constants/images";

export default function Testimonials() {
  const testimonial = TESTIMONIALS[0];
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    const handleScroll = (e: any) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
      
      // Parallax for left side
      if (leftRef.current) {
        const translateY = (scrollProgress - 0.5) * 30;
        leftRef.current.style.transform = `translateY(${translateY}px)`;
      }
      
      // Parallax for right side (opposite)
      if (rightRef.current) {
        const translateY = (scrollProgress - 0.5) * -25;
        rightRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    lenis.on("scroll", handleScroll);
    handleScroll({ scroll: lenis.scroll });

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-2 lg:px-4 py-12">
      <div className="bg-[#111111] rounded-[3rem] p-8 lg:p-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Side */}
          <div 
            ref={leftRef}
            className={`relative transition-all duration-1000 ease-out transition-transform duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute -top-10 -left-6 text-8xl font-serif text-white/5 font-bold z-0">
              &ldquo;
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 block mb-6">
                — Testimonials
              </span>
              <h2 className="text-3xl lg:text-[2.5rem] leading-tight font-display text-white mb-8">
                Hear from those who&apos;ve <br /> built with us
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md">
                Real client stories — sharing their experience with our team. From start to finish,
                we focus on quality and making the process worry-free.
              </p>
            </div>

            {/* Client Image */}
            <div className="relative w-full max-w-xs h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={IMAGES.testimonials[testimonial.imageKey]}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4 text-center border border-white/10">
                <h4 className="text-white font-bold text-sm tracking-wide">{testimonial.name}</h4>
                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Quote */}
          <div 
            ref={rightRef}
            className={`flex flex-col h-full justify-center pt-8 lg:pt-0 transition-all duration-1000 ease-out delay-200 transition-transform duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative mb-12">
              <span className="material-icons-outlined text-6xl text-primary absolute -top-10 -left-6 opacity-20">
                format_quote
              </span>
              <blockquote className="text-2xl lg:text-4xl font-display text-white leading-[1.3] relative z-10 font-light">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                <span className="material-icons-outlined text-lg">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-lg shadow-white/5">
                <span className="material-icons-outlined text-lg">arrow_forward</span>
              </button>
              <div className="h-px bg-white/10 flex-grow ml-8"></div>
              <span className="text-white/40 text-xs font-mono">01 / 04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

