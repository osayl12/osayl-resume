export default function DevOps() {
  return (
    <section id="devops" className="card">
      <h2>DevOps / CI-CD</h2>

      <h3>GitHub Actions</h3>
      <ul className="list">
        <li>CI: build on every push to main</li>
        <li>CD: build Docker image (linux/arm64), push to Docker Hub, deploy to Oracle Cloud via SSH</li>
      </ul>

      <h3>Actions Secrets</h3>
      <div className="chips">
        {["DOCKER_USERNAME", "DOCKER_PASSWORD", "SSH_HOST", "SSH_USER", "SSH_KEY"].map((x) => (
          <span key={x} className="chip">{x}</span>
        ))}
      </div>

      <h3>Actions Variables</h3>
      <div className="chips">
        {["DOCKER_IMAGE", "APP_DIR"].map((x) => (
          <span key={x} className="chip">{x}</span>
        ))}
      </div>

      <h3>Cron (server automation)</h3>
      <ul className="list">
        <li>Daily health check</li>
        <li>Weekly Docker cleanup (prune old images)</li>
      </ul>
    </section>
  );
}
