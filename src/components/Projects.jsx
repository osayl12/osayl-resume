import { content } from "../data/content";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  const total = String(content.projects.length).padStart(2, "0");

  return (
    <section id="projects" className="py-24 px-4 md:px-16 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-end mb-16 flex-wrap gap-4">
        <div>
          <h2 className="text-headline-lg uppercase">Selected Artifacts</h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            Experimental builds and production systems.
          </p>
        </div>
        <div className="hidden md:block text-mono-label text-outline">
          [ SHOWING {total} / {total} ]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.projects.map((p, i) => {
          const isCyan = i % 2 === 0;
          const borderClass = isCyan ? "neon-border-cyan glow-hover-cyan" : "neon-border-purple glow-hover-purple";
          const accentText = isCyan ? "text-primary" : "text-secondary";
          const accentBorder = isCyan ? "border-primary" : "border-secondary";
          const hoverBg = isCyan
            ? "hover:bg-primary hover:text-on-primary"
            : "hover:bg-secondary hover:text-on-secondary";

          return (
            <div
              key={p.name}
              className={`${borderClass} transition-all duration-300 flex flex-col p-8 md:p-10 gap-6 ${i === 1 ? "md:mt-12" : ""}`}
            >
              <div>
                <span className={`text-label-caps ${accentText} block mb-3`}>
                  0{i + 1} / PROJECT
                </span>
                <h3 className="text-headline-md uppercase mb-3">{p.name}</h3>
                <p className="text-body-md text-on-surface-variant">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-mono-label px-2 py-1 border ${accentBorder} ${accentText}`}
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 border ${accentBorder} ${accentText} ${hoverBg} transition-all duration-300 text-label-caps`}
                >
                  <FaGithub />
                  GITHUB
                </a>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 border ${accentBorder} ${accentText} ${hoverBg} transition-all duration-300 text-label-caps`}
                >
                  <FaArrowUpRightFromSquare />
                  LIVE DEMO
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
