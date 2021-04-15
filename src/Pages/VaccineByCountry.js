import React from "react";
//Components
import Navigation from "../Components/Navigation";
import Options from "../Components/Options";
import LineGraph from "../Components/LineGraph";
import PercentagesGraph from "../Components/PercentagesGraph";

//Styles
import { Container, Row, Col } from "react-bootstrap";

export default function VaccineByCountry() {
  return (
    <div className="pb-5">
      <Navigation />
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Options />
        </Row>
      </Container>
      <Container fluid>
        <Row className="mt-3">
          <Container className="shadow graph-wrapper mb-4">
            <LineGraph />
          </Container>
          <Container className="shadow graph-wrapper pt-5">
            <PercentagesGraph />
          </Container>
        </Row>
      </Container>
    </div>
  );
}
