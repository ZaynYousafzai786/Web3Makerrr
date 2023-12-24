import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../assets/imgs/Navbarlogo.png';
import '../assets/css/NavbarHead.css';
import React from 'react';
import { Link } from 'react-router-dom'


function NavbarHead() {
    return (
        <Navbar collapseOnSelect expand="lg" className='nav'>
            <Container>
                <Navbar.Brand href="#home"><img src={Home} alt='Home' /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>

                    <Nav>
                        <Nav.Link className='nav-links'><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>Web3Maker</Link></Nav.Link>
                        <Nav.Link className='nav-links'><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/Services'}>Services</Link></Nav.Link>
                        <Nav.Link className='nav-links'><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/Tools'}>Tool</Link></Nav.Link>
                        <Button variant="outline-info" className='nav-btn'>Start For Free</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHead;