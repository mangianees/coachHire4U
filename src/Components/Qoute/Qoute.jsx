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

  // Translation setting 1
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
        <Col xs={8}>
          <Card className="QouteMainBox">
            <Card.Body>
              <Form>
                <Form.Check
                  type="switch"
                  label={t("Return")}
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  tabIndex={0}
                />
                <br />
                <Row>
                  <Col>
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
                    <br />
                    <Form.Label>
                      <FontAwesomeIcon icon={faCalendarDays} /> {t("Departure Date")}
                    </Form.Label>
                    <Row>
                      <Col>
                        <Form.Control type="date" tabIndex={3} />
                      </Col>
                      <Col>
                        <Form.Select aria-label="Default select example" tabIndex={4}>
                          <option>{t("Time")}</option>
                          <option value="1">00:00</option>
                          <option value="2">00:30</option>
                          <option value="3">01:00</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Form.Label>
                      <br />
                      <FontAwesomeIcon icon={faPeopleGroup} /> {t("Number of People")}
                    </Form.Label>
                    <Form.Select aria-label="Default select example" tabIndex={6}>
                      <option>{t("No of Passengers")}</option>
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                    </Form.Select>
                  </Col>
                  <Col xs={1} className="text-center">
                    <br />
                    <FontAwesomeIcon
                      icon={faRepeat}
                      className="swap-icon"
                      onClick={handleSwapTravel}
                      style={{ cursor: "pointer", fontSize: "1.5rem", marginTop: "1.5rem" }}
                    />
                  </Col>
                  <Col>
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
                    {checked && (
                      <>
                        <br />
                        <Form.Label>
                          <FontAwesomeIcon icon={faCalendarDays} /> {t("Return Date")}
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Control type="date" />
                          </Col>
                          <Col>
                            <Form.Select aria-label="Default select example">
                              <option>{t("Time")}</option>
                              <option value="1">00:00</option>
                              <option value="2">00:30</option>
                              <option value="3">01:00</option>
                            </Form.Select>
                          </Col>
                        </Row>
                      </>
                    )}
                    <br />
                    <Form.Label>
                      <FontAwesomeIcon icon={faBuildingFlag} /> {t("Trip Reason")}
                    </Form.Label>
                    <Form.Select aria-label="Default select example" tabIndex={5}>
                      <option>{t("Trip Reason")}</option>
                      <option value="1">{t("Birthday")}</option>
                      <option value="2">{t("Party")}</option>
                      <option value="3">{t("Official")}</option>
                    </Form.Select>
                  </Col>
                </Row>
                <br />
                <Button className="ProceedButton" tabIndex={7}>
                  {t("Proceed")}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <VimeoVideoPlayer />
        </Col>
      </Row>
    </Container>
  );
}

export default Qoute;
