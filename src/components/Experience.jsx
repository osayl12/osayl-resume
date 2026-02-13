import { content } from "../data/content";
import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="card" style={{ marginTop: 16 }}>
      <h2>Experience</h2>
      {content.experience.map((e) => (
        <div key={e.role} style={{ marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <div style={{ fontWeight: 700 }}>{e.role} — {e.place}</div>
            <div className="small">{e.period}</div>
          </div>
          <ul style={{ marginTop: 8 }}>
            {e.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
