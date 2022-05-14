import React, { useState } from 'react'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


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
            <span className="d-block fs-1">E-Commerce</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setOpen(isOpen ? false : true)}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header
              closeButton
              className="justify-content-end"
              onClick={() => setOpen(false)}
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-0">
                <LinkContainer to='/'>
                  <Nav.Link onClick={() => setOpen(false)}>
                    Home
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/'>
                  <Nav.Link onClick={() => setOpen(false)}>
                    About
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar