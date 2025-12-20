import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import DevOps from "./components/DevOps";
import Footer from "./components/Footer";
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
        <DevOps />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
