import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav d=flex justify-content-around bg-secondary p-3 text-primary">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link ${isActive ? "active btn btn-dark text-light btn-outline-secondary" : "btn btn-dark text-light"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/blogs/"
        className={({ isActive }) =>
          `nav-link ${isActive ? "active btn btn-dark text-light btn-outline-secondary" : "btn btn-dark text-light"}`
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/blogs/new"
        className={({ isActive }) =>
          `nav-link ${isActive ? "active btn btn-dark text-light btn-outline-secondary" : "btn btn-dark text-light"}`
        }
      >
        Write A New Blog
      </NavLink>

      <NavLink
        to="/donate"
        className={({ isActive }) =>
          `nav-link ${isActive ? "active btn btn-dark text-light btn-outline-secondary" : "btn btn-dark text-light"}`
        }
      >
        $ Donate $
      </NavLink>
    </nav>
  );
};

export default Navbar;
