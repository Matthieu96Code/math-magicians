import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: 'home', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.menuList}>
      {links.map((link) => (
        <li className={styles.listElement} key={link.text}>
          <NavLink className={styles.linkedList} to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
