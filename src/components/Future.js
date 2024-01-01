import Group from '../assets/imgs/Group 91.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/Future.css';
import ScrollTrigger from 'react-scroll-trigger';
import React, { useState } from 'react';

const Future = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Your logic to handle scroll animation
        setIsVisible(true);
    };

    return (
        <ScrollTrigger onEnter={handleScroll}>
            <div className={`animated-content ${isVisible ? 'show' : ''}`}>
                {/* Your content here */}






                <>
                    <div className='body-bg'>
                        <Container className='cccontain' fluid="md">


                            <div className='rrrow-1'>

                                <h1>The Future of Web3 NoCode
                                </h1>
                                <p>Web3Makr allows you to incorporate top ranked blockchain platforms into your work through the drag and drop feature.
                                </p>
                            </div>
                            <Row className='rrrow-2'>
                                <Col className='cccol-1' sm={4}>
                                    <p>Multi-Chain</p>
                                    <p>DashBoard</p>
                                    <p>Tool</p>
                                </Col>
                                <Col className='cccol-2' sm={8}>
                                    <img src={Group} alt='Group' />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>






            </div>
        </ScrollTrigger>
    );
};






export default Future;