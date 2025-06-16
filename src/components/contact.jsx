import React from 'react';
import style from '../styles/contact.module.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className={style.contact_section}>
    <h2>Contact</h2>
    <div className={style.contact_list}>
      <div className={style.contact_item}><FaEnvelope /> pulitejaswini29@gmail.com</div>
      <div className={style.contact_item}><FaPhone /> +91-8919284065</div>
      <div className={style.contact_item}>
        <a href="https://linkedin.com/in/puli-tejaswini-a2710925a" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
      </div>
      <div className={style.contact_item}>
        <a href="https://github.com/PuliTejaswini" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
      </div>
    </div>
    {/* <form className={style.contact_form} onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form> */}
  </section>
);

export default Contact;
