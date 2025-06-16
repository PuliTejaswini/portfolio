import React from 'react';
import style from '../styles/experience.module.css';

const Certifications = () => (
  <section id="experience" className={style.experience_section}>
    <h2>Certifications </h2>
    <div className={style.experience_list}>
      <div className={style.experience_item}>
        <h3>Certifications</h3>
        <ul>
          <li style={{ '--i': 0 }}>Cisco Intro to Cybersecurity</li>
          <li style={{ '--i': 1 }}>Oracle Java Fundamentals</li>
          <li style={{ '--i': 2 }}>IBM SQL 101</li>
          <li style={{ '--i': 3 }}>Hackerrank Python</li>
          <li style={{ '--i': 4 }}>Infosys Bootstrap4</li>
          <li style={{ '--i': 5 }}>Altair ML Intro</li>
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
