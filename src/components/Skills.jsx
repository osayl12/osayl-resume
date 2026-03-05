import { content } from "../data/content";
import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiNginx,
  SiGithubactions
} from "react-icons/si";

import { DiDotnet } from "react-icons/di";

const icons = {
  React: <FaReact />,
  JavaScript: <SiJavascript />,
  "Node.js": <FaNodeJs />,
  Docker: <FaDocker />,
  Python: <FaPython />,
  Git: <FaGitAlt />,
  Linux: <FaLinux />,
  "C#": <DiDotnet />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Nginx: <SiNginx />,
  "GitHub Actions": <SiGithubactions />
};

export default function Skills() {
  return (
    <section id="skills" className="card" style={{ marginTop: 16 }}>
      <h2>Skills</h2>

      {Object.entries(content.skills).map(([category, skills]) => (
        <div key={category} style={{ marginBottom: 16 }}>
          <h3 style={{ marginBottom: 8, fontSize: 16, opacity: 0.8 }}>
            {category}
          </h3>

          <div className="badges">
            {skills.map((skill) => (
              <span key={skill} className="badge">
                {icons[skill] && (
                  <span className="icon">{icons[skill]}</span>
                )}
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}