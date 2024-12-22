import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import coachHireLogo from "../../images/CoachHireLogo.png";
import "./MyNavbar.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function MyNavbar() {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" className="moveToRight">
      <Container fluid>
        {/* Logo on the left */}
        <Link to="/">
          <Navbar.Brand as="div" className="logo-wrapper">
            <img alt="Coach Hire Logo" src={coachHireLogo} className="logo" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Menu on the right */}
          <Nav className="navbar-nav ms-auto">
            {" "}
            {/* Aligns items to the right */}
            <NavDropdown title={t("Area")} id="area">
              <Link to="/LondonCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("London Coach Hire")}
                </NavDropdown.Item>
                <Link to="/EnglandCoachHire" className="dropdown-link"></Link>
                <NavDropdown.Item as="div">
                  {t("England Coach Hire")}
                </NavDropdown.Item>
              </Link>
              <Link to="/IrelandCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Ireland Coach Hire")}
                </NavDropdown.Item>
              </Link>
              <Link to="/ScotlandCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Scotland Coach Hire")}
                </NavDropdown.Item>
              </Link>
              <Link to="/WalesCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Wales Coach Hire")}
                </NavDropdown.Item>
              </Link>
              <Link to="/EuropeanCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("European Coach Hire")}
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title={t("Service")} id="service">
              <Link to="/AirportTransfers" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Airport Transfer")}
                </NavDropdown.Item>
              </Link>
              <Link to="/EventsFestivals" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("EventFestival")}
                </NavDropdown.Item>
              </Link>
              <Link to="/EducationCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Education Coach Hire")}
                </NavDropdown.Item>
              </Link>
              <Link to="/CoachHireByDestination" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Coach Hire by Destination")}
                </NavDropdown.Item>
              </Link>
              <Link to="/CorporateCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Corporate Coach Hire")}
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title={t("Fleet")} id="fleet">
              <Link to="/SeatMiniBux1619" className="dropdown-link">
                <NavDropdown.Item as="div">
                  16-19 {t("Mini Bus")}
                </NavDropdown.Item>
              </Link>
              <Link to="/SeatCoach2034" className="dropdown-link">
                <NavDropdown.Item as="div">
                  20-34 {t("Seat Coach")}
                </NavDropdown.Item>
              </Link>
              <Link to="/SeatCoach5053" className="dropdown-link">
                <NavDropdown.Item as="div">
                  50-53 {t("Seat Coach")}
                </NavDropdown.Item>
              </Link>
              <Link to="/SeatCoach5361" className="dropdown-link">
                <NavDropdown.Item as="div">
                  53-61 {t("Seat Coach")}
                </NavDropdown.Item>
              </Link>
              <Link to="/SeatCoach7074" className="dropdown-link">
                <NavDropdown.Item as="div">
                  70-74 {t("Seat Coach")}
                </NavDropdown.Item>
              </Link>
              <Link to="/CheapCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Cheap Coach Hire")}
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title={t("Things To Do")} id="thingstodo">
              <Link to="/FestivalCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("Festival Coach Hire")}
                </NavDropdown.Item>
              </Link>
              <Link to="/EventsCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">{t("Events Coach Hire")}</NavDropdown.Item>
              </Link>
              <Link to="/SportsCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">{t("Sports Coach Hire")}</NavDropdown.Item>
              </Link>
              <Link to="/UKToursCoachHire" className="dropdown-link">
                <NavDropdown.Item as="div">
                  {t("UK Tours Coach Hire")}
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title={t("About Us")} id="aboutUs">
              <Link to="/Blog" className="dropdown-link">
                <NavDropdown.Item as="div">{t("Blog")}</NavDropdown.Item>
              </Link>
              <Link to="/Careers" className="dropdown-link">
                <NavDropdown.Item as="div">{t("Careers")}</NavDropdown.Item>
              </Link>
              <Link to="/OurPartners" className="dropdown-link">
                <NavDropdown.Item as="div">{t("Partners")}</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
