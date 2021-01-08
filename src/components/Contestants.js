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
import contest1 from "../images/contestants/contest1.png";
import contest2 from "../images/contestants/contest2.png";
import contest3 from "../images/contestants/contest3.png";
import contest4 from "../images/contestants/contest4.png";
import contest5 from "../images/contestants/contest5.png";
import contest6 from "../images/contestants/contest6.png";
import contest7 from "../images/contestants/contest7.png";
import contest8 from "../images/contestants/contest8.png";
import contest9 from "../images/contestants/contest9.png";
import contest10 from "../images/contestants/contest10.png";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Model1 from "../images/contestants/Model-1.jpg";
import { useMediaQuery } from "react-responsive";

function Contestants() {
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
  return (
    <div style={{ backgroundColor: "black" }}>
      <br />
      <br />
      {isDesktopOrLaptop && (
        <h1 style={{ fontWeight: "bold", color: "white", fontSize: 55 }}>
          MEET THE CONTESTANTS
        </h1>
      )}
      {isTabletDevice && (
        <h1 style={{ fontWeight: "bold", color: "white", fontSize: 55 }}>
          MEET THE CONTESTANTS
        </h1>
      )}
      {isMobileDevice && (
        <h1 style={{ fontWeight: "bold", color: "white" }}>
          MEET THE CONTESTANTS
        </h1>
      )}

      <h5
        style={{
          color: "white",
          margin: "auto",
          marginTop: 25,
          // marginBottom: 35,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do{" "}
        <br />
        eiusmod tempor incididunt ut labore et dolore roipi magna aliqua.
      </h5>
      {/* <br/> */}
      {isDesktopOrLaptop && (
        <div>
          <Carousel style={{ marginBottom: 5 }}>
            <CarouselItem>
              <div>
                <CardDeck style={{ margin: 40 }}>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest1} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Alvina Ho
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest2} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Tanisha Tan
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest3} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Joyce Fong
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest4} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Xue Jing
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest5} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Hope Xiew
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <CardDeck style={{ margin: 40 }}>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest6} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Allison Ng
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest7} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Sapphire Tan
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest8} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Clarissa Tan
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest9} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Alyssa Lie
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{ borderStyle: "hidden" }}>
                    <Card.Img variant="top" src={contest10} />
                    <Card.Body>
                      <Card.Title className="custom-font-family">
                        Summer Xia
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </CarouselItem>
          </Carousel>
          <br />
          {/* <br /> */}
        </div>
      )}

      {isTabletDevice && (
        <Carousel>
          <CarouselItem>
            <div>
              <CardDeck style={{ margin: 40 }}>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest1} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Alvina Ho
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest2} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Tanisha Tan
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest3} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Joyce Fong
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest4} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Xue Jing
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest5} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Hope Xiew
                    </Card.Title>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <CardDeck style={{ margin: 40 }}>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest6} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Allison Ng
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest7} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Sapphire Tan
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest8} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Clarissa Tan
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest9} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Alyssa Lie
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ borderStyle: "hidden" }}>
                  <Card.Img variant="top" src={contest10} />
                  <Card.Body>
                    <Card.Title className="custom-font-family">
                      Summer Xia
                    </Card.Title>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          </CarouselItem>
        </Carousel>
      )}
      {isMobileDevice && (
        <Carousel>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest1} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Alvina Ho
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest2} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Tanisha Tan
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest3} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Joyce Fong
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest4} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Xue Jing
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest5} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Hope Xiew
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest6} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Allison Ng
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest7} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Sapphire Tan
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest8} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Clarissa Tan
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest9} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Alyssa Lie
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck style={{ margin: 40 }}>
              <Card style={{ borderStyle: "hidden" }}>
                <Card.Img variant="top" src={contest10} />
                <Card.Body>
                  <Card.Title className="custom-font-family">
                    Summer Xia
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </CarouselItem>
        </Carousel>
      )}
    </div>
  );
}

export default Contestants;
