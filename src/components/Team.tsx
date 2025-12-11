"use client";

import { useEffect, useRef, useState } from "react";
import { TEAM_MEMBERS } from "@/constants/data";
import { IMAGES } from "@/constants/images";

export default function Team() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Header */}
      <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="max-w-2xl">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 block mb-4">
            — Our People
          </span>
          <h2 className="text-3xl lg:text-[2.5rem] leading-[1.2] font-display font-medium mb-4 text-black">
            The professionals turning <br /> plans into reality
          </h2>
          <p className="text-gray-600 text-sm lg:text-[15px] font-light max-w-lg mt-4">
            Behind every successful project is a passionate team. Our experts bring deep knowledge,
            strong leadership, and a shared commitment to delivering excellence.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
            <span className="material-icons-outlined text-lg group-hover:-translate-x-0.5 transition-transform">
              arrow_back
            </span>
          </button>
          <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity group shadow-lg">
            <span className="material-icons-outlined text-lg group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={member.id}
            className={`bg-[#F8F7F2] border border-gray-100 rounded-2xl p-4 text-center relative group hover:bg-white hover:shadow-card transition-all duration-1000 ease-out ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm z-10">
              <span className="material-icons-outlined text-sm transform -rotate-45">
                arrow_forward
              </span>
            </div>

            {/* Image */}
            <div className="w-full h-64 rounded-xl overflow-hidden mb-5 bg-gray-200">
              <img
                src={IMAGES.team[member.imageKey]}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Info */}
            <h4 className="font-bold text-lg mb-1">{member.name}</h4>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

