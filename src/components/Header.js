import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const isActive = (pathname, path) => {
  if (pathname === path) return { textDecoration: "underline 5px solid blue" };
  else return { color: "#000000" };
};
const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/"
              className="nav-link active"
              style={isActive(pathname, "/")}
            >
              Generate
            </Link>
            <Link
              to="/saved"
              className="nav-link active"
              style={isActive(pathname, "/saved")}
            >
              Saved
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
