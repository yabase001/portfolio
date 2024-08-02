import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../commom/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png"
const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={viberr}
            link="https://yabase.thisaitech.com"
            h3="loan"
            p="Banking App"
          />
          <ProjectCard
            src={freshBurger}
            link="https://yabase.thisaitech.com"
            h3="game"
            p="chess bord App"
          />
          <ProjectCard
            src={freshBurger}
            link="https://yabase.thisaitech.com"
            h3="game"
            p="chess App"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
