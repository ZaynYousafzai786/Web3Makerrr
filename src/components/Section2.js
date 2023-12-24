import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from '../assets/imgs/Group 150.png';
import logo2 from '../assets/imgs/Group 151.png';
import logo3 from '../assets/imgs/Group 152.png';
import logo4 from '../assets/imgs/Group 153.png';
import logo5 from '../assets/imgs/Group 154.png';
import Button from 'react-bootstrap/Button';
import Side1 from '../assets/imgs/Rectangle 51.png';
import NFTs from '../assets/imgs/NFTs.png';
import '../assets/css/Section2.css'

function HeroSection() {

    return (
        <>
            <div className='contain-1'>
                <Container fluid="md" >
                    <div className='logo-rrow-1'>
                        <img src={logo1} alt='logos' />
                        <img src={logo2} alt='logos' />
                        <img src={logo3} alt='logos' />
                        <img src={logo4} alt='logos' />
                        <img src={logo5} alt='logos' />
                    </div>


                    <Row className='rrow-2'>
                        <Col sm={4}>
                            <h1>Create your own Web3 Masterpiece</h1>
                            <p>Most entrepreneurs want to create their own web3 sites, unfortunately, they dont know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.</p>
                            <Button >Start building</Button>
                        </Col>

                        <Col sm={8}>
                            <img src={Side1} alt='Photo' />
                        </Col>
                    </Row>


                    <Row className='rrow-3'>
                        <Col sm={8}>
                            <img src={NFTs} alt='Photo' />
                        </Col>

                        <Col sm={4}>
                            <h1>Can be changed to customizable ready made web3 dapps templates.</h1>
                            <p className='nums'>01  <span>NFT(ERC721).</span></p>
                            <p className='nums' >02  <span>DEFI</span></p>
                            <p className='nums'>03  <span>Smart contracts</span></p>
                            <p className='nums'>04  <span>GameFi</span></p>
                            <p className='nums'>05  <span>MetaVerse</span></p>


                            <Button >Start building</Button>
                        </Col>
                    </Row>

                </Container>

            </div>

        </>
    );
}

export default HeroSection;