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
        <Navbar.Brand as="div" className="logo-wrapper">
          <Link to="/">
            <img alt="Coach Hire Logo" src={coachHireLogo} className="logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Menu on the right */}
          <Nav className="navbar-nav ms-auto">
            {" "}
            {/* Aligns items to the right */}
            <NavDropdown title={t("Area")} id="area">
              <NavDropdown.Item as="div">
                <Link to="/LondonCoachHire" className="dropdown-link">
                  London Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/EnglandCoachHire" className="dropdown-link">
                  England Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/IrelandCoachHire" className="dropdown-link">
                  Ireland Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/ScotlandCoachHire" className="dropdown-link">
                  Scotland Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/WalesCoachHire" className="dropdown-link">
                  Wales Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/EuropeanCoachHire" className="dropdown-link">
                  European Coach Hire
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("Service")} id="service">
              <NavDropdown.Item as="div">
                <Link to="/AirportTransfer" className="dropdown-link">
                  Airport Transfer
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/EventFestival" className="dropdown-link">
                  Event / Festival
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/EducationCoachHire" className="dropdown-link">
                  Education Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/CoachHireByDestination" className="dropdown-link">
                  Coach Hire by Destination
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/CorporateCoachHire" className="dropdown-link">
                  Corporate Coach Hire
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("Fleet")} id="fleet">
              <NavDropdown.Item as="div">
                <Link to="/1619MiniBus" className="dropdown-link">
                  16-19 Mini Bus
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/2034SeatCoach" className="dropdown-link">
                  20-34 Seat Coach
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/5053SeatCoach" className="dropdown-link">
                  50-53 Seat Coach
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/5361SeatCoach" className="dropdown-link">
                  53-61 Seat Coach
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/7074SeatCoach" className="dropdown-link">
                  70-74 Seat Coach
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/CheapCoachHire" className="dropdown-link">
                  Cheap Coach Hire
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("Things To Do")} id="thingstodo">
              <NavDropdown.Item as="div">
                <Link to="/FestivalCoachHire" className="dropdown-link">
                  Festival Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/EventCoachHire" className="dropdown-link">
                  Events Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/SportCoachHire" className="dropdown-link">
                  Sports Coach Hire
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/UkToursCoachHire" className="dropdown-link">
                  UK Tours Coach Hire
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("About Us")} id="aboutUs">
              <NavDropdown.Item as="div">
                <Link to="/Blog" className="dropdown-link">
                  Blog
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/Careers" className="dropdown-link">
                  Careers
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <Link to="/Partners" className="dropdown-link">
                  Partners
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
