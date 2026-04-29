import React, { useEffect, useRef } from "react";
import styles from "./ProjectsStyles.module.css";
import posImg from "../../assets/viberr.png";

const PROJECTS = [
  {
    img: posImg,
    title: "Restaurant POS System",
    desc: "A full-featured Point of Sale system for restaurants — billing, order management, outlet management, admin dashboard, offline sync and Google Play subscription billing.",
    tags: ["React", "Electron", "Capacitor", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yabase001",
    live: null,
  },
  // Add more projects here
];

function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.header}>
        <h1 className="sectionTitle">Projects</h1>
        <div className="accent-line" />
        <p className="sectionSubtitle">Things I've built &amp; shipped</p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((proj, i) => (
          <article
            key={proj.title}
            className={`${styles.card} card reveal`}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            {/* Screenshot */}
            <div className={styles.imgWrap}>
              <img src={proj.img} alt={proj.title} className={styles.img} />
              <div className={styles.imgOverlay}>
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn">
                    Live Demo
                  </a>
                )}
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  GitHub
                </a>
              </div>
            </div>

            {/* Details */}
            <div className={styles.details}>
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.desc}>{proj.desc}</p>
              <div className={styles.tags}>
                {proj.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
