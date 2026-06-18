import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { content } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(".exp-header", { opacity: 0, y: -30 });
      gsap.set(".exp-card",   { opacity: 0, x: -70 });

      if (prefersReduced) return;

      gsap.to(".exp-header", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      });

      gsap.to(".exp-card", {
        scrollTrigger: { trigger: ".exp-card", start: "top 88%" },
        opacity: 1, x: 0, stagger: 0.15, duration: 0.65, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 px-4 md:px-16 max-w-[1440px] mx-auto"
    >
      <div className="exp-header flex justify-between items-end mb-16 flex-wrap gap-4">
        <div>
          <h2 className="text-headline-lg uppercase">Work History</h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            Engineering experience and personal development.
          </p>
        </div>
        <div className="text-mono-label text-outline hidden md:block">
          [ {String(content.experience.length).padStart(2, "0")} ENTRIES ]
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {content.experience.map((e, i) => (
          <div
            key={`${e.role}-${i}`}
            className="exp-card border border-outline-variant p-8 md:p-10 hover:border-primary transition-colors"
          >
            <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
              <div>
                <span className="text-label-caps text-primary block mb-2">
                  0{i + 1} / EXPERIENCE
                </span>
                <h3 className="text-headline-md uppercase">{e.role}</h3>
                <p className="text-body-md text-on-surface-variant mt-1">{e.place}</p>
              </div>
              <span className="text-mono-label text-outline border border-outline-variant px-4 py-2">
                {e.period}
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {e.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="flex items-start gap-4 text-body-md text-on-surface-variant"
                >
                  <span className="text-primary mt-1 shrink-0">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
