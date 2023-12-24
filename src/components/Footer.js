import Facebook from '../assets/imgs/facebook.png';
import Twitter from '../assets/imgs/twitter.png';
import Instagram from '../assets/imgs/instagram.png';
import React from 'react';
import { Link } from 'react-router-dom'


import { Col, Row } from "react-bootstrap";
import Logo from "../assets/imgs/Navbarlogo.png";
import Nav from 'react-bootstrap/Nav';
import '../assets/css/Footer.css'
function Footer() {
    return (
        <>

            <div className="footer">
                <Row>
                    <Col className="ccccol-1">
                        <img src={Logo} alt="IBA" />

                    </Col>
                </Row>

                <Row>
                    <Col className="ccccol-2">

                        <Nav.Link className='footer-nav'><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>Web3Maker</Link></Nav.Link>
                        <Nav.Link className='footer-nav'><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/Services'}>Services</Link></Nav.Link>
                        <Nav.Link className='footer-nav'><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/Tools'}>Tool</Link></Nav.Link>

                    </Col>
                </Row>

                <Row className='rrrrow-1'>
                    <Col>
                        <p className='copywrite'>Copyright 2023 ©Muhammad Zain Ul Abidin</p>
                    </Col>

                    <Col>
                        <img src={Facebook} alt='Facebook' />
                        <img src={Instagram} alt='insta' />
                        <img src={Twitter} alt='Twitter' />

                    </Col>
                </Row>




            </div>


        </>
    );

}

export default Footer;