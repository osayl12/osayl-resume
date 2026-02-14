import { content } from "../data/content";
import React from "react";

export default function Footer() {
  return (
    <section id="contact" className="footer">
      <div>Contact: hamedosayl@gmail.com</div>
      <div>
        <a href={content.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {" · "}
        <a href={content.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
