import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./ComparePrice.css";
import { Col, Container, Row } from "react-bootstrap";

function ComparePrice() {
  return (
    <Container fluid className="GreenBackground">
      <Row>
        <Col xs={12} className="Header">
          Compare Instant Prices And Get Your Quote in 3 Simple Steps
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={10} lg={8} className="paragraph mx-auto">
          <p>
            Do you need a coach or minibus hire? Look no further. Our coach hire
            team will work hard to ensure that your journey runs as smoothly as
            possible. Our logistics experts will also ensure that your coach
            hire and minibus hire journey are quality checked and delivered to
            the standard and budget you need. Get an Online quote now or call us
            today for immediate assistance.
          </p>
        </Col>
      </Row>
      <Row className="phoneRow">
        <Col xs={12} md={6} className="phoneNumber text-center">
          <a href="#">
            <FontAwesomeIcon icon={faPhone} /> 0800 783 3243
          </a>
        </Col>
        <Col xs={12} md={6} className="phoneNumber text-center">
          <a href="#">
            <FontAwesomeIcon icon={faPhone} /> 01582 206 207
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ComparePrice;
