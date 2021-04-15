import React from 'react'
import Navigation from '../Components/Navigation'
import DoughnutGraph from '../Components/DoughnutGraph'
import {Container, Row} from 'react-bootstrap'


export default function VaccineInCountries() {
    return (
      <div>
        <Navigation />
        <Container className="pt-4 mb-4">
          <Row className="mt-3 d-flex justify-content-center">
            <Container className="graph shadow graph-wrapper" fluid>
              <DoughnutGraph />
            </Container>
          </Row>
        </Container>
      </div>
    );
}
