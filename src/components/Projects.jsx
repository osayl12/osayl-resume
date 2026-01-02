const projects = [
  {
    title: "Blood Pressure Monitoring",
    stack: "Node.js · SQL · REST · Swagger",
    github: "https://github.com/osayl12/blood_pressure",
    highlights: ["SQL schema + DB module", "API structure (routers/middleware)", "Swagger documentation"],
  },
  {
    title: "AttendanceClock",
    stack: "Node.js · SQL/SQLite",
    github: "https://github.com/osayl12/AttendanceClock",
    highlights: ["Attendance check-in/out flow", "Database file included", "Node app structure"],
  },
  {
    title: "Velocity Viper",
    stack: "JavaScript · HTML · CSS",
    github: "https://github.com/osayl12/VelocityViper",
    highlights: ["Arcade driving game", "Game logic + UI"],
  },
  {
    title: "Locking System",
    stack: "Embedded / Electronics",
    github: "https://github.com/osayl12/Locking-System",
    highlights: ["Hardware-oriented project", "Display/segment adjustments documented"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p) => (
          <article key={p.github} className="project">
            <div className="project-head">
              <h3>{p.title}</h3>
              <a className="link" href={p.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>

            <div className="badge">{p.stack}</div>

            <ul className="list">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
