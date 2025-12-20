import carGame from "../assets/carGame.png";
import bloodPressure from "../assets/bloodPressure.png";
import clock from "../assets/Clock.png";

function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>

      <article className="project">
        <img src={carGame} alt="Car Game" />
        <h3>Velocity Viper</h3>
        <p>Driving survival game with keyboard / joystick control.</p>
        <p><strong>Stack:</strong> HTML, CSS, JavaScript, Arduino</p>
      </article>

      <article className="project">
        <img src={bloodPressure} alt="Blood Pressure" />
        <h3>Blood Pressure Monitor</h3>
        <p>Medical data monitoring with abnormal value highlighting.</p>
        <p><strong>Stack:</strong> Node.js, SQL, HTML, CSS</p>
      </article>

      <article className="project">
        <img src={clock} alt="Attendance Clock" />
        <h3>Attendance Clock</h3>
        <p>Employee check-in/out system with history tracking.</p>
        <p><strong>Stack:</strong> Node.js, SQL, JavaScript</p>
      </article>
    </section>
  );
}

export default Projects;
