import React from 'react'
import style from '../styles/nav.module.css';
const Nav = () => {
  return (
    <div className={style.nav_container}>
      <div>log</div>
      <div className={style.nav_links}>

        <nav className={style.nav_link}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Client</a>
        </nav>
      </div>
        <div>
          <button></button>
        </div>
    </div>
  )
}

export default Nav
