function Header({onToggleTheme}) {
  return (
    <header>
      <div className="toolbar">
        <h2>Osayl Hamed</h2>

        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
              <button onClick={onToggleTheme} className="theme-btn">
            🌗
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
