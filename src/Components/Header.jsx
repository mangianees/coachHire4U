import { Navbar, Container, Row, Col, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import facebook from "../images/Social Media/facebook.png";
import x from "../images/Social Media/x.png";
import instagram from "../images/Social Media/instagram.png";
import linkedin from "../images/Social Media/linkedin.png";
import UnitedKingdom from "../images/flags/uk.png";
import Spain from "../images/flags/spain.png";
import Germany from "../images/flags/germany.png";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: UnitedKingdom },
    { code: "es", name: "Spanish", flag: Spain },
    { code: "de", name: "German", flag: Germany },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (event) => {
    const selectedCode = event.target.value;
    const language = languages.find((lang) => lang.code === selectedCode);
    setSelectedLanguage(language);
    i18n.changeLanguage(selectedCode);
  };

  return (
    <Navbar className="bg-body-tertiary bgColor py-2">
      <Container>
        <Row className="align-items-center w-100">
          {/* Left Section: Contact Information */}
          <Col xs={12} lg={6} className="text-center text-lg-start mb-2 mb-lg-0">
            <div>
              <FontAwesomeIcon icon={faPhone} /> 0800 783 3243
              <span className="mx-3 d-none d-lg-inline">|</span>
              <FontAwesomeIcon icon={faEnvelope} /> sales@coachhire4u.com
            </div>
          </Col>

          {/* Right Section: Language Selector and Social Media Icons */}
          <Col xs={12} lg={6} className="text-center text-lg-end">
            <div className="d-flex justify-content-center justify-content-lg-end align-items-center flex-wrap gap-3">
              {/* Language Selector */}
              <Stack direction="horizontal" gap={2} className="align-items-center">
                <img
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.name}
                  style={{ width: "30px", height: "20px" }}
                />
                <select
                  value={selectedLanguage.code}
                  onChange={handleLanguageChange}
                  className="form-select form-select-sm"
                  style={{ maxWidth: "150px" }}
                >
                  {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </Stack>

              {/* Social Media Icons */}
              <div className="d-flex gap-2">
                <a
                  href="https://www.facebook.com/CoachHire4U/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Facebook"
                    src={facebook}
                    width="30"
                    height="30"
                    className="d-inline-block"
                  />
                </a>
                <a
                  href="https://x.com/coachhire4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="X"
                    src={x}
                    width="30"
                    height="30"
                    className="d-inline-block"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ch4ugrouptravel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Instagram"
                    src={instagram}
                    width="30"
                    height="30"
                    className="d-inline-block"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/coachhire4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="LinkedIn"
                    src={linkedin}
                    width="30"
                    height="30"
                    className="d-inline-block"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
