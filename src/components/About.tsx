"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
      if (labelRef.current && contentRef.current) {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
        
        // Subtle parallax for label
        const labelTranslateY = (scrollProgress - 0.5) * 20;
        labelRef.current.style.transform = `translateY(${labelTranslateY}px)`;
        
        // Subtle parallax for content
        const contentTranslateY = (scrollProgress - 0.5) * -15;
        contentRef.current.style.transform = `translateY(${contentTranslateY}px)`;
      }
    };

    lenis.on("scroll", handleScroll);
    handleScroll({ scroll: lenis.scroll });

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Section Label */}
        <div 
          ref={labelRef}
          className={`lg:col-span-3 pt-2 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
            — About Us
          </span>
        </div>

        {/* Content */}
        <div 
          ref={contentRef}
          className={`lg:col-span-9 pl-0 lg:pl-4 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-[2.75rem] font-display font-medium leading-[1.15] mb-8 text-black tracking-tight">
            Bringing your vision to life. We transform bold ideas into durable and eco-conscious
            structures, guided by decades of experience and a relentless commitment to precision in
            every detail.
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl leading-relaxed font-light">
            We combine innovation, craftsmanship, and technical excellence to deliver projects that
            not only meet expectations — but redefine them. Our team is dedicated to building with
            purpose, precision, and lasting value.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full text-sm font-semibold transition-transform hover:-translate-y-1 group"
          >
            Get Started
            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black group-hover:bg-white transition-colors">
              <span className="material-icons-outlined text-sm transform -rotate-45">
                arrow_forward
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

