import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./OurFleet.css";
import "../Quote/Quote.css";
import MyCard from "../Card/MyCard.jsx";
import economyClassImage from "../../images/thumbnail_Economy.jpg";
import businessClassImage from "../../images/thumbnail_Business.jpg";
import vipClassImage from "../../images/thumbnail_Vip.jpg";
import ComparePrice from "../ComparePrice/ComparePrice.jsx";
import {variablesForFunctions,economyClassIcons,businessClassIcons,vipClassIcons}from './OurFleetModule.jsx'

import { useTranslation } from "react-i18next";

function OurFleet() {
  const { t } = useTranslation();
  variablesForFunctions();
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
              {economyClassIcons()}

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

              {businessClassIcons()}

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

              {vipClassIcons()}
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
