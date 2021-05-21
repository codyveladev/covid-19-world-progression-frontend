import React, { useContext } from "react";
//Components
import Navigation from "../Components/Navigation";
import Options from "../Components/Options";
import Updated from "../Components/Updated"
import LineGraph from "../Components/LineGraph";
import PercentagesGraph from "../Components/PercentagesGraph";

//Data 
import { DataContext } from "../DataContext";

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
        <Updated />
        <Row className="mt-3">
          <Container className="graph d-flex justify-content-center shadow mb-4">
            <Col sm={12} lg={10}>
              <LineGraph />
            </Col>
          </Container>
          <Container className=" graph d-flex justify-content-center shadow pt-4">
            <Col sm={12} lg={10}>
              <PercentagesGraph />
            </Col>
          </Container>
        </Row>
      </Container>
    </div>
  );
}
