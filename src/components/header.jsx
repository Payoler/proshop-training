import React from 'react';
import { Navbar, Nav, Container, NavbarCollapse} from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';

const header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
    <Container>
        <Navbar.Brand href='/'>Training project</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <NavbarCollapse id='basic-navbar-nav'>
            <Nav className='ms-auto'> 
                <Nav.Link href='/cart'><FaShoppingCart/>Cart</Nav.Link>
                <Nav.Link href='/login'><FaUser/>Login</Nav.Link>
            </Nav>
        </NavbarCollapse>
    </Container>
        </Navbar>
    </header>
  )
}

export default header