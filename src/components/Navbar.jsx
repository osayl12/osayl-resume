import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const NAV_LINKS = [
    { label: t.ui.nav.about,      href: "#about"      },
    { label: t.ui.nav.stack,      href: "#skills"     },
    { label: t.ui.nav.experience, href: "#experience" },
    { label: t.ui.nav.projects,   href: "#projects"   },
  ];

  useGSAP(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set(navRef.current, { y: -80, opacity: 0 });
    gsap.set(".nav-link",    { opacity: 0, y: -10 });

    if (prefersReduced) return;

    gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 });
    gsap.to(".nav-link",    { opacity: 1, y: 0, stagger: 0.07, duration: 0.4, ease: "power2.out", delay: 0.5 });
  }, { scope: navRef });

  const closeMenu = () => setMenuOpen(false);

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
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link text-on-surface hover:text-primary transition-all duration-300 hover:-translate-y-0.5 text-mono-label"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-link px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 text-label-caps"
          >
            {t.ui.nav.connect}
          </a>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="nav-link flex items-center border border-outline-variant overflow-hidden text-label-caps"
            aria-label="Toggle language"
          >
            <span className={`px-3 py-2 transition-colors duration-200 ${lang === "en" ? "bg-primary text-on-primary" : "text-on-surface hover:text-primary"}`}>
              EN
            </span>
            <span className={`px-3 py-2 transition-colors duration-200 ${lang === "he" ? "bg-primary text-on-primary" : "text-on-surface hover:text-primary"}`}>
              HE
            </span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          {/* Language toggle mobile */}
          <button
            onClick={toggleLang}
            className="flex items-center border border-outline-variant overflow-hidden text-label-caps"
            aria-label="Toggle language"
          >
            <span className={`px-2 py-1 transition-colors duration-200 ${lang === "en" ? "bg-primary text-on-primary" : "text-on-surface"}`}>
              EN
            </span>
            <span className={`px-2 py-1 transition-colors duration-200 ${lang === "he" ? "bg-primary text-on-primary" : "text-on-surface"}`}>
              HE
            </span>
          </button>

          <button
            className="text-primary"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="text-on-surface hover:text-primary transition-colors text-mono-label py-2 border-b border-outline-variant"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 py-4 border border-primary text-primary text-label-caps text-center hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              {t.ui.nav.connect}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
