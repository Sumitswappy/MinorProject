import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className="menu">
        <li>UniFind.in</li>
        <li>
          <NavLink className="nav" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/FeaturedColleges">
            Colleges
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/Reviews">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/Courses">
            Courses
          </NavLink>
        </li>
        <div className="dropdown">
          <NavLink className="nav" onClick={toggleDropdown}>Login/Register</NavLink>
          <div class="dropdown-content">
            <a to="/" onClick={() => openModal("login")}>
              Login
            </a>
            <a to="/" onClick={() => openModal("signup")}>
              Register
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
