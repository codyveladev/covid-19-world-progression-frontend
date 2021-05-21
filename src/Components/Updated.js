import React, { useContext } from "react";
//Data
import { DataContext } from "../DataContext";

import { Container, Row, Col } from "react-bootstrap";
const Updated = () => {
  const [data] = useContext(DataContext);
  return (
    <Container fluid>
      <Row>
        <Col className="pt-3">
          {data.vaccine_data && (
            <p className="text-center">
              <em className="text-danger">
                Last updated on{" "}
                {data.vaccine_data[data.vaccine_data.length - 1].date}
              </em>
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Updated;
