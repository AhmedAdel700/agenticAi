"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorRef2 = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const speed = 0.2;

  useEffect(() => {
    let isMounted = true;
    let rafId: number;

    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const animate = () => {
      if (!isMounted) return;
      pos.current.x += (target.current.x - pos.current.x) * speed;
      pos.current.y += (target.current.y - pos.current.y) * speed;

      const x = pos.current.x;
      const y = pos.current.y;

      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (cursorRef2.current)
        cursorRef2.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    // Hover detection logic remains the same
    const interactiveElements = document.querySelectorAll("a, button, [data-cursor='hover']");
    const addHover = () => { cursorRef.current?.classList.add("hover"); cursorRef2.current?.classList.add("hover"); };
    const removeHover = () => { cursorRef.current?.classList.remove("hover"); cursorRef2.current?.classList.remove("hover"); };
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor__cursor"></div>
      <div ref={cursorRef2} className="custom-cursor__cursor-two"></div>
    </>
  );
}
