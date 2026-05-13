import { content } from "../data/content";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <section id="contact" className="card footer">
      <h2>Get In Touch</h2>
      <p>
        Open to opportunities, collaborations, and interesting conversations.
      </p>

      <div className="footer-links">
        <a className="badge primary" href={`mailto:${content.email}`}>
          <FaEnvelope />
          Email Me
        </a>
        <a className="badge" href={content.githubUrl} target="_blank" rel="noreferrer">
          <FaGithub />
          GitHub
        </a>
        <a className="badge" href={content.linkedinUrl} target="_blank" rel="noreferrer">
          <FaLinkedin />
          LinkedIn
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Osayl Hamed · Built with React & Vite
      </p>
    </section>
  );
}
