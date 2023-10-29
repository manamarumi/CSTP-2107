import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';


function Header() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">       
      <Container fluid>
        <Navbar.Brand href="#home">Midterm News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Politics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">World action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Technology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lifestyle action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Travel</NavDropdown.Item>
                  
            </NavDropdown>
          </Nav>          
          <Nav>   
            <Nav.Link href="#Politics" className="nav-link">Politics</Nav.Link>
            <Nav.Link href="#World" className="nav-link">World</Nav.Link>             
            <Nav.Link href="#Technology" className="nav-link">Technology</Nav.Link>
            <Nav.Link href="#Lifestyle" className="nav-link">Lifestyle</Nav.Link>
            <Nav.Link href="#Travel" className="nav-link">Travel</Nav.Link>          
          </Nav>
         
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


