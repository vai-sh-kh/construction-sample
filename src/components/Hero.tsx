"use client";

import { useEffect, useRef } from "react";
import { IMAGES } from "@/constants/images";
import { STATS } from "@/constants/data";

export default function Hero() {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    const handleScroll = (e: any) => {
      const scrollY = e.scroll || window.scrollY;
      
      // Parallax for left card
      if (leftCardRef.current) {
        const rect = leftCardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
        const translateY = (scrollProgress - 0.5) * 30;
        leftCardRef.current.style.transform = `translateY(${translateY}px)`;
      }

      // Parallax for right image (opposite direction)
      if (rightImageRef.current) {
        const rect = rightImageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
        const translateY = (scrollProgress - 0.5) * -40;
        rightImageRef.current.style.transform = `translateY(${translateY}px)`;
      }

      // Parallax for spinning badge
      if (badgeRef.current) {
        const rect = badgeRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
        const translateY = (scrollProgress - 0.5) * 50;
        const rotate = scrollProgress * 360;
        badgeRef.current.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
      }

      // Parallax for stats
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
        const translateY = (scrollProgress - 0.5) * -20;
        statsRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    lenis.on("scroll", handleScroll);
    handleScroll({ scroll: lenis.scroll });

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pt-8 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[640px]">
        {/* Left Yellow Card */}
        <div 
          ref={leftCardRef}
          className="lg:col-span-5 bg-primary rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group transition-transform duration-300 ease-out"
        >
          {/* Video Thumbnail */}
          <div className="relative w-full h-40 lg:h-48 rounded-xl overflow-hidden mb-6 shadow-md border-4 border-white/10">
            <img
              src={IMAGES.hero.planningWorkers}
              alt="Construction workers looking at plans"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:bg-white/50 transition-colors">
              <span className="material-icons-outlined text-white text-sm">play_arrow</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl lg:text-[3.25rem] font-display font-bold text-black leading-[1.05] mb-4 lg:mb-6 tracking-tight">
              Building Tomorrow <br /> with Vision
            </h1>
            <p className="text-black/80 font-medium text-sm lg:text-[15px] leading-relaxed mb-8 max-w-[90%]">
              We build iconic infrastructures that transform city skylines, strengthen communities,
              boost economic growth, and leave a lasting mark of innovation around the world.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-auto relative z-10">
            <a
              href="#"
              className="bg-black text-white pl-6 pr-2 py-2 rounded-full text-sm font-semibold flex items-center gap-3 hover:bg-gray-900 transition-colors shadow-lg"
            >
              Get Started
              <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                <span className="material-icons-outlined text-sm transform -rotate-45">
                  arrow_forward
                </span>
              </span>
            </a>
            <button className="px-5 py-3 rounded-full text-sm font-semibold border border-black/10 hover:bg-black/5 flex items-center gap-2 transition-colors text-black">
              <span className="material-icons-outlined text-lg">play_circle</span>
              Watch Video
            </button>
          </div>

          {/* Spinning Badge */}
          <div 
            ref={badgeRef}
            className="absolute -right-12 bottom-20 lg:bottom-32 transform translate-x-1/4 translate-y-1/4 scale-75 lg:scale-100 hidden md:block transition-transform duration-300 ease-out"
          >
            <div className="relative w-32 h-32 bg-white/90 backdrop-blur-xl rounded-full p-2 animate-spin-slow border border-white/50 shadow-xl flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                  id="curve"
                />
                <text className="text-[9.5px] uppercase font-bold tracking-[0.15em] fill-black">
                  <textPath href="#curve">
                    Elevating skylines • Engineering strength •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-icons-outlined text-2xl text-black">add</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image with Stats */}
        <div className="lg:col-span-7 relative rounded-[2rem] overflow-hidden h-full min-h-[400px]">
          <div 
            ref={rightImageRef}
            className="w-full h-full transition-transform duration-300 ease-out"
          >
            <img
              src={IMAGES.hero.crane}
              alt="Large yellow crane against blue sky"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Stats */}
          <div 
            ref={statsRef}
            className="absolute bottom-0 left-0 w-full p-8 lg:p-12 transition-transform duration-300 ease-out"
          >
            <div className="grid grid-cols-3 gap-8 w-full border-t border-white/20 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-white">
                  <div className="text-3xl lg:text-5xl font-bold font-display">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-white/70 mt-1 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

