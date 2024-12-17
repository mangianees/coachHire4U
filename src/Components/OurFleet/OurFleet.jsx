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
    "Dedicated to Businesses of all sizes as we have a wide range of vehicles in the bussines executive class, its perfect service for no-frills airport transfers of smaller or larger groups.";
  const vipCardBody =
    "Luxurious service for special ocassions, Whenever you need that exceptional coach choose our limited edition pack with VIP Class.";
  return (
    <>
      <br />
      <Card>
        <Container>
          <Row className="OurFleetHeader">
            <Col xs={3}>
              <h2>OUR FLEET</h2>
            </Col>
            <Col>
              <p>
                Whether you’re arranging a small or a big group trip for either
                business or leisure, look no further. Our fleet comprises
                vehicle of all sizes so that we can provide high-level services
                to corporations, schools and private alike.
              </p>

              <Button className="myButton"> Read More</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <MyCard
                cardTitle="Economy Class"
                cardBody={economyCardBody}
                cardImage={economyClassImage}
              />
              <Button className="myButton buttonAtBottom" size="lg">
                Book Now
              </Button>
            </Col>
            <Col>
              <MyCard
                cardTitle="Business Class"
                cardBody={businessCardBody}
                cardImage={businessClassImage}
              />
              <Button className="myButton buttonAtBottom" size="lg">
                Book Now
              </Button>
            </Col>
            <Col>
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
          <Row></Row>
        </Container>
      </Card>
      <ComparePrice />
    </>
  );
}

export default OurFleet;
