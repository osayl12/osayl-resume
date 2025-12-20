const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js",
  "MongoDB", "SQL", "Docker", "Linux", "GitHub Actions"
];

function Skills() {
  return (
    <section id="skills" className="card">
      <h2>Skills</h2>

      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
