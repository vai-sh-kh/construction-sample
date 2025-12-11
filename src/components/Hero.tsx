"use client";

import { useEffect, useRef, useState } from "react";

const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAFozsB5H7UkzJat1i23yEpLkpelJf8ciCGZVrduEXpVN8t745dRGksEuQvlGIXTrsHBRj_-237v9IlDNVLvz3QXykEm6N9zpxek97qXUrUo1hVnnc7bAjv7IK8tSYmXotJKjJOPNg5I2rBNZZKSDXOyL5odXUB6RMGAwl5yC5Cai16q1LscI9TZaAIwrwdBTZWXkDxPzzmaqvba8mbwyoeB8G08yHRSvktkkAJS5BXbbNyRW9ozbSx2PC7MMzkTruJnrg8fF84gQo";

const PILLS = [
  "Design Planning",
  "Structure",
  "Foundation",
  "Safety",
  "Preparation",
];

export default function Hero() {
  const scrollBadgeRef = useRef<HTMLDivElement>(null);
  const watchReelsRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    const handleScroll = () => {
      // Parallax for hero image
      if (heroImageRef.current) {
        const rect = heroImageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
        const translateY = (scrollProgress - 0.5) * 50;
        heroImageRef.current.style.transform = `translateY(${translateY}px) scale(1.1)`;
      }

      // Parallax for scroll badge
      if (scrollBadgeRef.current) {
        const rect = scrollBadgeRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
        const translateY = (scrollProgress - 0.5) * 30;
        scrollBadgeRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    lenis.on("scroll", handleScroll);
    handleScroll();

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex flex-col pt-8 pb-12 bg-background-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-[1400px] relative z-10">
        {/* Title Section */}
        <div className={`flex flex-col items-center justify-center text-center mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] font-medium text-text-main tracking-tight">
              CONSTRUCTION{" "}
              <span className="align-super text-3xl sm:text-5xl md:text-7xl material-symbols-outlined font-light ml-2">
                flare
              </span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] font-medium text-text-main tracking-tight mt-2">
              PROJECT MANAGEMENT
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-4 items-start relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left Text */}
          <div className="lg:col-span-3 flex flex-col justify-start pt-4 pl-2 text-center lg:text-left">
            <h2 className="text-gray-500 font-bold text-xl md:text-2xl uppercase leading-tight tracking-wide">
              The Process<br className="hidden lg:block" />
              {" "}of Creating<br className="hidden lg:block" />
              {" "}Buildings
            </h2>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 flex flex-col items-center text-center pt-2">
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[550px] mx-auto">
              ARC CPM has always provided structural support for buildings and infrastructure. 
              There are different types of foundations, including shallow foundations and deep 
              foundations depending on the project&apos;s requirements.
            </p>
            <button className="hero-btn shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              LET&apos;S GO!
            </button>
          </div>

          {/* Right Spinning Badge */}
          <div className="hidden lg:flex lg:col-span-3 justify-end items-start pr-8 pt-8 relative">
            <div 
              ref={watchReelsRef}
              className="relative w-24 h-24 rounded-full border border-dashed border-gray-400 flex items-center justify-center animate-spin-slow"
            >
              <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 100 100">
                <path
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                  id="circlePath"
                />
                <text fill="#666" fontSize="11" fontWeight="bold" letterSpacing="3">
                  <textPath href="#circlePath" startOffset="0%">
                    WATCH REELS • WATCH REELS •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute top-8 right-8 w-24 h-24 flex items-center justify-center pointer-events-none translate-x-[2px] translate-y-[2px]">
              <span 
                className="material-symbols-outlined text-5xl text-black"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className={`relative w-full mt-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative z-10 w-full overflow-hidden rounded-2xl md:rounded-3xl">
            <div 
              ref={heroImageRef}
              className="w-full aspect-[16/9] lg:aspect-[2/1] bg-cover bg-center shadow-sm transition-transform duration-300 ease-out"
              style={{ 
                backgroundImage: `url('${HERO_IMAGE}')`,
                transformOrigin: 'center center'
              }}
            />
          </div>

          {/* Scroll Down Badge */}
          <div 
            ref={scrollBadgeRef}
            className="absolute -bottom-10 left-4 md:left-8 z-20 transition-transform duration-300 ease-out"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border border-gray-200 flex flex-col items-center justify-center shadow-sm">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 animate-spin-slow">
                  <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                    <path
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                      id="scrollPath"
                    />
                    <text fill="#333" fontSize="11" fontWeight="bold" letterSpacing="2">
                      <textPath href="#scrollPath" startOffset="0%">
                        SCROLL DOWN • SCROLL DOWN •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <span className="material-symbols-outlined text-3xl md:text-4xl text-black">
                  arrow_downward
                </span>
              </div>
            </div>
          </div>

          {/* Pills */}
          <div className="hidden md:flex flex-wrap justify-end gap-3 absolute -bottom-5 right-0 z-20 pr-4">
            {PILLS.map((pill) => (
              <button key={pill} className="bottom-pill">
                {pill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
