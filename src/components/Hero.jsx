import React from "react";
import { content } from "../data/content";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="about" className="card">
      <div className="grid2">
        <div>
          <h1>{content.name}</h1>
          <p className="small">
            {content.title} · {content.location}
          </p>
          <p>{content.summary}</p>

          <div className="badges" style={{ marginTop: 16 }}>
            <a
              className="badge primary"
              href={content.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            <a
              className="badge"
              href={content.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img className="profile" src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
