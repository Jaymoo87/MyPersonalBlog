import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav d=flex justify-content-around bg-secondary p-3 text-primary">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-dark text-light btn-outline-secondary" : "btn btn-dark text-light"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-dark text-light btn-outline-secondary" : "btn btn-dark text-light"
          }`
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/films"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-dark text-light btn-outline-secondary" : "btn btn-dark text-light"
          }`
        }
      >
        Films
      </NavLink>
    </nav>
  );
};

export default Navbar;
