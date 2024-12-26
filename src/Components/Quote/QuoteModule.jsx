import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft, faUpDown } from "@fortawesome/free-solid-svg-icons";
import { Form, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const useViewport = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export const SwapIcon = ({ isMobile, handleSwap }) => (
  <FontAwesomeIcon
    icon={isMobile ? faUpDown : faRightLeft}
    className="moveToCenter"
    onClick={handleSwap}
    style={{
      cursor: "pointer",
      fontSize: "1.5rem",
      marginTop: "1.5rem",
    }}
  />
);

export const TravelInput = ({
  label,
  icon,
  value,
  onChange,
  placeholder,
  tabIndex,
}) => {
  const { t } = useTranslation();
  return (
    <Col xs={12} md={5}>
      <Form.Label>
        <FontAwesomeIcon icon={icon} /> {t(label)}
      </Form.Label>
      <Form.Control
        type="text"
        className="textSize"
        placeholder={t(placeholder)}
        value={value}
        mm
        onChange={onChange}
        tabIndex={tabIndex}
      />
    </Col>
  );
};

export const DateTimeInput = ({
  label,
  icon,
  type,
  value,
  onChange,
  tabIndex,
}) => {
  const { t } = useTranslation();
  return (
    <Col xs={12} md={6}>
      <Form.Label>
        <FontAwesomeIcon icon={icon} /> {t(label)}
      </Form.Label>
      {type === "select" ? (
        <Form.Select
          aria-label={`Select ${label}`}
          value={value}
          onChange={onChange}
          tabIndex={tabIndex}
        >
          <option>{t("Time")}</option>
          <option value="1">00:00</option>
          <option value="2">00:30</option>
          <option value="3">01:00</option>
        </Form.Select>
      ) : (
        <Form.Control type={type} tabIndex={tabIndex} />
      )}
    </Col>
  );
};
