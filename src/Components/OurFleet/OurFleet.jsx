import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./OurFleet.css"
import "../../Components/Qoute/Qoute.css"

function OurFleet() {
    return (
      <>
        <br />
        <Card>
          <Container fluid="md">
            <Row   className="OurFleetHeader">
              <Col xs={3}>
                <h2>OUR FLEET</h2>
              </Col>
              <Col>
                <p>
                  Whether you’re arranging a small or a big group trip for either
                  business or leisure, look no further. Our fleet comprises
                  vehicle of all sizes so that we can provide high-level services
                  to corporations, schools and private alike.
                </p>

                <Button className="myButton"> Read More</Button>
              </Col>
            </Row>
          </Container>
        </Card>
      </>
    );
  }
  
  export default OurFleet;
  