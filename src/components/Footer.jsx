import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const contactRef = useRef(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(".contact-headline", { opacity: 0, y: 50 });
      gsap.set(".contact-body",     { opacity: 0, y: 30 });
      gsap.set(".contact-action",   { opacity: 0, y: 20 });

      if (prefersReduced) return;

      gsap.to(".contact-headline", {
        scrollTrigger: { trigger: contactRef.current, start: "top 85%" },
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      });
      gsap.to(".contact-body", {
        scrollTrigger: { trigger: contactRef.current, start: "top 82%" },
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.15,
      });
      gsap.to(".contact-action", {
        scrollTrigger: { trigger: contactRef.current, start: "top 80%" },
        opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out", delay: 0.25,
      });
    },
    { scope: contactRef }
  );

  return (
    <>
      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-24 px-4 md:px-16 max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border border-primary p-8 md:p-12">
          <div className="lg:col-span-7">
            <h2 className="contact-headline text-headline-xl leading-none uppercase mb-6">
              {t.ui.contact.headline1}
              <br />
              <span className="text-primary">{t.ui.contact.headline2}</span>
            </h2>
            <p className="contact-body text-body-lg text-on-surface-variant max-w-md">
              {t.ui.contact.body}
            </p>
          </div>

          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            <a
              href={`mailto:${t.email}`}
              className="contact-action w-full py-6 border border-primary bg-transparent text-primary text-label-caps text-center hover:bg-primary hover:text-on-primary transition-all duration-300 block"
            >
              {t.ui.contact.send} {t.email}
            </a>
            <div className="contact-action flex gap-8 justify-center">
              <a
                href={t.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-on-surface-variant hover:text-primary transition-all text-mono-label"
              >
                {t.ui.contact.github}
              </a>
              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-on-surface-variant hover:text-primary transition-all text-mono-label"
              >
                {t.ui.contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <footer className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-6 max-w-[1440px] mx-auto">
          <span className="text-headline-md text-primary font-bold">OSAYL.RESUME</span>
          <p className="text-body-md text-on-surface-variant">
            © {new Date().getFullYear()} {t.name}. {t.ui.footer.tagline}
          </p>
          <div className="flex gap-8">
            <a href={t.githubUrl} target="_blank" rel="noreferrer"
              className="text-on-surface-variant hover:text-tertiary hover:drop-shadow-[0_0_8px_#58ffaa] transition-all text-mono-label">
              {t.ui.footer.github}
            </a>
            <a href={t.linkedinUrl} target="_blank" rel="noreferrer"
              className="text-on-surface-variant hover:text-tertiary hover:drop-shadow-[0_0_8px_#58ffaa] transition-all text-mono-label">
              {t.ui.footer.linkedin}
            </a>
            <a href={`mailto:${t.email}`}
              className="text-on-surface-variant hover:text-tertiary hover:drop-shadow-[0_0_8px_#58ffaa] transition-all text-mono-label">
              {t.ui.footer.email}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
