import { content } from "../data/content";
import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="card" style={{ marginTop: 16 }}>
      <h2>Projects</h2>

      <div style={{ display: "grid", gap: 12 }}>
        {content.projects.map((p) => (
          <div key={p.name} className="project">
            <div style={{ fontWeight: 800, fontSize: 18 }}>{p.name}</div>
            <div className="small">{p.description}</div>

            <div className="badges">
              {p.tags.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>

            <div className="links">
              <a className="badge" href={p.repoUrl} target="_blank" rel="noreferrer">Repo</a>
              <a className="badge" href={p.liveUrl} target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
