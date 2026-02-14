import { content } from "../data/content";
import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="card" style={{ marginTop: 16 }}>
      <h2>Skills</h2>
      <div className="badges">
        {content.skills.map((s) => (
          <span key={s} className="badge">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
