import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import coachHireLogo from '../../images/CoachHireLogo.png';
import './MyNavbar.css'; 
import { useTranslation } from "react-i18next";

function MyNavbar() {
  const { t } = useTranslation();
  
  return (
    <Navbar expand="lg" className="moveToRight">
      <Container fluid>
        {/* Logo on the left */}
        <Navbar.Brand href="#" className="logo-wrapper">
          <img
            alt="Coach Hire Logo"
            src={coachHireLogo}
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Menu on the right */}
          <Nav className="navbar-nav ms-auto"> {/* Aligns items to the right */}
            <NavDropdown title={t("Area")} id="area">
              <NavDropdown.Item href="#action3">London Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">England Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Ireland Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Scotland Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Wales Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">European Coach Hire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("Service")} id="service">
              <NavDropdown.Item href="#action3">Airport Transfer</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Event / Festival</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Education Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Coach Hire by Destination</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Corporate Coach Hire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("Fleet")} id="fleet">
              <NavDropdown.Item href="#action3">16-19 Mini Bus</NavDropdown.Item>
              <NavDropdown.Item href="#action3">20-34 Seat Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action3">50-53 Seat Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action3">53-61 Seat Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action3">70-74 Seat Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Cheap Coach Hire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("Things To Do")} id="thingstodo">
              <NavDropdown.Item href="#action3">Festival Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Events Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Sports Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">UK Tours Coach Hire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("About Us")} id="aboutUs">
              <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Career</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Partners</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
