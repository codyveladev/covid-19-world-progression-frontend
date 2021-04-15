import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../App.css";

export default function Hero() {
  return (
    <div className="hero">
      <Container fluid>
        <Row>
          <Col sm={12} className="text-center">
            <h1 className="text-white">
              World COVID-19 Vaccination Progression
            </h1>
            <h4 className="text-white">
              Visualize the worlds vaccination efforts
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
