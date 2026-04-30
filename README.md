# Osayl Hamed — Portfolio

Personal portfolio website built with **React 19 + Vite**, fully containerized with **Docker**, deployed automatically via **GitHub Actions CI/CD**, and running on **Oracle Cloud**.

**Live:** https://osayl-portfolio.duckdns.org/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 7 |
| Styling | Vanilla CSS (dark mode, animations) |
| Icons | react-icons |
| Containerization | Docker, Nginx (multi-stage build) |
| CI/CD | GitHub Actions |
| Registry | Docker Hub |
| Hosting | Oracle Cloud VM (Ubuntu) |
| DNS | DuckDNS |

---

## CI/CD Pipeline

Every push to `main` triggers an automated pipeline:

1. Install dependencies (`npm ci`)
2. Build production bundle (`vite build`)
3. Build multi-arch Docker image (`amd64` + `arm64`)
4. Push image to Docker Hub → `osayl1997/osayl-portfolio:latest`
5. SSH into Oracle VM
6. Pull latest image and restart container via Docker Compose

---

## Run Locally

**With Docker:**

```bash
docker compose up -d
```

Open http://localhost:8080

**With Node (dev mode):**

```bash
npm install
npm run dev
```

---

## Project Structure

```
src/
├── components/     # Navbar, Hero, Skills, Experience, Projects, Footer
├── data/
│   └── content.js  # All portfolio content (single source of truth)
├── assets/         # Profile image
├── App.jsx
└── styles.css      # Full CSS — tokens, dark mode, animations
```

---

## Docker Image

```bash
docker pull osayl1997/osayl-portfolio:latest
```

---

## Infrastructure

- **Cloud:** Oracle Cloud Infrastructure (free tier VM)
- **OS:** Ubuntu
- **Web server:** Nginx (serving Vite static build)
- **Deployment:** SSH from GitHub Actions → `docker compose up -d --pull always`
