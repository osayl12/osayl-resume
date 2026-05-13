export default function Navbar() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a href="#about" className="nav-brand">Osayl</a>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
