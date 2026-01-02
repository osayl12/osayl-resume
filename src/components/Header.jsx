export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div>
          <h1 className="name">Osayl Hamed</h1>
          <p className="subtitle">
            Full-Stack (Junior) · React · Node.js · SQL · Docker · CI/CD · Oracle Cloud · Cron
          </p>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#devops">DevOps</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
