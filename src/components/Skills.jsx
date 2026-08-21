import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const categoryConfig = {
  Languages:          { icon: "terminal",     accent: "cyan"   },
  Frontend:           { icon: "layers",       accent: "purple" },
  Backend:            { icon: "api",          accent: "cyan"   },
  Databases:          { icon: "database",     accent: "purple" },
  DevOps:             { icon: "cloud_sync",   accent: "cyan"   },
  "Computer Science": { icon: "architecture", accent: "purple" },
  "AI Tools":         { icon: "smart_toy",    accent: "cyan"   },
};

export default function Skills() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(".skills-header", { opacity: 0, x: -50 });
      gsap.set(".skill-card",    { opacity: 0, y: 60 });

      if (prefersReduced) return;

      gsap.to(".skills-header", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        opacity: 1, x: 0, duration: 0.6, ease: "power2.out",
      });

      gsap.to(".skill-card", {
        scrollTrigger: { trigger: ".skill-card", start: "top 88%" },
        opacity: 1, y: 0, stagger: 0.1, duration: 0.55, ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-4 md:px-16 max-w-[1440px] mx-auto"
    >
      <div className="border border-outline-variant p-8 md:p-20">
        <h2 className="skills-header text-label-caps text-secondary mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-secondary inline-block" />
          {t.ui.skills.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(t.skills).map(([category, skills]) => {
            const { icon, accent } = categoryConfig[category] ?? { icon: "code", accent: "cyan" };
            const isCyan    = accent === "cyan";
            const textCls   = isCyan ? "text-primary"          : "text-secondary";
            const borderCls = isCyan ? "border-primary"        : "border-secondary";
            const hoverCls  = isCyan ? "hover:border-primary"  : "hover:border-secondary";
            const label     = t.ui.skills.categories[category] ?? category;

            return (
              <div
                key={category}
                className={`skill-card p-8 border border-outline-variant ${hoverCls} transition-colors`}
              >
                <span className={`material-symbols-outlined ${textCls} text-4xl mb-6 block`}>
                  {icon}
                </span>
                <h3 className="text-headline-md mb-4 uppercase">{label}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-mono-label px-2 py-1 border ${borderCls} ${textCls}`}
                    >
                      {skill.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
