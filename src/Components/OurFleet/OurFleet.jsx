import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./OurFleet.css";
import "../Quote/Quote.css";
import MyCard from "../Card/MyCard.jsx";
import economyClassImage from "../../images/thumbnail_Economy.jpg";
import businessClassImage from "../../images/thumbnail_Business.jpg";
import vipClassImage from "../../images/thumbnail_Vip.jpg";
import ComparePrice from "../ComparePrice/ComparePrice.jsx";
import seatBelt from "../../images/Card Icons/seatBelt.png";
import seat from "../../images/Card Icons/seat.png";
import snowflake from "../../images/Card Icons/snowflake.png";
import mic from "../../images/Card Icons/mic.png";
import toilet from "../../images/Card Icons/toilet.png";
import onlineVideo from "../../images/Card Icons/onlineVideo.png";
import monitor from "../../images/Card Icons/monitor.png";
import softDrink from "../../images/Card Icons/softDrink.png";
import charginPort from "../../images/Card Icons/plug.png";
import tabledChairs from "../../images/Card Icons/meeting.png";
import wifi from "../../images/Card Icons/wifi.png";

import { useTranslation } from "react-i18next";

function OurFleet() {
  const { t } = useTranslation();
  const economyClassBody =
    "The ideal solution for all those who are looking for the cheapest coachhire services. All our vehicles comply with safety regulations.";
  const businessClassBody =
    "Dedicated to Businesses of all sizes as we have a wide range of vehicles in the business executive class. It's perfect service for no-frills airport transfers of smaller or larger groups.";
  const vipClassBody =
    "Luxurious service for special occasions. Whenever you need that exceptional coach, choose our limited edition pack with VIP Class.";

  const ourFleetMessage =
    "Whether you’re arranging a small or a big group trip for either business or leisure, look no further. Our fleet comprises vehicles of all sizes so that we can provide high-level services to corporations, schools, and private groups alike.";

  return (
    <>
      <br />
      <Card>
        <Container>
          {/* Header Section */}
          <Row className="OurFleetHeader">
            <Col>
              <h2>{t("OUR FLEET")}</h2>
              <p>{t("ourFleetMessage")}</p>
              <Button className="myButton"> {t("READ MORE")}</Button>
            </Col>
          </Row>

          {/* Cards Section */}
          <Row className="fleet-cards">
            <Col md={4} className="card-container">
              <MyCard
                cardTitle={t("Economy Class")}
                cardBody={t("economyClassBody")}
                cardImage={economyClassImage}
              />
              <Container className="containerMargin">
                <Row>
                  <div className="d-flex gap-2">
                    <img
                      alt="Seat"
                      src={seat}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="Seat Belt"
                      src={seatBelt}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                  </div>
                </Row>
              </Container>

              <Button className="myButton buttonAtBottom" size="lg">
                {t("Book Now")}
              </Button>
            </Col>

            <Col md={4} className="card-container">
              <MyCard
                cardTitle={t("Business Class")}
                cardBody={t("businessClassBody")}
                cardImage={businessClassImage}
              />
              <Container className="containerMargin">
                <Row>
                  <div className="d-flex gap-2">
                    <img
                      alt="Seat"
                      src={seat}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="Seat Belt"
                      src={seatBelt}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                    <img
                      alt="Air Conditioned"
                      src={snowflake}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="Video Player"
                      src={onlineVideo}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                    <img
                      alt="Monitor"
                      src={monitor}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="Mic"
                      src={mic}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                    <img
                      alt="Toilet"
                      src={toilet}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                  </div>
                </Row>
              </Container>

              <Button className="myButton buttonAtBottom" size="lg">
              {t("Book Now")}
              </Button>
            </Col>

            <Col md={4} className="card-container">
              <MyCard
                cardTitle={t("VIP Class")}
                cardBody={t("vipClassBody")}
                cardImage={vipClassImage}
              />

              <Container className="containerMargin">
                <Row>
                  <div className="d-flex gap-2">
                    <img
                      alt="Seat"
                      src={seat}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="Seat Belt"
                      src={seatBelt}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                    <img
                      alt="Air Conditioned"
                      src={snowflake}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="Video Player"
                      src={onlineVideo}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                    <img
                      alt="Monitor"
                      src={monitor}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="Mic"
                      src={mic}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                  </div>
                </Row>
                <Row>
                  <div className="d-flex gap-2">
                    <img
                      alt="Toilet"
                      src={toilet}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="WiFi"
                      src={wifi}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                    <img
                      alt="Charging Port"
                      src={charginPort}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />

                    <img
                      alt="Soft Drink"
                      src={softDrink}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                    <img
                      alt="Table Seats"
                      src={tabledChairs}
                      width="30"
                      height="30"
                      className="d-inline-block"
                    />
                  </div>
                </Row>
              </Container>
              <Button className="myButton buttonAtBottom" size="lg">
                {t("Book Now")}
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
