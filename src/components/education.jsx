import React from 'react';
import style from '../styles/education.module.css';

const Education = () => (
  <section id="education" className={style.education_section}>
    <h2>Education</h2>
    <div className={style.education_list}>
      <div className={style.education_item}>
        <h3>B.Tech in Computer Science</h3>
        <span className={style.timeline}>2019 - 2023</span>
        <span className={style.degree}>Location: Hyderabad, Telangana</span>
      </div>
    </div>
  </section>
);

export default Education;
