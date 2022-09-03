import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/Navbar.css';

const Navi =() => {
    return (
      <Navbar className="navbar" fixed="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MovieKece</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Your Library</Nav.Link>
            <NavDropdown title="Lebih Banyak" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Film
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Anime</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                K-Drama
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default (Navi);