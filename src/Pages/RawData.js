import React from "react";
import Navigation from "../Components/Navigation";
import Options from "../Components/Options";
import Updated from "../Components/Updated";
import TableDisplay from "../Components/TableDisplay";
import { Container, Row } from "react-bootstrap";

export default function RawData() {
  return (
    <div>
      <Navigation />
      <Options />
      <Updated />
      <Container className="mt-3">
        <Row className="d-flex justify-content-center">
          <TableDisplay />
        </Row>
      </Container>
    </div>
  );
}
