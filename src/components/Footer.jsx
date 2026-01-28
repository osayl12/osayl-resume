import { content } from "../data/content";

export default function Footer() {
  return (
    <section id="contact" className="footer">
      <div>Contact: add your email here</div>
      <div>
        <a href={content.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        {" · "}
        <a href={content.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
