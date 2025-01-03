import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import mobilePhone from "../../images/MobileAppBanner/mobilePhone.png";
import googlePlayStore from "../../images/MobileAppBanner/googlePlayStore.png";
import appleStore from "../../images/MobileAppBanner/appleStore.png";
import "./MobileAppBanner.css";

export const MobileApp = () => {
  const { t } = useTranslation();
  const mobileAppTitle = "Mobile App Coming Soon";
  return (
    <Container fluid className="GreenBackground">
      <Row>
        <Col xs={12} className="text-center">
          <h1>{t("mobileAppTitle")}</h1>
        </Col>
      </Row>
      <Row className="phoneRow">
        <Col xs={12} md={6} className="text-center">
          <div>
            <a href="#">
              <img
                src={googlePlayStore}
                alt="Google Play Store"
                className="storeIcons"
              />
            </a>
            <a href="#">
              <img src={appleStore} alt="Apple Store" className="storeIcons" />
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <a href="#">
            <img className="mobilePhoto" src={mobilePhone} alt="Mobile Phone" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
