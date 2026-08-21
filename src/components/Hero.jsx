import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { lazy, Suspense } from "react";
import { useLanguage } from "../context/LanguageContext";
import profileImg from "../assets/profile.jpg";

const HeroScene = lazy(() => import("./HeroScene"));

gsap.registerPlugin(useGSAP);

function ScrambleText({ text, className, delay = 0 }) {
  const ref = useRef(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^";

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      el.textContent = text;
      el.style.opacity = "1";
      return;
    }

    let startTime = null;
    const duration = 800;
    let rafId;

    const frame = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const revealed = Math.floor(progress * text.length);
      el.textContent = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < revealed) return ch;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      if (progress < 1) rafId = requestAnimationFrame(frame);
    };

    const timeout = setTimeout(() => {
      el.style.opacity = "1";
      rafId = requestAnimationFrame(frame);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [text]);

  return <span ref={ref} className={className} style={{ opacity: 0 }} aria-label={text} />;
}

export default function Hero() {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(".hero-label", { opacity: 0, y: -24 });
      gsap.set(".hero-sub",   { opacity: 0, y: 40 });
      gsap.set(".hero-btn",   { opacity: 0, y: 20 });
      gsap.set(".hero-photo", { opacity: 0, x: 40 });

      if (prefersReduced) return;

      gsap.to(".hero-label", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2 });
      gsap.to(".hero-sub",   { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.9 });
      gsap.to(".hero-btn",   { opacity: 1, y: 0, stagger: 0.12, duration: 0.5, ease: "power2.out", delay: 1.1 });
      gsap.to(".hero-photo", { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.6 });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      <div
        ref={containerRef}
        className="relative z-10 px-4 md:px-16 max-w-[1440px] mx-auto w-full pt-24"
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="order-2 md:order-1 col-span-12 md:col-span-8 border-l-2 border-primary pl-8 md:pl-10 py-12">
            <p className="hero-label text-label-caps text-primary mb-6">
              {t.ui.hero.label}
            </p>

            <h1 className="text-headline-xl leading-none uppercase mb-8">
              <ScrambleText
                text={t.ui.hero.title}
                className="block"
                delay={300}
              />
              <ScrambleText
                text={t.name}
                className="block text-secondary"
                delay={600}
              />
            </h1>

            <p className="hero-sub text-body-lg max-w-2xl text-on-surface-variant mb-12">
              {t.summary}
            </p>

            <div className="flex gap-6 flex-wrap">
              <a
                href="#projects"
                className="hero-btn px-10 py-4 border border-primary text-primary text-label-caps hover:bg-primary hover:text-on-primary transition-all duration-300"
              >
                {t.ui.hero.exploreWork}
              </a>
              <a
                href="#skills"
                className="hero-btn px-10 py-4 border border-secondary text-secondary text-label-caps hover:bg-secondary hover:text-on-secondary transition-all duration-300"
              >
                {t.ui.hero.theStack}
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 col-span-12 md:col-span-4 flex justify-center md:justify-end items-center md:items-end pt-8 md:pt-0 pb-6 md:pb-12">
            <div className="hero-photo w-40 h-40 md:w-full md:h-[500px] neon-border-purple p-2 grayscale hover:grayscale-0 transition-all duration-500">
              <img
                className="w-full h-full object-cover"
                src={profileImg}
                alt={t.name}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
