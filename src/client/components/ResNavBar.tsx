import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

import { GET, TOKEN_KEY } from "../services/api-service";

const ResNavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const loc = useLocation();

  const nav = useNavigate();

  useEffect(() => {
    GET("/auth/token_status")
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, [loc.pathname]);

  const handleLogOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    nav("/login");
  };

  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="secondary" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link className="mx-3 text-dark" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-3 text-dark" href="/blogs">
                Blogs
              </Nav.Link>
              {loggedIn && (
                <Nav.Link className="mx-3 text-dark" href="/blogs/new">
                  Write A New Blog
                </Nav.Link>
              )}
              {loggedIn && (
                <Nav color="dark" className="mx-3 text-dark ">
                  <NavDropdown title={<span className="text-dark">Authors</span>} menuVariant="dark">
                    <NavDropdown.Item className="bg-dark text-primary" href="/login" onClick={handleLogOut}>
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}

              {!loggedIn && (
                <Nav color="dark" className="mx-3 text-dark ">
                  <NavDropdown title={<span className="text-dark">Authors</span>} menuVariant="dark">
                    <NavDropdown.Item className="bg-dark text-primary" href="/register">
                      Register
                    </NavDropdown.Item>

                    <NavDropdown.Item className="bg-dark text-primary" href="/login">
                      Login
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}

              <Nav className="mx-3 text-dark">
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
