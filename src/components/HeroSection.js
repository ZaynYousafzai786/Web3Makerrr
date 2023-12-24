import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/HeroSection.css';
import Youtube from '../assets/imgs/Youtube.png'
import Desktopimg from '../assets/imgs/Web.png'

function HeroSection() {

    return (
        <>
            <div className='contain'>
                <Container fluid="md" >
                    <Row className='row-1'>
                        <Col><h1>Web3Maker Redefining <br />How You Create</h1></Col>


                    </Row>

                    <Row className='row-2'>
                        <Col><p>Unlock the blockchain potential to create <br /> Web3 Applications</p></Col>
                    </Row>

                    <Row className='row-3'>
                        <Col><a href='https://www.youtube.com/'><img src={Youtube} alt='Logo' /></a></Col>
                    </Row>

                    <Row className='row-4'>
                        <Col><img src={Desktopimg} alt='Logo' /></Col>
                    </Row>
                </Container>

            </div>

        </>
    );
}

export default HeroSection;