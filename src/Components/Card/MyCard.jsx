import { Button, Card } from "react-bootstrap";
// import thumbnailEconomy from "../../images/thumbnail_Economy.jpg";
import "..//../Components/Qoute/Qoute.css";
import "./MyCard.css";

function myCard(props) {
  return (
    <>
      <Card className="myCardBox cardBody">
        <Card.Img variant="top" src={props.cardImage} />
        <Card.Body>
          <Card.Title className="cardTitle">{props.cardTitle}</Card.Title>
          <Card.Text>{props.cardBody}</Card.Text>
          </Card.Body>
      </Card>
    </>
  );
}

export default myCard;
