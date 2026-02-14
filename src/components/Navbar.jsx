import React from "react";
export default function Navbar() {
  return (
    <div className="nav">
      <div style={{ fontWeight: 700 }}>Resume</div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
