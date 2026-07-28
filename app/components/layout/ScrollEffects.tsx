"use client";

import { useEffect, useState } from "react";

const SECTION_SELECTOR = "main > section";
let activeScrollFrame = 0;

function animateScrollTo(destination: number, duration = 850) {
  if (activeScrollFrame) {
    window.cancelAnimationFrame(activeScrollFrame);
  }

  const start = window.scrollY;
  const distance = destination - start;
  const startTime = performance.now();

  const easeInOutCubic = (progress: number) =>
    progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, start + distance * easeInOutCubic(progress));

    if (progress < 1) {
      activeScrollFrame = window.requestAnimationFrame(animate);
    } else {
      activeScrollFrame = 0;
    }
  };

  activeScrollFrame = window.requestAnimationFrame(animate);
}

export function ScrollEffects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(SECTION_SELECTOR),
    );

    sections.forEach((section) => section.classList.add("section-transition"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      {
        rootMargin: "-8% 0px -12%",
        threshold: 0.12,
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector<HTMLElement>(targetId);
      if (!target) return;

      event.preventDefault();
      const headerOffset = 20;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      animateScrollTo(targetPosition);

      window.history.replaceState(null, "", targetId);
    };

    const handleScroll = () => setIsVisible(window.scrollY > 420);

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScrollTo(0);
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <button
      type="button"
      className={`back-to-top ${isVisible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Retornar ao início da página"
      title="Voltar ao início"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
