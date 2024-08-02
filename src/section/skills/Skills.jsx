import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../commom/SkillList";
const Skills = () => {
  return (
    <>
      <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="REACTJS" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Github" />
          <SkillList src={checkMarkIcon} skill="Version Control" />
          <SkillList src={checkMarkIcon} skill="Boostrap" />
        </div>
        <hr />
      </section>
    </>
  );
};

export default Skills;
