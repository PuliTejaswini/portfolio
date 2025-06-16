import React, { useRef, useEffect, useState } from 'react';
import style from '../styles/about.module.css';

const About = () => {
  const eyesRef = useRef(null);
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!eyesRef.current) return;
    const eyes = eyesRef.current.querySelectorAll(`.${style.eye}`);
    if (hovered) {
      // Eyes in semicircle
      const r = 12; // radius in px
      // Left eye
      eyes[0].style.transform = `translate(${-r}px, ${r}px)`;
      // Right eye
      eyes[1].style.transform = `translate(${r}px, ${r}px)`;
      return;
    }
    // Eyes follow cursor
    const handleMouseMove = (e) => {
      if (!eyesRef.current || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const distance = Math.min(10, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 10);
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      eyes.forEach(eye => {
        eye.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hovered]);

  return (
    <section id="about" className={style.about_section}>
      <div className={style.intro}>
            <h1>Puli Tejaswini</h1>  
          </div>

    
      <div className={style['ai-card-wrapper']}>
        
        <div
          className={style['container-wrap']}
          ref={cardRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <input type="checkbox" id="ai-card-toggle" />
          <div className={style.card}>
            <div className={style['background-blur-balls']}>
              <div className={style.balls}>
                <div className={style.ball + ' ' + style.violet}></div>
                <div className={style.ball + ' ' + style.green}></div>
                <div className={style.ball + ' ' + style.rosa}></div>
                <div className={style.ball + ' ' + style.cyan}></div>
              </div>
            </div>
            <div className={style['content-card']}>
              <div className={style['background-blur-card']}></div>
              <div className={style.eyes} ref={eyesRef}>
                <div className={style.eye}></div>
                <div className={style.eye}></div>
              </div>
              <div className={style['eyes'] + ' ' + style.happy}>
                <svg className={style.crescent_eye} viewBox="0 0 32 16"><path d="M4,12 Q16,0 28,12" stroke="#9147ff" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>
                <svg className={style.crescent_eye} viewBox="0 0 32 16"><path d="M4,12 Q16,0 28,12" stroke="#9147ff" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>
              </div>
            </div>
            <div className={style['container-ai-chat']}>
              <div className={style.chat}>
                <div className={style['chat-bot']}>
                  <textarea placeholder="Ask me anything..." disabled></textarea>
                </div>
                <div className={style.options}>
                  <div className={style['btns-add']}>
                    <button><i>+</i></button>
                    <button><i>-</i></button>
                  </div>
                  <button className={style['btn-submit']}><i>→</i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <p className={style.about_para}>
        I'm Puli Tejaswini, a Computer Science student specializing in Data Science with a strong interest in full-stack development. I’ve built real-world projects using React, Node.js, and MongoDB, and gained experience through internships in Java and web development. I'm a quick learner, team player, and passionate about building smart, scalable web applications.
      </p>
    </section>
  );
};

export default About;
