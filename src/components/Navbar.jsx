import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar =()=>{
    return (
        <>
        <Navbar className="fixed-top" bg="light" expand="lg">
      <Navbar.Brand href="#home">Vero Flores</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about-me">Acerca de mí</Nav.Link>
          <Nav.Link href="#portfolio">Portafolio</Nav.Link>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </>
    )


};
export default NavBar;