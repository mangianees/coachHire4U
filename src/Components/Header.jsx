import { Navbar, Container, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import facebook from "../images//Social Media/facebook.png";
import x from "../images//Social Media/x.png";
import instagram from "../images/Social Media/instagram.png";
import linkedin from "../images//Social Media/linkedin.png";
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
    i18n.changeLanguage(selectedCode); // Change language globally
  };

  return (
    <Navbar className="bgColor">
      <Container>
        <Navbar.Brand href="#home" className="header-brand">
          <span
            style={{
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faPhone} /> 0800 783 3243
            <FontAwesomeIcon icon={faEnvelope} /> sales@coachhire4u.com
          </span>
        </Navbar.Brand>
        <div className="social-icons-container">
          
          <Stack direction="horizontal" gap={2} className="align-items-center">
            <img
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              style={{ width: "30px", height: "20px" }}
            />
            <select
              value={selectedLanguage.code}
              onChange={handleLanguageChange}
              style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>
          </Stack>

          {/* Social Media Icons */}
          <a
            className="header-logo"
            href="https://www.facebook.com/CoachHire4U/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Facebook"
              src={facebook}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>
          <a
            className="header-logo"
            href="https://x.com/coachhire4u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="X"
              src={x}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>
          <a
            className="header-logo"
            href="https://www.instagram.com/ch4ugrouptravel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Instagram"
              src={instagram}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>
          <a
            className="header-logo"
            href="https://www.linkedin.com/company/coachhire4u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="LinkedIn"
              src={linkedin}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
