import { content } from "../data/content";

export default function Hero() {
  return (
    <section id="about" className="card">
      <div className="grid2">
        <div>
          <h1>{content.name}</h1>
          <p className="small">{content.title} · {content.location}</p>
          <p>{content.summary}</p>

          <div className="badges" style={{ marginTop: 10 }}>
            <a className="badge" href={content.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="badge" href={content.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* שים תמונה בשם profile.jpg בתוך src/assets */}
          <img className="profile" src="/src/assets/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}
