import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

function NavbarApp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">App</Nav.Link>
          <Nav.Link href="/info">Info</Nav.Link>
        </Nav>
    </Navbar>
  );
}
export default NavbarApp;
