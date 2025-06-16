import React, { useState } from 'react';
import style from '../styles/nav.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className={style.nav_container}>
      <div className={style.logo}>LOGO</div>
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
