import { Container, Row } from "react-bootstrap";
import seatBelt from "../../images/Card Icons/seatBelt.png";
import seat from "../../images/Card Icons/seat.png";
import snowflake from "../../images/Card Icons/snowflake.png";
import mic from "../../images/Card Icons/mic.png";
import toilet from "../../images/Card Icons/toilet.png";
import onlineVideo from "../../images/Card Icons/onlineVideo.png";
import monitor from "../../images/Card Icons/monitor.png";
import softDrink from "../../images/Card Icons/softDrink.png";
import charginPort from "../../images/Card Icons/plug.png";
import tabledChairs from "../../images/Card Icons/meeting.png";
import wifi from "../../images/Card Icons/wifi.png";

// export const first = (second) => {third}

export const economyClassIcons = () => {
  return (
    <Container className="containerMargin">
      <Row>
        <div className="d-flex gap-2">
          <img
            alt="Seat"
            src={seat}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="Seat Belt"
            src={seatBelt}
            width="30"
            height="30"
            className="d-inline-block"
          />
        </div>
      </Row>
    </Container>
  );
};

export const businessClassIcons = () => {
  return (
    <Container className="containerMargin">
      <Row>
        <div className="d-flex gap-2">
          <img
            alt="Seat"
            src={seat}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="Seat Belt"
            src={seatBelt}
            width="30"
            height="30"
            className="d-inline-block"
          />
          <img
            alt="Air Conditioned"
            src={snowflake}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="Video Player"
            src={onlineVideo}
            width="30"
            height="30"
            className="d-inline-block"
          />
          <img
            alt="Monitor"
            src={monitor}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="Mic"
            src={mic}
            width="30"
            height="30"
            className="d-inline-block"
          />
          <img
            alt="Toilet"
            src={toilet}
            width="30"
            height="30"
            className="d-inline-block"
          />
        </div>
      </Row>
    </Container>
  );
};
export const vipClassIcons = () => {
  return (
    <Container className="containerMargin">
      <Row>
        <div className="d-flex gap-2">
          <img
            alt="Seat"
            src={seat}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="Seat Belt"
            src={seatBelt}
            width="30"
            height="30"
            className="d-inline-block"
          />
          <img
            alt="Air Conditioned"
            src={snowflake}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="Video Player"
            src={onlineVideo}
            width="30"
            height="30"
            className="d-inline-block"
          />
          <img
            alt="Monitor"
            src={monitor}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="Mic"
            src={mic}
            width="30"
            height="30"
            className="d-inline-block"
          />
        </div>
      </Row>
      <Row>
        <div className="d-flex gap-2">
          <img
            alt="Toilet"
            src={toilet}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="WiFi"
            src={wifi}
            width="30"
            height="30"
            className="d-inline-block"
          />
          <img
            alt="Charging Port"
            src={charginPort}
            width="30"
            height="30"
            className="d-inline-block"
          />

          <img
            alt="Soft Drink"
            src={softDrink}
            width="30"
            height="30"
            className="d-inline-block"
          />
          <img
            alt="Table Seats"
            src={tabledChairs}
            width="30"
            height="30"
            className="d-inline-block"
          />
        </div>
      </Row>
    </Container>
  );
};

export const variablesForFunctions = () => {
  const economyClassBody =
    "The ideal solution for all those who are looking for the cheapest coachhire services. All our vehicles comply with safety regulations.";
  const businessClassBody =
    "Dedicated to Businesses of all sizes as we have a wide range of vehicles in the business executive class. It's perfect service for no-frills airport transfers of smaller or larger groups.";
  const vipClassBody =
    "Luxurious service for special occasions. Whenever you need that exceptional coach, choose our limited edition pack with VIP Class.";

  const ourFleetMessage =
    "Whether you’re arranging a small or a big group trip for either business or leisure, look no further. Our fleet comprises vehicles of all sizes so that we can provide high-level services to corporations, schools, and private groups alike.";
};
