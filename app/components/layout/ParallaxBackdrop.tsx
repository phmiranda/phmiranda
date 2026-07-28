"use client";

import { useEffect } from "react";

export function ParallaxBackdrop() {
  useEffect(() => {
    let frame = 0;
    let currentY = window.scrollY;
    let targetY = window.scrollY;

    function updateParallax() {
      currentY += (targetY - currentY) * 0.08;

      document.documentElement.style.setProperty(
        "--parallax-y",
        currentY.toFixed(2),
      );

      if (Math.abs(targetY - currentY) > 0.1) {
        frame = window.requestAnimationFrame(updateParallax);
        return;
      }

      currentY = targetY;
      document.documentElement.style.setProperty(
        "--parallax-y",
        currentY.toFixed(2),
      );
      frame = 0;
    }

    function onScroll() {
      targetY = window.scrollY;

      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    }

    document.documentElement.style.setProperty("--parallax-y", String(currentY));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className="parallax-backdrop">
      <div className="parallax-layer parallax-layer-slow" />
      <div className="parallax-layer parallax-layer-medium" />
      <div className="parallax-grid" />
    </div>
  );
}
