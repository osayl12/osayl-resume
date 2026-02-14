import React from "react";
import { content } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="card section">
      <h2>Experience</h2>

      {content.experience.map((e, index) => (
        <div key={`${e.role}-${index}`} className="experience-item">
          <div className="flex-between">
            <div className="experience-role">
              {e.role} — {e.place}
            </div>
            <div className="small">{e.period}</div>
          </div>

          <ul className="experience-list">
            {e.bullets.map((bullet, i) => (
              <li key={`${bullet}-${i}`}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
