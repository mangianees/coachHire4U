import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays,faPeopleGroup,faBuildingFlag } from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import '../Qoute/Qoute.css'
import { useState } from "react";

function Qoute() {

  const [checked,setChecked] = useState(false);

  const handleChange =(event)=>{
    setChecked(event.target.checked)
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={8} >
            <Card className="QouteMainBox">
              <Card.Body>
                <Form>
                  <Form.Check 
                    type="switch"
                    label="Return"
                    checked={checked}
                    onChange={handleChange}
                    name="returnBtn"
                  />
                  
                  <br />
                  <Row>
                    <Col>
                      <Form.Label>
                        <FontAwesomeIcon icon={faLocationDot} /> Travel From
                      </Form.Label>
                      <Form.Control type="text" placeholder="Travel From" />
                      <br />
                      <Form.Label>
                      <FontAwesomeIcon icon={faCalendarDays} /> Departure Date
                      </Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control type="date" />
                                
                                </Col>
                                <Col>
                                    <Form.Select aria-label="Default select example">
                                        <option>Time</option>
                                        <option value="1">00:00</option>
                                        <option value="2">00:30</option>
                                        <option value="3">01:00</option>
                                    </Form.Select>
                                
                                </Col>
                                  
                                <Form.Label>
                                    <br />
                                <FontAwesomeIcon icon={faPeopleGroup} /> Number of Peoples
                                </Form.Label>
                                <Form.Select aria-label="Default select example">
                                        <option>No of Passengers</option>
                                        <option value="1">10</option>
                                        <option value="2">20</option>
                                        <option value="3">30</option>
                                    </Form.Select>
                            </Row>

                    </Col>
                    <br />
                    <Col>
                      <Form.Label><FontAwesomeIcon icon={faLocationDot} /> Travel To</Form.Label>
                      <Form.Control type="text" placeholder="Travel To" />
                      {checked && (
                        <>
                      <br />
                      <Form.Label>
                      <FontAwesomeIcon icon={faCalendarDays} /> Return Date 
                      </Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control type="date" />
                                </Col>
                                <Col>
                                    <Form.Select aria-label="Default select example">
                                        <option>Time</option>
                                        <option value="1">00:00</option>
                                        <option value="2">00:30</option>
                                        <option value="3">01:00</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            </>)}
                            <br />  
                                <Form.Label>
                                <FontAwesomeIcon icon={faBuildingFlag} /> Trip Reason
                                </Form.Label>
                                <Form.Select aria-label="Default select example">
                                        <option >Trip Reason</option>
                                        <option value="1">Birthday</option>
                                        <option value="2">Party</option>
                                        <option value="3">Official</option>
                                    </Form.Select>
                    </Col>
                  </Row>
                  <br />
                <Button className="ProceedButton"> Proceed</Button>
                </Form>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            
            
          </Col>


        </Row>
      </Container>
    </>
  );
}

export default Qoute;
