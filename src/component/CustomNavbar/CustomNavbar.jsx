import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./CustomNavbar.css";

function CustomNavbar() {
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname; // Pathname
    setActiveKey(pathname);
  }, []);

  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="/cipher-tech">
          <i>Logo</i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
            className="ml-auto"
          >
            <Nav.Item>
              <Nav.Link eventKey="/cipher-tech" href="/cipher-tech">
                <b>Home</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/cipher-tech/about" href="/cipher-tech/about">
                <b>About Us</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/solutions" href="/solutions">
                <b>Solutions</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/services" href="/services">
                <b>Services</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/contact" href="/contact">
                <b>Contact Us</b>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
