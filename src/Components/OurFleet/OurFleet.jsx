import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./OurFleet.css";
import "../../Components/Qoute/Qoute.css";
import MyCard from "../Card/MyCard.jsx";
import economyClassImage from "../../images/thumbnail_Economy.jpg";
import businessClassImage from "../../images/thumbnail_Business.jpg";
import vipClassImage from "../../images/thumbnail_Vip.jpg";
import ComparePrice from "../ComparePrice/ComparePrice.jsx";

function OurFleet() {
  const economyCardBody =
    "The ideal solution for all those who are looking for the cheapest coachhire services. All our vehicles comply with safety regulations.";
  const businessCardBody =
    "Dedicated to Businesses of all sizes as we have a wide range of vehicles in the business executive class. It's perfect service for no-frills airport transfers of smaller or larger groups.";
  const vipCardBody =
    "Luxurious service for special occasions. Whenever you need that exceptional coach, choose our limited edition pack with VIP Class.";

  return (
    <>
      <br />
      <Card>
        <Container>
          {/* Header Section */}
          <Row className="OurFleetHeader">
            <Col>
              <h2>OUR FLEET</h2>
              <p>
                Whether you’re arranging a small or a big group trip for either
                business or leisure, look no further. Our fleet comprises
                vehicles of all sizes so that we can provide high-level services
                to corporations, schools, and private groups alike.
              </p>
              <Button className="myButton"> Read More</Button>
            </Col>
          </Row>

          {/* Cards Section */}
          <Row className="fleet-cards">
            <Col md={4} className="card-container">
              <MyCard
                cardTitle="Economy Class"
                cardBody={economyCardBody}
                cardImage={economyClassImage}
              />
              <Button className="myButton buttonAtBottom" size="lg">
                Book Now
              </Button>
            </Col>
            <Col md={4} className="card-container">
              <MyCard
                cardTitle="Business Class"
                cardBody={businessCardBody}
                cardImage={businessClassImage}
              />
              <Button className="myButton buttonAtBottom" size="lg">
                Book Now
              </Button>
            </Col>
            <Col md={4} className="card-container">
              <MyCard
                cardTitle="VIP Class"
                cardBody={vipCardBody}
                cardImage={vipClassImage}
              />
              <Button className="myButton buttonAtBottom" size="lg">
                Book Now
              </Button>
            </Col>
          </Row>
        </Container>
      </Card>
      <ComparePrice />
    </>
  );
}

export default OurFleet;
