"use client";

import { useEffect, useRef, useState } from "react";

const BUILDING_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCFV3z4-6FQbpPvrDxctjcCySr9oDcSt0zkmKzoLTHMmF3oN0ha9ItpctH5mEzaFrvY-S2tx8kU15jjil8za-zpqrA0f9GLP45-2yAB0hcF1qg2U1W7XWB9BUmOOC615umCBetsEUCxEVob6niljA1Gwd1c21bfdqHa-yKAN3CLUp_NJ-QSuY2u72uXY1xfG7BJairPy_RAZxlz8t25qFbPbM4dj-PTqjSjcD-bZMBdPsTGbvgITT2AclURFA8IUJFH883USHHduJk";

const SERVICE_CARDS = [
  {
    title: "Onset Services",
    description: "Vivamus eget metus vitae neque imperdiet hendrerit. Fusce egestas fringilla augue, eget scelerisque sapien auctor ac. Sed non diam.",
  },
  {
    title: "Ongoing Solutions",
    description: "Responsible for ongoing maintenance and repairs to ensure that completed construction projects remain in good condition.",
  },
  {
    title: "Repetitive Services",
    description: "Concrete finishers work on repetitive tasks related to concrete, such as pouring, leveling and finishing concrete surfaces.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));

      // Parallax for image
      if (imageRef.current) {
        const translateY = (scrollProgress - 0.5) * -60;
        imageRef.current.style.transform = `translateY(${translateY}px) scale(1.05)`;
      }

      // Parallax for cards
      if (cardsRef.current) {
        const translateY = (scrollProgress - 0.5) * 40;
        cardsRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    lenis.on("scroll", handleScroll);
    handleScroll();

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="w-full px-4 py-16 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-gray-900 mb-8">
            Our construction services that we provide Full Spectrum of Construction Solutions.
          </h2>
          <button className="bg-[#262626] hover:bg-black text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Start a project
          </button>
        </div>
        <div className="lg:col-span-6 lg:pl-12 pt-2">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ARCDG CPM specializes in construction and urban development, creating spaces that 
            support healthy and inclusive communities while honoring diversity and the unique 
            situations of individuals. We prioritize coexistence as a fundamental aspect of 
            all our projects, contributing to the construction of sustainable cities.
          </p>
        </div>
      </div>

      {/* Image with Cards */}
      <div className={`relative w-full rounded-3xl overflow-hidden mt-8 min-h-[500px] md:min-h-[600px] flex items-end justify-center bg-gray-100 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-200 z-0" />
        
        {/* Image */}
        <div 
          ref={imageRef}
          className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out"
        >
          <img
            src={BUILDING_IMAGE}
            alt="Detailed 3D isometric render of a modern architectural building model"
            className="w-full h-full object-cover object-center opacity-90 mix-blend-multiply"
          />
        </div>

        {/* Glass Cards */}
        <div 
          ref={cardsRef}
          className="relative z-10 w-full p-4 md:p-6 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end transition-transform duration-300 ease-out"
        >
          {SERVICE_CARDS.map((card, index) => (
            <div
              key={card.title}
              className={`glass-card bg-white/80 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{card.title}</h3>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="material-symbols-outlined text-sm text-gray-800 transform -rotate-45">
                    arrow_forward
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
