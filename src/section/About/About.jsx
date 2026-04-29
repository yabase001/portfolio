import React, { useEffect, useRef } from "react";
import styles from "./AboutStyles.module.css";

const WHAT_I_DO = [
  {
    icon: "devicon-react-original colored",
    title: "Web Apps",
    desc: "Building responsive, high-performance web apps with React & Vite.",
  },
  {
    icon: "devicon-electron-original colored",
    title: "Desktop Apps",
    desc: "Cross-platform desktop apps for Windows using Electron.js.",
  },
  {
    icon: "devicon-android-plain colored",
    title: "Mobile Apps",
    desc: "Android & hybrid mobile apps with React Native & Capacitor.",
  },
  {
    icon: "devicon-nodejs-plain colored",
    title: "Backend APIs",
    desc: "RESTful APIs with Node.js, Express and MongoDB.",
  },
];

function About() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.container}>
      <div className={`${styles.header} reveal`} ref={(el) => (cardRefs.current[0] = el)}>
        <h1 className="sectionTitle">About Me</h1>
        <div className="accent-line" />
        <p className={styles.bio}>
          Hi, I'm <strong>Chelladurai Yabase</strong> — a full-stack developer
          from Tamil Nadu, India. I specialise in building modern, fast and
          scalable applications across web, mobile and desktop platforms.
          <br /><br />
          I've worked with React, Node.js, Electron, Capacitor and React Native
          to ship real-world products including a full-featured Restaurant POS
          system used in production. I love clean code, great UX, and solving
          hard problems.
        </p>
      </div>

      <div className={`${styles.cards} stagger`}>
        {WHAT_I_DO.map((item, i) => (
          <div
            key={item.title}
            className={`${styles.card} card reveal`}
            ref={(el) => (cardRefs.current[i + 1] = el)}
          >
            <i className={`${item.icon} ${styles.icon}`} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
