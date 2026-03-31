"use client";

import clsx from "clsx";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  foregroundImage: string;
  backgroundImage: string;
  className?: string;
};

export function ParallaxImage({
  foregroundImage,
  backgroundImage,
  className,
}: Props) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const foreground = foregroundRef.current;

    if (!background || !foreground) return;

    const moveBackgroundX = gsap.quickTo(background, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    const moveBackgroundY = gsap.quickTo(background, "y", {
      duration: 0.6,
      ease: "power3.out",
    });
    const moveForegroundX = gsap.quickTo(foreground, "x", {
      duration: 0.9,
      ease: "power3.out",
    });
    const moveForegroundY = gsap.quickTo(foreground, "y", {
      duration: 0.9,
      ease: "power3.out",
    });

    function onMouseMove(event: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const xPercent = (event.clientX / innerWidth - 0.5) * 2;
      const yPercent = (event.clientY / innerHeight - 0.5) * 2;
      const x = xPercent * -20;
      const y = yPercent * -20;

      moveBackgroundX(x);
      moveBackgroundY(y);
      moveForegroundX(x * 2.5);
      moveForegroundY(y * 2.5);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.killTweensOf(background);
      gsap.killTweensOf(foreground);
    };
  }, []);

  return (
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
      <div ref={backgroundRef} className="col-start-1 row-start-1">
        <Image
          src={backgroundImage}
          alt=""
          className="w-11/12"
          width={600}
          height={600}
        />
      </div>

      <div
        ref={foregroundRef}
        className="col-start-1 row-start-1 h-full w-full place-items-center"
      >
        <Image
          src={foregroundImage}
          alt=""
          className="h-full max-h-[500px] w-auto"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
