"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let lenisInstance: Lenis | null = null;
    
    // Get Lenis instance from window if available
    const getLenis = () => {
      if (typeof window !== "undefined") {
        // Try to get Lenis from a global store or create a new instance
        const lenis = (window as any).lenis;
        if (lenis) return lenis;
      }
      return null;
    };

    const handleScroll = (e: any) => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );
      
      // Apply parallax transform
      const translateY = (scrollProgress - 0.5) * speed * 100;
      setTransform(translateY);
    };

    // Try to get existing Lenis instance
    lenisInstance = getLenis();
    
    if (lenisInstance) {
      lenisInstance.on("scroll", handleScroll);
    } else {
      // Fallback to window scroll
      window.addEventListener("scroll", handleScroll);
      handleScroll({ scroll: window.scrollY });
    }

    return () => {
      if (lenisInstance) {
        lenisInstance.off("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [speed]);

  return { ref: elementRef, transform };
}

export function useScrollReveal() {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

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
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref: elementRef, isVisible };
}
