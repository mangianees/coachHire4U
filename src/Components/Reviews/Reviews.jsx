import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Reviews.css";
import reviewCard from "../../images/reviewCard.png";
import review1 from "../../images/review01.png";

function Reviews() {
  const scrollContainer = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.firstChild.offsetWidth; // Get the width of a single card
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container className="reviews-container">
      {/* Static Card */}
      <div className="static-card">
        <Card className="sticky-card">
          <Card.Img variant="top" src={reviewCard} className="reviewCard" />
        </Card>
      </div>

      {/* Scrollable Section */}
      <div className="scrollable-section">
        {/* Left Scroll Button */}
        <button
          className="scroll-btn left-btn"
          onClick={() => handleScroll("left")}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Scrollable Cards */}
        <div className="scrollable-container" ref={scrollContainer}>
          {[...Array(9)].map((_, index) => (
            <Card className="scrollable-card" key={index}>
              <Card.Img variant="top" src={review1} className="reviewCard" />
            </Card>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="scroll-btn right-btn"
          onClick={() => handleScroll("right")}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </Container>
  );
}

export default Reviews;
