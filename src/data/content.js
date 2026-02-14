export const content = {
  name: "Osayl Hamed",
  title: "Full-Stack Developer | DevOps Student",
  location: "Israel",
  summary:
    "Short self-introduction: what you do, what you’re looking for, and what you’re strong at. 2–3 lines max.",

  githubUrl: "https://github.com/osayl12",
  linkedinUrl: "https://www.linkedin.com/in/osayl-hamed-641454387/",

  skills: [
    "React",
    "Node.js",
    "Docker",
    "Docker Compose",
    "GitHub Actions",
    "MySQL",
    "Linux",
  ],

  experience: [
    {
      role: "Student / Junior Developer",
      place: "College / Company",
      period: "2024 - 2026",
      bullets: [
        "Built web applications with React + Node.js.",
        "Worked with databases (MySQL) and REST APIs.",
        "Containerized apps using Docker and deployed to cloud.",
      ],
    },
  ],

  projects: [
    {
      name: "Blood Pressure Monitoring System",
      description:
        "Full-stack health monitoring application built with Node.js and MySQL. Allows user management, blood pressure tracking, historical analysis, and monthly summary reports. Includes Dockerized deployment, CI/CD pipeline, Swagger API documentation, security middleware (Helmet + CORS), and data visualization with Chart.js.",
      liveUrl: "https://pressurecheck.duckdns.org/",
      repoUrl: "https://github.com/osayl12/blood_pressure",
      tags: [
        "Node.js",
        "Express",
        "MySQL",
        "Docker",
        "CI/CD",
        "Swagger",
        "Chart.js",
      ],
    },

    {
      name: "Velocity Viper",
      description:
        "A fully functional retro-style 2D browser racing game built with HTML, CSS, and Vanilla JavaScript. Features include real-time collision detection, fuel and health systems, power-ups, animated environments, audio controls, and persistent score tracking via localStorage. The project is containerized using Docker, served with Nginx, and includes a CI pipeline with GitHub Actions, demonstrating both frontend game logic and DevOps deployment skills.",
      liveUrl: "https://velocityviper.duckdns.org/menugame/menu.html",
      repoUrl: "https://github.com/osayl12/VelocityViper",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Docker",
        "Nginx",
        "GitHub Actions",
      ],
    },
  ],
};
