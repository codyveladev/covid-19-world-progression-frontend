import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";
import { Form, Col, Button, Container } from "react-bootstrap";

const countries = require("../Data/countries.json");
const axios = require("axios");

export default function Options() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("");
  const [data, setData] = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://127.0.0.1:5000/api/country/${selected}`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setOptions(countries);
  }, []);

  return (
    <Container className="border d-flex justify-content-center" fluid>
      <Form>
        <Form.Row className="pt-3">
          <Col lg={8} xs={8}>
            <Form.Group>
              <Form.Control
                size="lg"
                as="select"
                name="countries"
                onChange={(e) => {
                  const selectedCountry = e.target.value;
                  setSelected(selectedCountry);
                }}
              >
                <option value="">Select a Country</option>
                {options.map((index) => {
                  return (
                    <option value={index.iso_code}>{index.country}</option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={4}>     
              <Button onClick={handleSubmit} size="lg" variant="primary" type="submit">
                Submit
              </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
}
