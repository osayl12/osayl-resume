# Portfolio / CV 

Personal portfolio website built with **React + Vite**, fully
containerized with **Docker**, deployed automatically using **GitHub
Actions (CI/CD)** and running on **Oracle Cloud VM**.

## 🌍 Live Website

🔗 https://osayl-portfolio.duckdns.org/

Hosted on: - Oracle Cloud (Ubuntu VM) - DuckDNS subdomain - Docker +
Nginx

---

## 🛠 Tech Stack

- React 19 + Vite
- Docker & Docker Compose
- Nginx (static build serving)
- GitHub Actions (CI/CD pipeline)
- Docker Hub (image registry)
- Oracle Cloud Infrastructure (deployment)
- DuckDNS (subdomain & DNS)

---

## 🚀 CI/CD Flow

On every push to `main` branch:

1.  Install dependencies (`npm ci`)
2.  Build production React app
3.  Build multi-architecture Docker image (amd64 + arm64)
4.  Push image to Docker Hub
5.  SSH into Oracle VM
6.  Pull latest Docker image
7.  Restart container using Docker Compose

Fully automated deployment.

---

## 🐳 Docker Image

docker pull osayl1997/osayl-portfolio:latest

---

## ▶ Run Locally (Docker)

docker compose up -d --build

Open: http://localhost:8080

---
## ☁ Infrastructure

- Cloud Provider: Oracle Cloud
- VM OS: Ubuntu
- Deployment via SSH from GitHub Actions
---
 ## License

For educational use.
