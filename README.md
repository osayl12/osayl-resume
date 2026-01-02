# Osayl Resume Site (React) — CI/CD to Oracle Cloud

Personal resume website built with **React + CSS**, containerized with **Docker (Nginx)**, deployed to **Oracle Cloud Ubuntu VM (ARM64)** using **GitHub Actions CI/CD** + **SSH**, with **Cron** automation on the server.

---

## Tech Stack
- **Frontend:** React, JavaScript, CSS
- **DevOps:** Docker, GitHub Actions (CI/CD)
- **Cloud:** Oracle Cloud (Ubuntu VM)
- **Automation:** Cron jobs (healthcheck + Docker cleanup)

---

## Live Demo
- `http://151.145.93.131`  


---

## Project Structure
```text
src/
  components/
    Header.jsx
    About.jsx
    Projects.jsx
    Skills.jsx
    DevOps.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  styles/
    app.css
.github/workflows/
  main.yml        # CI
  cd-deploy.yml   # CD
Dockerfile
.dockerignore
