import path from "path";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

import ContactMe from "../pages/Contact";
import Dropdown from "./Dropdown";
import { GET } from "../services/api-service";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const loc = useLocation();
  // const [dropDown, setDropDown] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    GET("/token_status")
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, [loc.pathname]);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropDown(false);
  //   } else {
  //     setDropDown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   setDropDown(false);
  // };
  const handleSelect = (eventKey: any) => nav(`${eventKey}`);
  return (
    <nav className="nav d=flex justify-content-around bg-secondary p-3 text-primary">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? " mt-2 active btn btn-dark text-light btn-outline-secondary" : " mt-2 btn btn-dark text-light"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/blogs/"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? " mt-2 active btn btn-dark text-light btn-outline-secondary" : " mt-2 btn btn-dark text-light"
          }`
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/blogs/new"
        className={({ isActive }) =>
          `nav-link ${
            isActive
              ? "mt-2 active btn btn-dark btn-sm text-light btn-outline-secondary"
              : "mt-2 btn btn-dark text-light"
          }`
        }
      >
        Write A New Blog
      </NavLink>
      <Nav onSelect={handleSelect} className="">
        <NavDropdown
          title="Authors"
          id="nav-dropdown"
          menuVariant="dark"
          className=" text-light btn btn-dark btn-outline-secondary"
        >
          <NavDropdown.Item className="bg-dark text-primary" eventKey="/register">
            Register
          </NavDropdown.Item>
          <NavDropdown.Item className="bg-dark text-primary" eventKey="/login">
            Login
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {/* <NavLink
        to="/donate"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-dark btn-sm text-light btn-outline-secondary" : "btn btn-dark text-light"
          }`
        }
      >
        $ Donate $
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-dark btn-sm text-light btn-outline-secondary" : "btn btn-dark text-light"
          }`
        }
      >
        Contact Me
      </NavLink> */}
      <Nav onSelect={handleSelect}>
        <NavDropdown
          title="Reach Out"
          menuVariant="dark"
          id="nav-dropdown"
          className=" text-light btn btn-dark btn-outline-secondary"
        >
          <NavDropdown.Item className="bg-dark text-primary" eventKey="/contact">
            Contact
          </NavDropdown.Item>
          <NavDropdown.Item className="bg-dark text-primary" eventKey="/donate">
            Donate
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {/* <ul style={{ listStyleType: "none" }}>
        <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/donate" className="nav-links btn btn-dark btn-outline-secondary">
            $ Donate $
          </Link>
          {dropDown && <Dropdown />}
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
