import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faPeopleGroup,
  faBuildingFlag,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "../Qoute/Qoute.css";
import VimeoVideoPlayer from "../VimeoVideo/VimeoVideo";
// Translation settings
import { useTranslation } from "react-i18next";

function Qoute() {
  const [checked, setChecked] = useState(false);
  const [travelTo, setTravelTo] = useState("");
  const [travelFrom, setTravelFrom] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [returnTime, setReturnTime] = useState("");

  // Translation setting
  const { t } = useTranslation();

  // Swap the values of travelTo and travelFrom
  const handleSwapTravel = () => {
    setTravelTo((prevTravelTo) => {
      const newTravelTo = travelFrom;
      setTravelFrom(prevTravelTo);
      return newTravelTo;
    });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Card className="QouteMainBox">
            <Card.Body className="d-flex flex-column">
              <Form>
                {/* Switch for Return Trip */}
                <Form.Check
                  type="switch"
                  label={t("Return")}
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  tabIndex={0}
                  className="mb-3"
                />
                
                {/* Travel From */}
                <Row className="mb-3">
                  <Col xs={12} md={5}>
                    <Form.Label>
                      <FontAwesomeIcon icon={faLocationDot} /> {t("Travel From")}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={t("Travel From")}
                      value={travelFrom}
                      onChange={(e) => setTravelFrom(e.target.value)}
                      tabIndex={1}
                    />
                  </Col>
                  <Col xs={12} md={2} className="text-center">
                    <FontAwesomeIcon
                      icon={faRepeat}
                      className="swap-icon"
                      onClick={handleSwapTravel}
                      style={{
                        cursor: "pointer",
                        fontSize: "1.5rem",
                        marginTop: "1.5rem",
                      }}
                    />
                  </Col>
                  {/* Travel To */}
                  <Col xs={12} md={5}>
                    <Form.Label>
                      <FontAwesomeIcon icon={faLocationDot} /> {t("Travel To")}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={t("Travel To")}
                      value={travelTo}
                      onChange={(e) => setTravelTo(e.target.value)}
                      tabIndex={2}
                    />
                  </Col>
                </Row>

                {/* Departure Date and Time */}
                <Row className="mb-3">
                  <Col xs={12} md={6}>
                    <Form.Label>
                      <FontAwesomeIcon icon={faCalendarDays} /> {t("Departure Date")}
                    </Form.Label>
                    <Form.Control
                      type="date"
                      tabIndex={3}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Label>{t("Departure Time")}</Form.Label>
                    <Form.Select
                      aria-label="Select Departure Time"
                      value={departureTime}
                      onChange={(e) => setDepartureTime(e.target.value)}
                      tabIndex={4}
                    >
                      <option>{t("Time")}</option>
                      <option value="1">00:00</option>
                      <option value="2">00:30</option>
                      <option value="3">01:00</option>
                    </Form.Select>
                  </Col>
                </Row>

                {/* Return Date and Time (if checked) */}
                {checked && (
                  <Row className="mb-3">
                    <Col xs={12} md={6}>
                      <Form.Label>
                        <FontAwesomeIcon icon={faCalendarDays} /> {t("Return Date")}
                      </Form.Label>
                      <Form.Control type="date" tabIndex={5} />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>{t("Return Time")}</Form.Label>
                      <Form.Select
                        aria-label="Select Return Time"
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                        tabIndex={6}
                      >
                        <option>{t("Time")}</option>
                        <option value="1">00:00</option>
                        <option value="2">00:30</option>
                        <option value="3">01:00</option>
                      </Form.Select>
                    </Col>
                  </Row>
                )}

                {/* Number of People */}
                <Row className="mb-3">
                  <Col xs={12}>
                    <Form.Label>
                      <FontAwesomeIcon icon={faPeopleGroup} /> {t("Number of People")}
                    </Form.Label>
                    <Form.Select aria-label="Default select example" tabIndex={7}>
                      <option>{t("No of Passengers")}</option>
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                    </Form.Select>
                  </Col>
                </Row>

                {/* Trip Reason */}
                <Row className="mb-3">
                  <Col xs={12}>
                    <Form.Label>
                      <FontAwesomeIcon icon={faBuildingFlag} /> {t("Trip Reason")}
                    </Form.Label>
                    <Form.Select aria-label="Default select example" tabIndex={8}>
                      <option>{t("Trip Reason")}</option>
                      <option value="1">{t("Birthday")}</option>
                      <option value="2">{t("Party")}</option>
                      <option value="3">{t("Official")}</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form>

              {/* Proceed Button - Positioned to Bottom Right */}
              <div className="mt-auto d-flex justify-content-end">
                <Button className="myButton" tabIndex={9}>
                  {t("Proceed")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Video Player Column */}
        <Col xs={12} md={4}>
          <VimeoVideoPlayer />
        </Col>
      </Row>
    </Container>
  );
}

export default Qoute;
