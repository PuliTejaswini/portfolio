import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import style from '../styles/home.module.css';

const Home = () => (
  <section id="home" className={style.home_section}>
    <div className={style.intro}>
      <h1>Puli Tejaswini</h1>
      <h2>Full Stack Engineer / Data Science Student</h2>
      <p>Hyderabad, Telangana</p>
      <div className={style.contact_icons}>
        <span><FaPhoneAlt /> +91-8919284065</span>
        <span><FaEnvelope /> pulitejaswini29@gmail.com</span>
      </div>
      <div className={style.social_links}>
        <a href="https://github.com/PuliTejaswini" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/puli-tejaswini-a2710925a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </div>
  </section>
);

export default Home;
