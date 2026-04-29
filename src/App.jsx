import "./App.css";
import Navbar  from "./section/Navbar/Navbar";
import Hero    from "./section/Hero/Hero";
import About   from "./section/About/About";
import Projects from "./section/Projects/Projects";
import Skills  from "./section/skills/Skills";
import Contact from "./section/Contact/Contact";
import Footer  from "./section/Footer/Footer";
import { useEffect } from "react";

function App() {
  /* Global scroll-reveal observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
