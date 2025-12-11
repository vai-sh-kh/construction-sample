"use client";

import { useEffect, useRef, useState } from "react";
import { BLOG_POSTS } from "@/constants/data";
import { IMAGES } from "@/constants/images";

export default function Blog() {
  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  const otherPosts = BLOG_POSTS.filter((post) => !post.featured);
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
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:pb-32">
      {/* Header */}
      <div className={`flex flex-col lg:flex-row justify-between items-end mb-12 gap-8 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="max-w-2xl">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 block mb-4">
            — Insights & Updates
          </span>
          <h2 className="text-3xl lg:text-[2.5rem] leading-tight font-display font-medium text-black">
            Explore the Stories <br /> Behind the Structures
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-xs font-bold uppercase tracking-widest text-black hover:text-primary transition-colors"
          >
            View all Posts
          </a>
          <span className="material-icons-outlined text-sm text-primary">arrow_forward</span>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[480px]">
        {/* Featured Post */}
        {featuredPost && (
          <div className={`relative rounded-[2rem] overflow-hidden group cursor-pointer h-96 lg:h-full shadow-lg transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <img
              src={IMAGES.blog[featuredPost.imageKey]}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full z-10">
              <span className="bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                {featuredPost.category}
              </span>
              <h3 className="text-white text-2xl lg:text-3xl font-display font-bold mb-3 leading-snug group-hover:underline decoration-1 underline-offset-4">
                {featuredPost.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6 line-clamp-2 max-w-md">
                {featuredPost.description}
              </p>
              <div className="flex items-center gap-3 text-white text-xs font-medium">
                <span>{featuredPost.date}</span>
                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* Other Posts */}
        <div className="flex flex-col gap-0 h-full">
          {otherPosts.map((post, index) => (
            <div
              key={post.id}
              className={`flex gap-6 group cursor-pointer h-1/3 p-4 hover:bg-gray-50 rounded-2xl transition-all duration-1000 ease-out ${
                index > 0 ? "border-t border-gray-100" : ""
              } ${
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-32 lg:w-40 h-full rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={IMAGES.blog[post.imageKey]}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center py-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-[10px] text-gray-400">{post.date}</span>
                </div>
                <h4 className="font-bold font-display text-lg lg:text-xl leading-snug mb-2 group-hover:text-primary transition-colors text-black">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

