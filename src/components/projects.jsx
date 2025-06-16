import React from 'react';
import style from '../styles/projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => (
  <section id="projects" className={style.projects_section}>
    <h2>Projects & Experience</h2>
    <div className={style.projects_grid}>
      <div className={style.project_card}>
        <h3>Full Stack Engineer @ Qwatch (Ongoing)</h3>
        <div className={style.tech_stack}>React, Node.js, Express, MongoDB, Vite</div>
        <p>Developing a scalable web platform with a modern React frontend and Node.js/Express backend, using MongoDB for data storage.</p>
      </div>
      <div className={style.project_card}>
        <h3>Java Intern @ Coding Raja (Mar 2024 – Apr 2024)</h3>
        <div className={style.tech_stack}>Java</div>
        <p>Built a library resource app for real-time access, improving user satisfaction by 20%.</p>
      </div>
      <div className={style.project_card}>
        <h3>Web Developer @ InternPe (Apr 2024 – May 2024)</h3>
        <div className={style.tech_stack}>HTML, CSS, JavaScript</div>
        <p>Created a responsive e-commerce site with modern UI and best practices.</p>
      </div>
    </div>
  </section>
);

export default Projects;
