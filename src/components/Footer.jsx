import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { content } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const contactRef = useRef(null);

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
              Initiate
              <br />
              <span className="text-primary">Contact</span>
            </h2>
            <p className="contact-body text-body-lg text-on-surface-variant max-w-md">
              Open to opportunities, collaborations, and interesting conversations.
            </p>
          </div>

          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            <a
              href={`mailto:${content.email}`}
              className="contact-action w-full py-6 border border-primary bg-transparent text-primary text-label-caps text-center hover:bg-primary hover:text-on-primary transition-all duration-300 block"
            >
              SEND TRANSMISSION → {content.email}
            </a>
            <div className="contact-action flex gap-8 justify-center">
              <a
                href={content.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-on-surface-variant hover:text-primary transition-all text-mono-label"
              >
                GitHub
              </a>
              <a
                href={content.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-on-surface-variant hover:text-primary transition-all text-mono-label"
              >
                LinkedIn
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
            © {new Date().getFullYear()} Osayl Hamed. Engineered for the Future.
          </p>
          <div className="flex gap-8">
            <a href={content.githubUrl} target="_blank" rel="noreferrer"
              className="text-on-surface-variant hover:text-tertiary hover:drop-shadow-[0_0_8px_#58ffaa] transition-all text-mono-label">
              GitHub
            </a>
            <a href={content.linkedinUrl} target="_blank" rel="noreferrer"
              className="text-on-surface-variant hover:text-tertiary hover:drop-shadow-[0_0_8px_#58ffaa] transition-all text-mono-label">
              LinkedIn
            </a>
            <a href={`mailto:${content.email}`}
              className="text-on-surface-variant hover:text-tertiary hover:drop-shadow-[0_0_8px_#58ffaa] transition-all text-mono-label">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
