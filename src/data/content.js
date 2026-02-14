export const content = {
  name: "Osayl Hamed",
  title: "Full-Stack Developer | DevOps Student",
  location: "Israel",
  summary:
    "Full-Stack Developer with hands-on experience designing, containerizing, and deploying scalable web applications using Docker and CI/CD pipelines. Strong foundation in backend development, system architecture, and DevOps practices. Passionate about cloud infrastructure, automation, and building production-ready systems.",

  githubUrl: "https://github.com/osayl12",
  linkedinUrl: "https://www.linkedin.com/in/osayl-hamed-641454387/",

  skills: [
    // Frontend
    "React",
    "JavaScript",
    "HTML",
    "CSS",

    // Backend
    "Node.js",
    "Express.js",
    "C#",
    "Python",
    "REST APIs",

    // Databases
    "MySQL",
    "MongoDB",

    // DevOps & Infrastructure
    "Docker",
    "Docker Compose",
    "CI/CD",
    "GitHub Actions",
    "Nginx",
    "Linux",

    // Core CS
    "OOP",
    "Data Structures",
    "Computer Networks",
    "System Analysis",

    // Mobile & IoT
    "Mobile Application Development",
    "Arduino",
    "C",
    "IoT End-to-End",
  ],

  experience: [
    {
      role: "Full-Stack & DevOps Student Developer",
      place: "Kinneret College – Academic Projects & Personal Development",
      period: "2024 - 2026",
      bullets: [
        "Developed full-stack applications using React and Node.js.",
        "Designed and implemented RESTful APIs with MySQL integration.",
        "Containerized applications using Docker and deployed through CI/CD pipelines.",
        "Worked in Linux-based environments and managed cloud-hosted services.",
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
