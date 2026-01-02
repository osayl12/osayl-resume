export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "SQL",
    "MongoDB",
    "Docker",
    "GitHub Actions",
    "Linux",
    "Oracle Cloud",
    "SSH",
    "Cron",
  ];

  return (
    <section id="skills" className="card">
      <h2>Skills</h2>
      <div className="chips">
        {skills.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
