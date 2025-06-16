import React, { useState } from 'react';
import style from '../styles/nav.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className={style.nav_container}>
      <div className={style.logo}>
        {/* Portfolio SVG Logo */}
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
          <rect x="2" y="8" width="34" height="22" rx="6" fill="#00bcd4"/>
          <rect x="8" y="14" width="20" height="10" rx="3" fill="#232526"/>
          <circle cx="19" cy="19" r="4" fill="#fff"/>
          <rect x="13" y="26" width="12" height="2" rx="1" fill="#fff"/>
        </svg>
      </div>
      <nav className={menuOpen ? `${style.nav_links} ${style.active}` : style.nav_links}>
        
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        
        <a href="#experience" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <button className={style.menu_btn} onClick={handleMenuToggle} aria-label="Toggle menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Nav;
