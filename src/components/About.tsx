"use client";

import { useEffect, useRef, useState } from "react";

const IMAGES = {
  ecoWorks: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqMurufwhx6Z2AJq8RBUIG-3wiks8p9ZoMEVgZa1qwy9F_31wQSnGdn8Ci6sEZO_AV8lJbvHpwMG0wMYj5XeE-7sFV5zf7z4PmDE4ELssysepcIjDPbocszN2hPS6DgZepObiiw2xecFA89EEg-43tYNrwcsbYg6KUlEzDkva9Si36mz4YuXiAYZbyJ-1pGVGIYC9SP1onWyULIvtG9w8uQZH3Xfc60jEPwRIjEnOLLTu3Z2yZzXPnA6EHudoVkeQ1Omo5pnh7xKs",
  villa: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnnGVzGVeldphF9xmCBgf6QE_G0ieL3jmLVQ02tQBxi028VMly0z75CzSSXFddOykwzSBhB5llpHgsVIXaHplEPm1wBk2bLVI4_ADVkD830Z5PjVH4a5aFRU3MnDiD7ZygONXidBet4GHjUQ6eKicSfXaiQNreLzY95RfKRAmPRazxqBUFObAUhC3Gf7nHKcNM7nMWkBoalVS9uDIZzIVOdupHvj1EyHFTZqwxuMFQfG_0S3yPAHJycOQytMyANb6wadTKTqT2W64",
  interior: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaUL58pkAePkocq2DHboyOjL4xEAXmu5QCLpbpePJM98fHC6jh64QGvOU28W3fkZPPv_eIHaBLE-hPItsgy0tP2F0Mqr5jGY3P3M-581aowuqHfBhaMvEu0M4CTuoVviZ65JLURkqfYWAfJauF-jTogmY7MTRFWjMQD4JT0TLkgmW-ecvjMqwgPQ_ccRgjQyng7E-QrxCJmMmsIFuEI4WQNexpRfk540bTY9LZ5Sr7KExap_XVjC7Ei5-q3Z9apvOU8tFLe4D4nP0",
  avatar1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzyblm5MPa4Q7rlecIb9OosXkKgFGQXU7s6j4Czzyle9ByQ6y0pPrckNxOSLhCvDmHlDCO8c8nGeLs4ajE2uYAv7aN--SS80rFbZK56EHnURJgXdDQpdRWPDrzzU-iIlrp1QS5Ye3mkxfoN1n5dlncy4o3CuvlZ772z17LSI0JzrVYbOiKz6Hud5y6_lhUqCGTUbhKMIyGf7Swj_mZ1JtI3gt33E64ydmnk7yEKN0qAAA18rDOjNWs-ywKQ-SXHgR4zFPJGZdoxlQ",
  avatar2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTUKN9fR6ASXctjN_S-S965T4LyGrxO1xfFC_fGpnFyqBqUPDdf10xuVcEb3a_RZKbbLDepMDhqI1Dq8LBFb3lEb5JYLC4C4BWVdLeFvMT6UszEjGht14choDczel6PJjPetrrpTtR_G_e3qxM9mcTEO1FSVSN3T9gKF3zfs42NiO_I4kgIMcYITOOA33m2oEXn3e7CZHVSJ1Sb6EJtp3sc93ryIH-A7vHakzSuxxl3L6BVOE4pjgxqqjJT5TnNLRmNEZ1_Uhj3aQ",
  avatar3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHXZ2S1erO6huBpDnVwv7LYlvE8IZs_IdbN5ewXjDLc4HDgFoJ49wIVnmQZ-SI7gI3LDTLrVDtHB7wTMyl2UUt_bhI3WlhzXYgKOANIFChZP5jfJrqJtImvkBQBuWJuUzjH29XObf3-DS7kiFVeWdeTTN918qukV1mThEXR3sZwzd28w-9rPyp-199dkgIYpCWcAifNb9ZInVe97o_-hBN55dVKXfnJMh6yhXlJOL75ymKsE859OVeOCUeLX_Y1WCxAv-9_iaeXJ8",
};

const TAGS = [
  "Sustainable Design",
  "Urban Planning",
  "Residential Projects",
  "Commercial Complex",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
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
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto"
    >
      {/* Header */}
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-20 mb-16 items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="lg:w-[45%]">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-[1.15] tracking-tight text-[#1A1A1A]">
            Good architectural and engineering design is based on deep understanding of the users&apos; need.
          </h2>
        </div>
        <div className="lg:w-[55%] lg:pl-10 lg:pt-2">
          <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed mb-6 max-w-xl">
            Understanding user needs allows architects and engineers to design spaces and structures 
            that are tailored to the specific functions they will serve. For example, a hospital 
            needs different design considerations compared to a school or a residential building.
          </p>
          <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed max-w-xl">
            By deeply analyzing the purpose and flow of the space, we ensure that every square 
            meter serves a meaningful role in the lives of those who inhabit it.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
        {/* Card 1 - Eco Works */}
        <div className={`relative group h-[380px] sm:h-[420px] lg:h-[480px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '100ms' }}>
          <div className="absolute -top-4 -right-4 z-20">
            <button className="bg-white border border-gray-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-black text-base md:text-lg font-medium" style={{ fontVariationSettings: "'wght' 500" }}>
                north_east
              </span>
            </button>
          </div>
          <div className="bg-[#1F1F1F] text-white rounded-[2rem] h-full overflow-hidden flex flex-col relative pt-6 md:pt-8 px-2 pb-2">
            <div className="px-4 md:px-6 mb-4">
              <h3 className="text-lg md:text-xl font-bold leading-tight">Eco Works</h3>
              <p className="text-gray-400 text-sm md:text-base">Business Center</p>
            </div>
            <div className="flex-1 w-full relative rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden mt-2">
              <img
                src={IMAGES.ecoWorks}
                alt="Modern sustainable architecture"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Card 2 - Info Card */}
        <div className={`relative h-[280px] sm:h-[320px] lg:h-[340px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-[#1F1F1F] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="absolute top-6 md:top-8 right-6 md:right-8 text-gray-600 opacity-40 group-hover:opacity-60 transition-opacity">
              <svg fill="currentColor" height="50" width="50" viewBox="0 0 24 24" className="md:w-[60px] md:h-[60px]">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 text-white z-10">
              <span className="material-symbols-outlined text-xl md:text-2xl">grid_view</span>
              <span className="font-bold tracking-wide text-xs md:text-sm uppercase">ARCDG CPM</span>
            </div>
            <div className="mt-auto relative z-10">
              <p className="text-gray-400 text-xs md:text-[13px] leading-relaxed mb-6 pr-4">
                Architecture can have a positive influence on people&apos;s well-being and recovery. 
                Which aim to create environments that support physical and emotional healing.
              </p>
              <div className="flex gap-2">
                <div className="w-6 h-1 bg-white/90 rounded-full"></div>
                <div className="w-1.5 h-1 bg-gray-700 rounded-full"></div>
                <div className="w-1.5 h-1 bg-gray-700 rounded-full"></div>
                <div className="w-1.5 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Villa with Rating */}
        <div className={`relative group h-[380px] sm:h-[420px] lg:h-[480px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
          <div className="absolute -top-4 -right-4 z-20">
            <button className="bg-white border border-gray-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-black text-base md:text-lg font-medium" style={{ fontVariationSettings: "'wght' 500" }}>
                north_east
              </span>
            </button>
          </div>
          <div className="bg-white rounded-[2rem] h-full overflow-hidden relative shadow-soft">
            <img
              src={IMAGES.villa}
              alt="Modern luxury villa exterior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Rating Card */}
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white/95 backdrop-blur-sm rounded-[1.25rem] md:rounded-[1.5rem] p-4 md:p-5 shadow-lg w-[140px] md:w-[160px]">
              <p className="text-[10px] md:text-[11px] text-gray-500 font-semibold mb-1">Average Rating</p>
              <div className="text-2xl md:text-[32px] font-bold text-gray-900 leading-none mb-2 md:mb-3">4.9</div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src={IMAGES.avatar1} alt="User" className="inline-block h-5 w-5 md:h-6 md:w-6 rounded-full ring-2 ring-white object-cover" />
                  <img src={IMAGES.avatar2} alt="User" className="inline-block h-5 w-5 md:h-6 md:w-6 rounded-full ring-2 ring-white object-cover" />
                  <img src={IMAGES.avatar3} alt="User" className="inline-block h-5 w-5 md:h-6 md:w-6 rounded-full ring-2 ring-white object-cover" />
                </div>
              </div>
              <div className="mt-1">
                <span className="text-[9px] md:text-[10px] text-gray-400 font-medium border border-gray-200 rounded-full px-2 py-0.5 inline-block bg-gray-50">
                  980+ Customers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 - About Us */}
        <div className={`relative group h-[380px] sm:h-[420px] lg:h-[480px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
          <div className="bg-[#1A1A1A] rounded-[2rem] h-full overflow-hidden flex flex-col relative pt-6 md:pt-8 pb-0">
            <div className="px-4 md:px-6 mb-2 z-20">
              <p className="text-gray-300 text-xs md:text-sm mb-2">Wanna know more</p>
              <div className="inline-block border border-gray-700/50 rounded-full px-3 md:px-4 py-1 md:py-1.5 bg-white/5 backdrop-blur-md">
                <span className="text-gray-200 text-xs font-medium">about us</span>
              </div>
            </div>
            <div className="flex-1 w-full relative mt-4 mx-auto overflow-visible flex items-center justify-center">
              <img
                src={IMAGES.interior}
                alt="Isometric view of interior room"
                className="relative z-10 w-full object-cover transform scale-110 translate-y-4"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/80 to-transparent z-20 pt-12 md:pt-16">
              <p className="text-gray-400 text-[10px] md:text-[11px] leading-relaxed">
                Architectural design can support safety and infection control measures, 
                which are crucial in healthcare environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className={`mt-16 md:mt-20 border-t border-gray-200 pt-8 md:pt-10 flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4 justify-between items-center text-xs lg:text-sm font-medium text-gray-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
        {TAGS.map((tag) => (
          <div key={tag} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
