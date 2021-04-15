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
        <Row className="mt-3 d-flex">
          <Container className="shadow graph-wrapper" fluid>
            <TopTenGraph />
          </Container>
        </Row>
      </Container>
    </div>
  );
}
