import { content } from "../data/content";
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <a
              className="badge primary"
              href={content.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              className="badge"
              href={content.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img className="profile" src={profileImg} alt="Osayl Hamed" />
        </div>
      </div>
    </section>
  );
}
