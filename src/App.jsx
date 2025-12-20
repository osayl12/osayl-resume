import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "./styles.css";

function App() {
    const [theme, setTheme] = useState("dark");


  return (
    <div className={theme}>

      <Header onToggleTheme={()=>
        setTheme(theme === "dark" ? "light" : "dark")
      } />

      <main className="container">
        <About />
        <Contact />
        <Projects />
        <Skills />
        <Education />
      </main>


    </div>
  );
}

export default App;
