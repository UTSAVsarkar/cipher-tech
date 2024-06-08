import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./CustomNavbar.css";

function CustomNavbar({ currPage, setCurrPage }) {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand
          onClick={() => {
            setCurrPage(0);
          }}
          style={{ cursor: "pointer" }}
        >
          <i>Logo</i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav
            // activeKey={activeKey}
            // onSelect={(selectedKey) => setActiveKey(selectedKey)}
            className="ml-auto"
          >
            <Nav.Item>
              <Nav.Link
                active={currPage === 0}
                onClick={() => {
                  setCurrPage(0);
                }}
              >
                <b>Home</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={currPage === 1}
                onClick={() => {
                  setCurrPage(1);
                }}
              >
                <b>About Us</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={currPage === 2}
                onClick={() => {
                  setCurrPage(2);
                }}
              >
                <b>Solutions</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={currPage === 3}
                onClick={() => {
                  setCurrPage(3);
                }}
              >
                <b>Services</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={currPage === 4}
                onClick={() => {
                  setCurrPage(4);
                }}
              >
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
