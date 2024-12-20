import { Card, Col, Container, Row } from "react-bootstrap";
import TrustCard from "../TrustCard/TrustCard.jsx";
import './TrustBanner.css';
import { useTranslation } from "react-i18next";

function TrustBanner() {
const { t } = useTranslation();
    const trustCardTitle = "why choose us for your coach hire"
    const safe = "Passenger safety is our highest priority."
    const trusted = "We are Trusted by clients that use us again and again."
    const reliable = "You can trust Coachhire4u, every step of the way."
    const flexible = "Our depth of resource ensures there is always a solution!"
    const value = "Our team are passionate in providing you an excellent service at the best value."
    const easy = "Get your quote in 30 seconds or simply call our friendly team!"

  return (
    <>
      <Card>
      <Card.Title className="myCardTitle">{t("trustCardTitle")}</Card.Title>
        <Container>
          <Row>
            <Col>
              <TrustCard title={t("safeTitle")} body={t("safe")} />
            </Col>
            <Col>
              <TrustCard title={t("trustedTitle")} body={t("trusted")}/>
            </Col>
            <Col>
              <TrustCard title={t("reliableTitle")} body={t("reliable")}/>
            </Col>
            <Col>
              <TrustCard title={t("flexibleTitle")} body={t("flexible")}/>
            </Col>
            <Col>
              <TrustCard title={t("valueTitle")} body={t("value")}/>
            </Col>
            <Col>
              <TrustCard title={t("easyTitle")} body={t("easy")}/>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default TrustBanner;
