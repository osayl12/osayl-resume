import { content } from "../data/content";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="card" style={{ marginTop: 16 }}>
      <h2>Projects</h2>

      <div style={{ display: "grid", gap: 12 }}>
        {content.projects.map((p) => (
          <div key={p.name} className="project">
            <h3 className="project-title">{p.name}</h3>
            <div className="small">{p.description}</div>

            <div className="badges">
              {p.tags.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="links">
              <a
                className="badge"
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Click To Github repositorie
              </a>
              <a
                className="badge"
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Click To Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
