import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      className="nav-bg py-4"
      expand="lg"
      variant="dark"
    >
      <Link to="/">
        <Navbar.Brand>COVID-19 Vaccination Progression</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" id="navbar">
          <NavDropdown title="Data" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link className="dropdown-link" to="/vaccine-by-country">
                Vaccine by Country
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-link">
              <Link to="/countries-with-most-vaccines">
                Countries with Most Vaccines
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-link">
              <Link to="/vaccines-in-countries">Vaccines in Countries</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-link">
              <Link to="/raw-data">View Raw Data</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about">
            About
          </Nav.Link>
          <Nav.Link href="#pricing">Contributing</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
