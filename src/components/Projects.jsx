import carGame from "../assets/carGame.png";
import bloodPressure from "../assets/bloodPressure.png";
import clock from "../assets/Clock.png";

const projects = [
  {
    title: "Velocity Viper",
    image: carGame,
    desc: "Driving survival game with keyboard & joystick.",
    stack: "JavaScript, HTML, CSS"
  },
  {
    title: "Blood Pressure Monitoring",
    image: bloodPressure,
    desc: "Medical monitoring system with alerts.",
    stack: "Node.js, SQL"
  },
  {
    title: "Attendance Clock",
    image: clock,
    desc: "Employee check-in/out system.",
    stack: "Node.js, SQL"
  }
];


function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>

         <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card" key={p.title}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span>{p.stack}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
