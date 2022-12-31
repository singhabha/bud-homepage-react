import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Nvbar() {
  return (
    <Navbar
      className="nav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      {/* style={{ color: "white" }}  */}
      <Container>
        <Navbar.Brand href="#home">
          <img src="./img/logo-dark2x1.png" alt="logo" />
        </Navbar.Brand>
        {/* <div className="ml-4 nav-right ms-auto"> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav-link me-auto">
            <Nav.Link
              style={{ color: "white" }}
              className="nav-li"
              href="#home"
            >
              HOME
            </Nav.Link>
            <Nav.Link href="#knowus">KNOW US</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="work">WORK</Nav.Link>
            <Nav.Link href="clients">CLIENTS</Nav.Link>
            <Nav.Link href="digital">DIGITAL MARKETING</Nav.Link>
            <Nav.Link href="social-media">SOCIAL MEDIA</Nav.Link>
            <Nav.Link>FILMS</Nav.Link>
            <Nav.Link>CARRIERS</Nav.Link>
            <Nav.Link>CONTACT</Nav.Link>
            <Nav.Link>+91 9886833138</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* </div> */}
      </Container>
    </Navbar>
  );
}

export default Nvbar;
