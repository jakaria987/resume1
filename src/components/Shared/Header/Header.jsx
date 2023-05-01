import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="text-center text-success">
        <h1>THE KOREAN CHEF HUB</h1>
        <p>
          <small>a premium chef house</small>
        </p>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><small>The korean chef hub</small></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">picture</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <Button variant="dark"><Link to='/login'>Login</Link></Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
