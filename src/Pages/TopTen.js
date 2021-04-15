import React from "react";

//
import Navigation from "../Components/Navigation";
import TopTenGraph from "../Components/TopTenGraph";

import { Container, Row } from "react-bootstrap";

export default function TopTen() {
  return (
    <div>
      <Navigation />
      <Container className="pt-4">
        <Row className="my-3 d-flex">
          <Container className="graph shadow" fluid>
            <TopTenGraph />
          </Container>
        </Row>
      </Container>
    </div>
  );
}
