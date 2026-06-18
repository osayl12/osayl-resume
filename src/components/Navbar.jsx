import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { content } from "../data/content";

export default function Navbar() {
  const navRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set(navRef.current, { y: -80, opacity: 0 });
    gsap.set(".nav-link",    { opacity: 0, y: -10 });

    if (prefersReduced) return;

    gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 });
    gsap.to(".nav-link",    { opacity: 1, y: 0, stagger: 0.07, duration: 0.4, ease: "power2.out", delay: 0.5 });
  }, { scope: navRef });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/20 shadow-[0_0_20px_rgba(0,217,255,0.15)]"
    >
      <div className="flex justify-between items-center px-4 md:px-16 py-4 max-w-[1440px] mx-auto transition-all duration-300">
        <span className="nav-link text-headline-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary cursor-pointer select-none">
          OSAYL.RESUME
        </span>

        <div className="hidden md:flex gap-8 items-center">
          {["About", "Stack", "Experience", "Projects"].map((label, i) => (
            <a
              key={label}
              href={`#${label === "Stack" ? "skills" : label.toLowerCase()}`}
              className="nav-link text-on-surface hover:text-primary transition-all duration-300 hover:-translate-y-0.5 text-mono-label"
            >
              {label}
            </a>
          ))}
          <a
            href={`mailto:${content.email}`}
            className="nav-link px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 text-label-caps"
          >
            Connect
          </a>
        </div>

        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
