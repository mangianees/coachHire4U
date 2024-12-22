import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {
  AboutUs,
  Area,
  CompanyLogo,
  Fleet,
  Service,
  ThingsToDo,
} from "./MyNavbarModule";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="moveToRight">
      <Container fluid>
        {CompanyLogo()}

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Menu on the right */}
          <Nav className="navbar-nav ms-auto">
            {" "}
            {/* Aligns items to the right */}
            {Area()}
            {Service()}
            {Fleet()}
            {ThingsToDo()}
            {AboutUs()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
