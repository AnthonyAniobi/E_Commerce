import React, { useState } from 'react'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';


function Navigationbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navbar
        expanded={isOpen}
        expand='lg'
        bg="light"
        fixed="top"
        className="bg-white text-the-primary bg-gradient shadow py-3"
      >
        <Container>
          <Navbar.Brand href="/">
            <span className="d-block fs-1">Offcanvas</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setOpen(isOpen ? false : true)}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              className="justify-content-end"
              onClick={() => setOpen(false)}
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-0">
                <NavLink to="/" onClick={() => setOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="about" onClick={() => setOpen(false)}>
                  About
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar