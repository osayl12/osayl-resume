import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "./styles.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <About />
        <Contact />
        <Projects />
        <Skills />
        <Education />
      </main>
    </>
  );
}

export default App;
