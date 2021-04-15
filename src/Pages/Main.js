import React from "react";
import Navigation from "../Components/Navigation";
import Hero from '../Components/Home/Hero'

import { Container, Row, Col } from "react-bootstrap";

export default function Main() {
  return (
    <div className="bg-light">
      <Navigation />
      <Hero />
    </div>
  );
}
