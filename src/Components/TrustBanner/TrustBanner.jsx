import { Card, Col, Container, Row } from "react-bootstrap";
import TrustCard from "../ComparePrice/TrustCard/TrustCard";
import './TrustBanner.css'
function TrustBanner() {

    const cardTitle = "why choose us for your coach hire"
    const safe = "Passenger safety is our highest priority."
    const trusted = "We are Trusted by clients that use us again and again."
    const reliable = "You can trust Coachhire4u, every step of the way."
    const flexible = "Our depth of resource ensures there is always a solution!"
    const value = "Our team are passionate in providing you an excellent service at the best value."
    const easy = "Get your quote in 30 seconds or simply call our friendly team!"

  return (
    <>
      <Card>
      <Card.Title className="myCardTitle">{cardTitle.toUpperCase()}</Card.Title>
        <Container>
          <Row>
            <Col>
              <TrustCard title={"Safe"} body={safe} />
            </Col>
            <Col>
              <TrustCard title={"Trusted"} body={trusted}/>
            </Col>
            <Col>
              <TrustCard title={"Reliable"} body={reliable}/>
            </Col>
            <Col>
              <TrustCard title={"Flexible"} body={flexible}/>
            </Col>
            <Col>
              <TrustCard title={"Value"} body={value}/>
            </Col>
            <Col>
              <TrustCard title={"Easy"} body={easy}/>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default TrustBanner;
