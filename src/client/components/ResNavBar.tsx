import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

import { GET } from "../services/api-service";

const ResNavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const loc = useLocation();
  // const [dropDown, setDropDown] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    GET("/auth/token_status")
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, [loc.pathname]);

  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="secondary" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-center">
            <Nav>
              <Nav.Link className="mx-5 text-dark" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-5 text-dark" href="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="mx-5 text-dark" href="/blogs/new">
                Write A New Blog
              </Nav.Link>
              <Nav color="dark" className="mx-5 text-dark justify-content-end">
                <NavDropdown title={<span className="text-dark">Authors</span>} menuVariant="dark">
                  <NavDropdown.Item className="bg-dark text-primary" href="/register">
                    Register
                  </NavDropdown.Item>

                  <NavDropdown.Item className="bg-dark text-primary" href="/login">
                    Login
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="mx-5 text-dark">
                <NavDropdown title={<span className="text-dark">Reach Out</span>} menuVariant="dark">
                  <NavDropdown.Item className="bg-dark text-primary" href="/contact">
                    Contact
                  </NavDropdown.Item>
                  <NavDropdown.Item className="bg-dark text-primary" href="/donate">
                    $ Donate $
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ResNavBar;
