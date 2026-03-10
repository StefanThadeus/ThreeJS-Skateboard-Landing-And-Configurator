"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export function SlideIn({ children, delay = 0, duration = 0.6 }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: true,
        },
      },
    );
  }, [delay, duration]);

  return (
    <div ref={elementRef} className="slide-in-hidden">
      {children}
    </div>
  );
}
