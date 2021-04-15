import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../../App.css";

export default function Hero() {
  return (
    <div className="hero">
      <Container fluid>
        <Row>
          <Col sm={12} className="text-center">
            <h1 className="text-white display-3">
              World COVID-19 Vaccination Progression
            </h1>
            <h3 className="text-white">
              Visualize the worlds vaccination efforts
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
