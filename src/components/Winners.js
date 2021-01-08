import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  CardDeck,
  Card,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import alvinaHo1 from "../images/contestants/alvinaHo1.png";
import alvinaHo2 from "../images/contestants/alvinaHo2.png";
import alvinaHo3 from "../images/contestants/alvinaHo3.png";
import contest1 from "../images/contestants/contest1.png";

function Winners() {
  return (
    // <div>
    //   <h1 style={{ fontWeight: "bold" }}>2019 Winners</h1>
    // </div>
    <Carousel style={{ backgroundColor: "black" }}>
      <CarouselItem>
        <br />
        <br />
        <Container>
          <Row>
            <Col style={{ justifyContent: "start", textAlign: "left" }}>
              <div>
                <h1 style={{ color: "white", fontWeight: 100 }}>
                  2019 WINNERS
                </h1>
                <h1 style={{ color: "white" }}>Alvina Ho</h1>
                <h5 style={{ color: "white" }}>
                  From Zero to Hero. Lorem ipsum dolor sit amet, consectetur
                  adipisifwcing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis
                  nostruklad exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  tufpoy voluptate velit esse cillum dolore eu fugiat nulla
                  parieratur. Excepteur sint occaecat cupidatat.
                </h5>
                <br />
                <br />
                <CardDeck>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={alvinaHo1} />
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={alvinaHo2} />
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={alvinaHo3} />
                  </Card>
                </CardDeck>
              </div>
              <br />
            </Col>
            {/* <Col xs={1}></Col> */}
            <Col

            // style={{ marginRight: 10 }}
            >
              <Card
                style={{ borderStyle: "hidden", width: 345, margin: "auto" }}
              >
                <Card.Img
                  //   align="right"
                  style={{ width: 345, height: 572 }}
                  variant="top"
                  src={contest1}
                />
                {/* <Card.Body>
            <Card.Title>Alvina Ho</Card.Title>
          </Card.Body> */}
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
      </CarouselItem>
    </Carousel>
  );
}

export default Winners;
