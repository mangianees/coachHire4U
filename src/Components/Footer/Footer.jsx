import { Card, Col, Container, Row } from "react-bootstrap";
import './Footer.css'

// import img from "../../images/footerLondonSkyline.png"

function Footer() {
    return ( <>
    <div className="footerBackground">
        <Card>
    <Container>
        <Row>
            <Col>
            <a href="#">
                Fleet
            </a>
            <a href="#">
                Fleet
            </a>
            <a href="#">
                Fleet
            </a>
            <a href="#">
                Fleet
            </a>
            <a href="#">
                Fleet
            </a>
            </Col>
            <Col>
            <h1>Footer</h1>
            </Col>
            <Col>
            <h1>Footer</h1>
            </Col>
            <Col>
            <h1>Footer</h1>
            </Col>
        </Row>
    </Container>
    </Card>
    </div>
    </> 
    
    );
}

export default Footer;