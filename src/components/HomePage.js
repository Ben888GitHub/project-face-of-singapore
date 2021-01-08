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
} from "react-bootstrap";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import firstAnim from "../images/firstAnim.gif";
import secondAnim from "../images/secondAnim.gif";
import thirdAnim from "../images/thirdAnim.gif";
import fourthAnim from "../images/fourthAnim.gif";
import fifthAnim from "../images/fifthAnim.gif";
import "./HomePage.css";
import Scroll, { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

const scroller = Scroll.scroller;

function HomePage() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1366 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });

  const isMobileDevice = useMediaQuery({ maxDeviceWidth: 767 });
  const isTabletDevice = useMediaQuery({
    minDeviceWidth: 768,
    maxDeviceWidth: 1224,
  });

  const toAnyDestination = (href) => {
    if (href === "ABOUT") {
      scroller.scrollTo("aboutElement", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    } else if (href === "NEWS & EVENTS") {
      scroller.scrollTo("eventsElement", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    } else if (href === "CONTESTANTS") {
      scroller.scrollTo("contestantsElement", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    } else if (href === "WINNERS") {
      scroller.scrollTo("winnersElement", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    } else if (href === "SIGN UP") {
      scroller.scrollTo("signUpElements", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    } else if (href === "CONTACT") {
      scroller.scrollTo("contactElement", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    }
  };

  return (
    <Carousel controls={false}>
      <Carousel.Item
        style={{
          backgroundImage: `url(${firstAnim})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backdropFilter: `brightness(60%)`,
            // height: 650,
          }}
        >
          <br />
          {isDesktopOrLaptop && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                fontSize: 60,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          {isTabletDevice && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                fontSize: 60,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          {isMobileDevice && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                // fontSize: 45,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          <Container>
            <Row>
              <Col></Col>
              <Col xs={12}>
                <Navbar
                  bg="transparent"
                  expand="lg"
                  className="text-align-center custom-font-family"
                >
                  <br />
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />

                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link
                        href="#about"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        ABOUT
                      </Nav.Link>
                      <Nav.Link
                        href="#events"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        // onClick={eventsDestination}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        NEWS & EVENTS
                      </Nav.Link>
                      <Nav.Link
                        href="#contestants"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        // onClick={contestantsDestination}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        CONTESTANTS
                      </Nav.Link>
                      <Nav.Link
                        href="#winners"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        // onClick={winnersDestination}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        WINNERS
                      </Nav.Link>
                      <Nav.Link
                        href="#signup"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        // onClick={signUpDestination}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        SIGN UP
                      </Nav.Link>
                      <Nav.Link
                        href="#contact"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        // onClick={contactDestination}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        CONTACT
                      </Nav.Link>
                    </Nav>
                    <InstagramIcon
                      style={{ fontSize: 34, color: "white", marginRight: 15 }}
                    />
                    <TwitterIcon
                      style={{ fontSize: 34, color: "white", marginRight: 15 }}
                    />
                    <FacebookIcon
                      style={{ fontSize: 34, color: "white", marginRight: 10 }}
                    />
                  </Navbar.Collapse>
                </Navbar>
              </Col>
              <Col></Col>
            </Row>
          </Container>

          <br />
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>

              <Col style={{ marginLeft: 30 }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Card
                  style={{
                    width: "18rem",
                    borderStyle: "hidden",
                    background: "transparent",
                    marginTop: 50,
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ color: "white" }}>2019 Winner</h2>
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button
                      className="custom-font-family"
                      variant="outline-light"
                      style={{ fontWeight: 700, borderWidth: 2 }}
                    >
                      See More
                    </Button>
                    <br />
                    <br />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage: `url(${secondAnim})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backdropFilter: `brightness(60%)`,
            // height: 650,
          }}
        >
          <br />
          {isDesktopOrLaptop && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                fontSize: 55,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          {isTabletDevice && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                fontSize: 55,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          {isMobileDevice && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                fontSize: 45,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          <Container>
            <Row>
              <Col></Col>
              <Col xs={12}>
                <Navbar
                  bg="transparent"
                  expand="lg"
                  className="text-align-center custom-font-family"
                >
                  <br />
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />

                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link
                        href="#about"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        ABOUT
                      </Nav.Link>
                      <Nav.Link
                        href="#events"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        NEWS & EVENTS
                      </Nav.Link>
                      <Nav.Link
                        href="#contestants"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        CONTESTANTS
                      </Nav.Link>
                      <Nav.Link
                        href="#winners"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        WINNERS
                      </Nav.Link>
                      <Nav.Link
                        href="#signup"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        SIGN UP
                      </Nav.Link>
                      <Nav.Link
                        href="#contact"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        CONTACT
                      </Nav.Link>
                    </Nav>
                    <InstagramIcon
                      style={{ fontSize: 34, color: "white", marginRight: 15 }}
                    />
                    <TwitterIcon
                      style={{ fontSize: 34, color: "white", marginRight: 15 }}
                    />
                    <FacebookIcon
                      style={{ fontSize: 34, color: "white", marginRight: 10 }}
                    />
                  </Navbar.Collapse>
                </Navbar>
              </Col>
              <Col></Col>
            </Row>
          </Container>

          <br />
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>

              <Col style={{ marginLeft: 30 }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Card
                  style={{
                    width: "18rem",
                    borderStyle: "hidden",
                    background: "transparent",
                    marginTop: 50,
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ color: "white" }}>2019 Winner</h2>
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button
                      className="custom-font-family"
                      variant="outline-light"
                      style={{ fontWeight: 700, borderWidth: 2 }}
                    >
                      See More
                    </Button>
                    <br />
                    <br />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage: `url(${thirdAnim})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backdropFilter: `brightness(60%)`,
            // height: 650,
          }}
        >
          <br />
          {isDesktopOrLaptop && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                fontSize: 65,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          {isTabletDevice && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                fontSize: 65,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          {isMobileDevice && (
            <h1
              className="main-title"
              style={{
                fontWeight: "bold",
                fontSize: 45,
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              FACE OF SINGAPORE
            </h1>
          )}
          <Container>
            <Row>
              <Col></Col>
              <Col xs={12}>
                <Navbar
                  bg="transparent"
                  expand="lg"
                  className="text-align-center custom-font-family"
                >
                  <br />
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />

                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link
                        href="#about"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        ABOUT
                      </Nav.Link>
                      <Nav.Link
                        href="#events"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        NEWS & EVENTS
                      </Nav.Link>
                      <Nav.Link
                        href="#contestants"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        CONTESTANTS
                      </Nav.Link>
                      <Nav.Link
                        href="#winners"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        WINNERS
                      </Nav.Link>
                      <Nav.Link
                        href="#signup"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        SIGN UP
                      </Nav.Link>
                      <Nav.Link
                        href="#contact"
                        style={{
                          fontSize: 24,
                          color: "white",
                          //   fontWeight: "600",
                        }}
                        onClick={(href) => {
                          toAnyDestination(href.target.innerText);
                        }}
                      >
                        CONTACT
                      </Nav.Link>
                    </Nav>
                    <InstagramIcon
                      style={{ fontSize: 34, color: "white", marginRight: 15 }}
                    />
                    <TwitterIcon
                      style={{ fontSize: 34, color: "white", marginRight: 15 }}
                    />
                    <FacebookIcon
                      style={{ fontSize: 34, color: "white", marginRight: 10 }}
                    />
                  </Navbar.Collapse>
                </Navbar>
              </Col>
              <Col></Col>
            </Row>
          </Container>

          <br />
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>

              <Col style={{ marginLeft: 30 }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Card
                  style={{
                    width: "18rem",
                    borderStyle: "hidden",
                    background: "transparent",
                    marginTop: 50,
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ color: "white" }}>2019 Winner</h2>
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button
                      className="custom-font-family"
                      variant="outline-light"
                      style={{ fontWeight: 700, borderWidth: 2 }}
                    >
                      See More
                    </Button>
                    <br />
                    <br />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;

// const aboutDestination = (href) => {
//     scroller.scrollTo("aboutElement", {
//       duration: 1500,
//       delay: 100,
//       smooth: true,
//     });
//     console.log(href);
//   };

//   const eventsDestination = () => {
//     scroller.scrollTo("eventsElement", {
//       duration: 1500,
//       delay: 100,
//       smooth: true,
//     });
//   };

//   const contestantsDestination = () => {
//     scroller.scrollTo("contestantsElement", {
//       duration: 1500,
//       delay: 100,
//       smooth: true,
//     });
//   };

//   const winnersDestination = () => {
//     scroller.scrollTo("winnersElement", {
//       duration: 1500,
//       delay: 100,
//       smooth: true,
//     });
//   };

//   const signUpDestination = () => {
//     scroller.scrollTo("signUpElements", {
//       duration: 1500,
//       delay: 100,
//       smooth: true,
//     });
//   };

//   const contactDestination = () => {
//     scroller.scrollTo("contactElement", {
//       duration: 1500,
//       delay: 100,
//       smooth: true,
//     });
//   };
