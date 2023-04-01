import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Math.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul className="menuList">
      {links.map((link) => (
        <li className="listElement" key={link.text}>
          <NavLink to={link.path} className="linkedList">{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
