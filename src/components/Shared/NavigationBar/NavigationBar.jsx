import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => console.log(error));
    }
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
          <Navbar.Brand href="#home">
            <small>The korean chef hub</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link href="#features">
                <Link className="text-white" to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link className="text-white" to="/blog">Blog</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {user && <Nav.Link href="#deets">{user.displayName}</Nav.Link>}
              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Button onClick={handleLogOut} variant="dark">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="dark">Login</Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
