import React from "react";
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
  Card,
  Container,
  Col,
  Row,
  Carousel,
  Jumbotron,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function About() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1366 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });

  const isMobileDevice = useMediaQuery({ maxDeviceWidth: 767 });
  const isTabletDevice = useMediaQuery({
    minDeviceWidth: 768,
    maxDeviceWidth: 1224,
  });

  return (
    <Jumbotron style={{ backgroundColor: "black" }}>
      {isDesktopOrLaptop && (
        <h1 style={{ color: "white", fontSize: 55, fontWeight: "bold" }}>
          THE BEAUTY INSIDE
        </h1>
      )}
      {isTabletDevice && (
        <h1 style={{ color: "white", fontSize: 55, fontWeight: "bold" }}>
          THE BEAUTY INSIDE
        </h1>
      )}
      {isMobileDevice && (
        <h1 style={{ color: "white", fontWeight: "bold" }}>
          THE BEAUTY INSIDE
        </h1>
      )}

      <p
        style={{
          color: "white",
          fontSize: 18,
          marginTop: 15,
          marginBottom: 25,
        }}
      >
        A local contest that leads up to Asia's largest model hunt platform{" "}
        <br /> Face of Asia ― is the first step toward a big opportunity for
        aspiring young
        <br /> Asian models to begin their career in the global modeling and
        fashion industry.
      </p>
    </Jumbotron>
  );
}

export default About;

// #242424
