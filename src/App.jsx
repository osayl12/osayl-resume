import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React from 'react'

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
