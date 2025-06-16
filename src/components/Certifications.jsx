import React from 'react';
import style from '../styles/experience.module.css';

const Certifications = () => (
  <section id="experience" className={style.experience_section}>
    <h2>Certifications & Achievements</h2>
    <div className={style.experience_list}>
      <div className={style.experience_item}>
        <h3>Certifications</h3>
        <ul>
          <li>Cisco Intro to Cybersecurity</li>
          <li>Oracle Java Fundamentals</li>
          <li>IBM SQL 101</li>
          <li>Hackerrank Python</li>
          <li>Infosys Bootstrap4</li>
          <li>Altair ML Intro</li>
        </ul>
      </div>
      {/* <div className={style.experience_item}>
        <h3>Achievements</h3>
        <ul>
          <li>Managed technical events</li>
          <li>NSS election volunteer</li>
        </ul>
      </div> */}
    </div>
  </section>
);

export default Certifications;
