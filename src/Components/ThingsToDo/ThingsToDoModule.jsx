import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./ThingsToDo.css";
import "../Quote/Quote.css";
import MyCard from "../Card/MyCard.jsx";
import { useTranslation } from "react-i18next";
import thingsToDo01 from '../../images/ThingsToDo/thingsToDo1.jpg'
import thingsToDo02 from '../../images/ThingsToDo/thingsToDo2.jpg'
import thingsToDo03 from '../../images/ThingsToDo/thingsToDo3.jpg'
export const VariablesThingsToDo = () => {
  const { t } = useTranslation();

  const thingsTitle = "THINGS TO DO";
  const thingsBody =
    "If you’re arranging a british history tour for your students or want to show the magic of UK to your corporate clients or colleagues, look no further. We can cater to all your group travel needs and at a fraction of the cost of other transportation options.";

  const economyCardBody =
    "The ideal solution for all those who are looking for the cheapest coachhire services. All our vehicles comply with safety regulations.";
  const businessCardBody =
    "Dedicated to Businesses of all sizes as we have a wide range of vehicles in the business executive class. It's perfect service for no-frills airport transfers of smaller or larger groups.";
  const vipCardBody =
    "Luxurious service for special occasions. Whenever you need that exceptional coach, choose our limited edition pack with VIP Class.";

  const card1Title = t("LARMAL FESTIVAL");
  const card2Title = t("HORSE RACING LONDON");
  const card3Title = t("MUSEUM AND DAY TRIP");
};

export const CardThingsToDo = () => {
    const { t } = useTranslation();
    return(
        <Card>
        <Container>
          {/* Header Section */}
          <Row className="OurFleetHeader">
            <Col>
              <h2>{t("thingsTitle")}</h2>
              <p>
                {t("thingsBody")}
              </p>
              <Button className="myButton"> {t("READ MORE")}</Button>
            </Col>
          </Row>

          {/* Cards Section */}
          <Row className="fleet-cards">
            <Col md={4} className="card-container">
              <MyCard cardTitle={t("card1Title")} cardImage={thingsToDo02} />
              
              
            </Col>

            <Col md={4} className="card-container">
              <MyCard
                cardTitle={t("card2Title")}
                cardImage={thingsToDo01}
              />
              
            </Col>

            <Col md={4} className="card-container">
              <MyCard
                cardTitle={t("card3Title")}
                cardImage={thingsToDo03}
              />

              
            </Col>
          </Row>
        </Container>
      </Card>
    )
};
