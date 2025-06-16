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
        <a href="https://github.com/PuliTejaswini/idea1.git" target="_blank" rel="noopener noreferrer" className={style.github_link} title="View GitHub Repo">
          <FaGithub />
        </a>
      </div>
      <div className={style.project_card}>
        <h3>Java Intern @ Coding Raja (Mar 2024 – Apr 2024)</h3>
        <div className={style.tech_stack}>Java</div>
        <p>Built a library Management and online bank management softwares for real-time access. </p>
        <a href="https://github.com/PuliTejaswini/Library-Management-System.git" target="_blank" rel="noopener noreferrer" className={style.github_link} title="View GitHub Repo">
          <FaGithub />library management system
        </a>
        <a href="https://github.com/PuliTejaswini/Banking-Management-System.git" target="_blank" rel="noopener noreferrer" className={style.github_link} title="View GitHub Repo">
          <FaGithub /> bank management system
        </a>
      </div>
      <div className={style.project_card}>
        <h3>Web Developer @ InternPe (Apr 2024 – May 2024)</h3>
        <div className={style.tech_stack}>HTML, CSS, JavaScript</div>
        <p>Created a responsive e-commerce site with modern UI and best practices.</p>
        <a href="https://github.com/PuliTejaswini/Myntra.git" target="_blank" rel="noopener noreferrer" className={style.github_link} title="View GitHub Repo">
          <FaGithub /> Myntra 
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
