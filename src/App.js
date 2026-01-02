import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills.jsx";
import DevOps from "./components/DevOps";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/app.css";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <About />
        <Projects />
        <Skills />
        <DevOps />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
