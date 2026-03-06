"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLocale } from "next-intl";


type AnimatedTitleProps = {
  children: React.ReactNode;
  animationStyle?: "style1" | "style2" | "style3";
  className?: string;
};

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({
  children,
  animationStyle = "style2",
}: AnimatedTitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const isArabic = locale === 'ar';

  useEffect(() => {
    if (!titleRef.current) return;

    const quote = titleRef.current;
    const splitType = isArabic ? "lines,words" : "lines,words,chars";
    const split = new SplitText(quote, { type: splitType, linesClass: "split-line" });
    const targets = isArabic ? split.words : split.chars;

    gsap.set(quote, { perspective: 400 });

    switch (animationStyle) {
      case "style1":
        gsap.set(targets, { opacity: 0, y: "90%", rotateX: "-40deg" });
        break;
      case "style2":
        gsap.set(targets, { opacity: 0, x: isArabic ? 20 : 50 });
        break;
      case "style3":
        gsap.set(targets, { opacity: 0 });
        break;
    }

    const animation = gsap.to(targets, {
      scrollTrigger: {
        trigger: quote,
        start: "top 90%",
        toggleActions: "play none none none", // Only play once
      },
      x: 0,
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration: isArabic ? 0.8 : 1.2,
      ease: "power2.out",
      stagger: isArabic ? 0.04 : 0.02,
    });

    return () => {
      animation.kill();
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      split.revert();
    };
  }, [animationStyle, locale]);

  return (
    <div ref={titleRef}>
      {children}
    </div>
  );
}
