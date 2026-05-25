"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX - 16) * 0.12;
      ringY += (mouseY - ringY - 16) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.borderColor = "rgba(255, 122, 0, 0.8)";
      dot.style.opacity = "0";
    };

    const onMouseLeaveLink = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(255, 122, 0, 0.5)";
      dot.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button, [data-cursor]");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden lg:block"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden lg:block"
        style={{ transform: "translateZ(0)" }}
      />
    </>
  );
}
