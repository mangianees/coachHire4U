import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useViewport, SwapIcon, TravelInput, DateTimeInput } from "./QuoteModule";
import VimeoVideoPlayer from "../VimeoVideo/VimeoVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDays, faPeopleGroup, faBuildingFlag } from "@fortawesome/free-solid-svg-icons";
import "./Quote.css";
import './QuoteModule'

function Quote() {
  const [checked, setChecked] = useState(false);
  const [travelTo, setTravelTo] = useState("");
  const [travelFrom, setTravelFrom] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const isMobile = useViewport();

  const { t } = useTranslation();

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
            <h2>
              {t("Get An")} <span>{t("Instant Quote")}</span> {t("Now")}
            </h2>
            <Card.Body className="d-flex flex-column">
              <Form>
                <Form.Check
                  type="switch"
                  label={t("Return")}
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  tabIndex={0}
                  className="mb-3"
                />

                <Row className="mb-3">
                  <TravelInput
                    label="Travel From"
                    icon={faLocationDot}
                    value={travelFrom}
                    onChange={(e) => setTravelFrom(e.target.value)}
                    placeholder="Travel From"
                    tabIndex={1}
                  />
                  <Col xs={12} md={2} className="text-center swap-icon">
                    <SwapIcon isMobile={isMobile} handleSwap={handleSwapTravel} />
                  </Col>
                  <TravelInput
                    label="Travel To"
                    icon={faLocationDot}
                    value={travelTo}
                    onChange={(e) => setTravelTo(e.target.value)}
                    placeholder="Travel To"
                    tabIndex={2}
                  />
                </Row>

                <Row className="mb-3">
                  <DateTimeInput
                    label={t("Departure Date")}
                    icon={faCalendarDays}
                    type="date"
                    tabIndex={3}
                  />
                  <DateTimeInput
                    label={t("Departure Date")}
                    icon={faCalendarDays}
                    type="select"
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                    tabIndex={4}
                  />
                </Row>

                {checked && (
                  <Row className="mb-3">
                    <DateTimeInput
                      label={t("Return Date")}
                      icon={faCalendarDays}
                      type="date"
                      tabIndex={5}
                    />
                    <DateTimeInput
                      label={t("Return Date")}
                      icon={faCalendarDays}
                      type="select"
                      value={returnTime}
                      onChange={(e) => setReturnTime(e.target.value)}
                      tabIndex={6}
                    />
                  </Row>
                )}

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

              <div className="mt-auto d-flex justify-content-end">
                <Button className="myButton" tabIndex={9}>
                  {t("Proceed")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <VimeoVideoPlayer />
        </Col>
      </Row>
    </Container>
  );
}

export default Quote;
