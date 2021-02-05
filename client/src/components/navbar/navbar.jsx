import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar collapseOnSelect  bg="dark" variant="dark">
      <Navbar.Brand >CADEX test task</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">App</Nav.Link>
        <Nav.Link as={Link} to="/info">Info</Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default NavbarApp;
