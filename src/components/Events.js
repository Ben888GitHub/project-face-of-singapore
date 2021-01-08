import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
  Card,
  CardDeck,
  Container,
  Col,
  Row,
  Carousel,
} from "react-bootstrap";
import eightEvent from "../images/events/eightEvent.jpg";
import ninthEvent from "../images/events/ninthEvent.jpg";
import tenthEvent from "../images/events/tenthEvent.jpg";
import eleventhEvent from "../images/events/eleventhEvent.jpg";
import thirteenthEvent from "../images/events/thirteenthEvent.jpg";
import fourteenthEvent from "../images/events/fourteenthEvent.jpg";
import ShowMore from "react-show-more";
import { useMediaQuery } from "react-responsive";

const AdditionalEvents = () => (
  <CardDeck style={{ margin: 20 }}>
    <Card style={{ backgroundColor: "black" }}>
      <Card.Img variant="top" src={eleventhEvent} />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: 600, color: "white" }}
          className="custom-font-family"
        >
          International Photography
        </Card.Title>
        <Card.Text style={{ color: "white", fontWeight: "600" }}>
          Food Session is Provided in Face of Singapore during the event of
          Vintage Studio Hair Makeover. Food Session is Provided in Face of
          Singapore during the event of Vintage Studio Hair Makeover.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <p style={{ color: "white" }} className="custom-font-family">
          Last updated 3 mins ago
        </p>
      </Card.Footer>
    </Card>
    <Card style={{ backgroundColor: "black" }}>
      <Card.Img variant="top" src={thirteenthEvent} />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: 600, color: "white" }}
          className="custom-font-family"
        >
          Meals Session
        </Card.Title>
        <Card.Text style={{ color: "white", fontWeight: "600" }}>
          Food Session is Provided in Face of Singapore during the event of
          Vintage Studio Hair Makeover. Food Session is Provided in Face of
          Singapore during the event of Vintage Studio Hair Makeover.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <p style={{ color: "white" }} className="custom-font-family">
          Last updated 3 mins ago
        </p>
      </Card.Footer>
    </Card>
    <Card style={{ backgroundColor: "black" }}>
      <Card.Img variant="top" src={fourteenthEvent} />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: 600, color: "white" }}
          className="custom-font-family"
        >
          Gaming Events
        </Card.Title>
        <Card.Text style={{ color: "white", fontWeight: "600" }}>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <p style={{ color: "white" }} className="custom-font-family">
          Last updated 3 mins ago
        </p>
      </Card.Footer>
    </Card>
  </CardDeck>
);

function Events() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1366 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isMobileDevice = useMediaQuery({ maxDeviceWidth: 767 });
  const isTabletDevice = useMediaQuery({
    minDeviceWidth: 768,
    maxDeviceWidth: 1224,
  });

  const [moreItems, setMoreItems] = useState(false);
  const [initialItems, setInitialItems] = useState(true);

  // Function to show Additional CardDeck Elements and set button "Show More" to "Show Less"
  const showLessElement = () => {
    setMoreItems(true);
    setInitialItems(false);
  };

  // Function to hide Additional CardDeck Elements and set button "Show Less" to "Show More"
  const hideAdditionalElement = () => {
    setMoreItems(false);
    setInitialItems(true);
  };

  return (
    <div>
      <br />
      {isDesktopOrLaptop && (
        <h1 style={{ fontWeight: "bold", fontSize: 55 }}>NEWS & EVENTS</h1>
      )}
      {isTabletDevice && (
        <h1 style={{ fontWeight: "bold", fontSize: 55 }}>NEWS & EVENTS</h1>
      )}
      {isMobileDevice && <h1 style={{ fontWeight: "bold" }}>NEWS & EVENTS</h1>}
      <h5
        style={{
          // color: "white",
          margin: "auto",
          marginTop: 25,
          // marginBottom: 35,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do{" "}
        <br />
        eiusmod tempor incididunt ut labore et dolore roipi magna aliqua.
      </h5>
      <br />
      <br />
      <CardDeck style={{ margin: 20 }}>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img variant="top" src={ninthEvent} />
          <Card.Body>
            <Card.Title
              style={{ fontWeight: 600, color: "white" }}
              className="custom-font-family"
            >
              Fashion Discussion
            </Card.Title>
            <Card.Text style={{ color: "white", fontWeight: "600" }}>
              Food Session is Provided in Face of Singapore during the event of
              Vintage Studio Hair Makeover. Food Session is Provided in Face of
              Singapore during the event of Vintage Studio Hair Makeover.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p style={{ color: "white" }} className="custom-font-family">
              Last updated 3 mins ago
            </p>
          </Card.Footer>
        </Card>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img variant="top" src={eightEvent} />
          <Card.Body>
            <Card.Title
              style={{ fontWeight: 600, color: "white" }}
              className="custom-font-family"
            >
              Hair Makeover Session
            </Card.Title>
            <Card.Text style={{ color: "white", fontWeight: "600" }}>
              Food Session is Provided in Face of Singapore during the event of
              Vintage Studio Hair Makeover. Food Session is Provided in Face of
              Singapore during the event of Vintage Studio Hair Makeover.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p style={{ color: "white" }} className="custom-font-family">
              Last updated 3 mins ago
            </p>
          </Card.Footer>
        </Card>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img variant="top" src={tenthEvent} />
          <Card.Body>
            <Card.Title
              style={{ fontWeight: 600, color: "white" }}
              className="custom-font-family"
            >
              Outfit Dressing
            </Card.Title>
            <Card.Text style={{ color: "white", fontWeight: "600" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p style={{ color: "white" }} className="custom-font-family">
              Last updated 3 mins ago
            </p>
          </Card.Footer>
        </Card>
      </CardDeck>
      {/* <div style={{ textAlign: "right" }}> */}
      {moreItems ? <AdditionalEvents /> : null}
      {initialItems ? (
        <div>
          <br />
          <Button
            className="custom-font-family"
            // variant="dark"
            style={{
              backgroundColor: "black",
              fontWeight: 900,
              padding: 20,
              borderRadius: 20,
            }}
            onClick={() => showLessElement()}
          >
            SHOW MORE
          </Button>
        </div>
      ) : (
        <div>
          <br />
          <Button
            className="custom-font-family"
            // variant="dark"
            style={{
              backgroundColor: "black",
              fontWeight: 900,
              padding: 20,
              borderRadius: 20,
            }}
            onClick={() => hideAdditionalElement()}
          >
            SHOW LESS
          </Button>
        </div>
      )}
      {/* <br /> */}
      {/* <br /> */}
    </div>
  );
}

export default Events;

// style={{ backgroundColor: "#f7f7f7", marginTop: -32 }}
