import { content } from "../data/content";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/20 shadow-[0_0_20px_rgba(0,217,255,0.15)]">
      <div className="flex justify-between items-center px-4 md:px-16 py-4 max-w-[1440px] mx-auto transition-all duration-300">
        <span className="text-headline-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary cursor-pointer select-none">
          OSAYL.RESUME
        </span>

        <div className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface hover:text-primary transition-all duration-300 hover:-translate-y-0.5 text-mono-label" href="#about">About</a>
          <a className="text-on-surface hover:text-primary transition-all duration-300 hover:-translate-y-0.5 text-mono-label" href="#skills">Stack</a>
          <a className="text-on-surface hover:text-primary transition-all duration-300 hover:-translate-y-0.5 text-mono-label" href="#experience">Experience</a>
          <a className="text-on-surface hover:text-primary transition-all duration-300 hover:-translate-y-0.5 text-mono-label" href="#projects">Projects</a>
          <a
            href={`mailto:${content.email}`}
            className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 text-label-caps"
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
