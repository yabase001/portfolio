import React, { useEffect, useRef } from "react";
import styles from "./SkillsStyles.module.css";
import { useTheme } from "../../commom/ThemeContext";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5",      icon: "devicon-html5-plain colored" },
      { name: "CSS3",       icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React.js",   icon: "devicon-react-original colored" },
      { name: "Bootstrap",  icon: "devicon-bootstrap-plain colored" },
      { name: "Vite",       emoji: "⚡" },
    ],
  },
  {
    label: "App Development",
    skills: [
      { name: "Capacitor",    emoji: "🔋" },
      { name: "Electron.js",  icon: "devicon-electron-original colored" },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Android",      icon: "devicon-android-plain colored" },
    ],
  },
  {
    label: "Backend & Database",
    skills: [
      { name: "Node.js",    icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "MongoDB",    icon: "devicon-mongodb-plain colored" },
      { name: "REST APIs",  emoji: "🔗" },
      { name: "JWT Auth",   emoji: "🔐" },
    ],
  },
  {
    label: "Tools & Deployment",
    skills: [
      { name: "Git",     icon: "devicon-git-plain colored" },
      { name: "GitHub",  icon: "devicon-github-original" },
      { name: "Netlify", emoji: "🚀" },
      { name: "Render",  emoji: "☁️" },
      { name: "npm",     icon: "devicon-npm-original-wordmark colored" },
    ],
  },
];

function Skills() {
  const { theme } = useTheme();
  const groupRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    groupRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.header}>
        <h1 className="sectionTitle">Skills</h1>
        <div className="accent-line" />
        <p className="sectionSubtitle">Technologies I work with</p>
      </div>

      <div className={styles.groups}>
        {SKILL_GROUPS.map((group, gi) => (
          <div
            key={group.label}
            className={`${styles.group} reveal`}
            ref={(el) => (groupRefs.current[gi] = el)}
            style={{ transitionDelay: `${gi * 0.1}s` }}
          >
            <h3 className={styles.groupLabel}>{group.label}</h3>
            <div className={`${styles.skillGrid} stagger`}>
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`${styles.skillCard} card`}
                  data-theme={theme}
                >
                  {skill.emoji ? (
                    <span className={styles.emojiIcon}>{skill.emoji}</span>
                  ) : (
                    <i className={`${skill.icon} ${styles.skillIcon}`} />
                  )}
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

