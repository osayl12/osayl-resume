import { content } from "../data/content";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-4 md:px-16 max-w-[1440px] mx-auto pt-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 border-l-2 border-primary pl-8 md:pl-10 py-12">
          <p className="text-label-caps text-primary mb-6">
            ESTABLISHED 2024 / ARCHITECTING DIGITAL SYSTEMS
          </p>
          <h1 className="text-headline-xl leading-none uppercase mb-8">
            System Architect
            <br />
            <span className="text-secondary">{content.name}</span>
          </h1>
          <p className="text-body-lg max-w-2xl text-on-surface-variant mb-12">
            {content.summary}
          </p>
          <div className="flex gap-6 flex-wrap">
            <a
              href="#projects"
              className="px-10 py-4 border border-primary text-primary text-label-caps hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              EXPLORE WORK
            </a>
            <a
              href="#skills"
              className="px-10 py-4 border border-secondary text-secondary text-label-caps hover:bg-secondary hover:text-on-secondary transition-all duration-300"
            >
              THE STACK
            </a>
          </div>
        </div>

        <div className="hidden md:flex col-span-4 justify-end items-end pb-12">
          <div className="w-full h-[500px] neon-border-purple p-2 grayscale hover:grayscale-0 transition-all duration-500">
            <img
              className="w-full h-full object-cover"
              src={profileImg}
              alt={content.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
