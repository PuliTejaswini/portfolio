import React from 'react';
import style from '../styles/skills.module.css';
import {  FaCss3Alt, FaJs, FaReact, FaGitAlt, FaJava, FaPython,  FaNodeJs, FaHtml5} from 'react-icons/fa';

import { SiFirebase, SiVite, SiCanva, SiMongodb, SiMysql, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const Skills = () => (
  <section id="skills" className={style.skills_section}>
    <h2>Skills</h2>
    <div className={style.skills_grid}>
      <div className={style.skill}><FaJs /> JavaScript</div>
      <div className={style.skill}><FaHtml5 /> HTML5</div>
      <div className={style.skill}><FaCss3Alt /> CSS</div>
      <div className={style.skill}><FaReact /> React</div>
      <div className={style.skill}><FaNodeJs /> Node.js</div>
      <div className={style.skill}><SiMongodb /> MongoDB</div>
      <div className={style.skill}><SiMysql /> MySQL</div>
      <div className={style.skill}><SiTailwindcss /> Tailwind CSS</div>
      {/* <div className={style.skill}><SiBootstrap /> Bootstrap</div> */}
      <div className={style.skill}><SiFirebase/> Firebase</div>
      <div className={style.skill}><FaPython /> Python</div>
      <div className={style.skill}><FaJava /> Java</div>
      <div className={style.skill}><FaGitAlt /> GitHub</div>
      <div className={style.skill}><SiVite /> Vite</div>
      {/* <div className={style.skill}><SiVisualstudiocode /> VS Code</div> */}
      <div className={style.skill}><SiCanva /> Canva</div>
    
    </div>
  </section>
);

export default Skills;
