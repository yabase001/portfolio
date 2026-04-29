import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/yabase.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../commom/ThemeContext";

function Hero() {
  const { theme } = useTheme();

  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon  = theme === "light" ? githubLight  : githubDark;
  const linkedinIcon= theme === "light" ? linkedinLight: linkedinDark;

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.container}>
      {/* Profile image */}
      <img
        className={styles.hero}
        src={heroImg}
        alt="Profile of Chelladurai Yabase"
      />

      {/* Info block */}
      <div className={styles.info}>
        <h1>
          Chelladurai
          <br />
          Yabase
        </h1>
        <h2>Full Stack Developer</h2>

        {/* Social icons */}
        <span className={styles.socials}>
          <a
            href="https://x.com/Yabase7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://github.com/yabase001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/chelladurai-yabase-a-8a5037257"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </span>

        <p className={styles.description}>
          Building modern web, mobile &amp; desktop apps with React, Node.js,
          Electron and Capacitor.
        </p>

        <a href={CV} download className="btn">
          ↓ Download Resume
        </a>
      </div>

      {/* Scroll hint */}
      <button className={styles.scrollHint} onClick={scrollToAbout} aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        scroll
      </button>
    </section>
  );
}

export default Hero;
