import React from "react";
import xdsponsor2 from "../images/sponsorships/xdsponsor2.png";
import sponsorlist from "../images/sponsorships/sponsorslist.png";
import { Image, Container, Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function Contact() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1366 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });

  const isMobileDevice = useMediaQuery({ maxDeviceWidth: 767 });
  const isTabletDevice = useMediaQuery({
    minDeviceWidth: 768,
    maxDeviceWidth: 1366,
  });

  // const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div style={{ backgroundColor: "black" }}>
      <br />
      <br />
      {isDesktopOrLaptop && (
        <h1 style={{ fontWeight: "bold", fontSize: 55, color: "white" }}>
          WE WOULD LOVE TO HEAR FROM YOU!
        </h1>
      )}
      {isTabletDevice && (
        <h1 style={{ fontWeight: "bold", fontSize: 55, color: "white" }}>
          WE WOULD LOVE TO HEAR FROM YOU!
        </h1>
      )}
      {isMobileDevice && (
        <h1 style={{ fontWeight: "bold", color: "white" }}>
          WE WOULD LOVE TO HEAR FROM YOU!
        </h1>
      )}

      <p style={{ fontSize: 45, color: "white" }}>xxx@yyy.com</p>
      <br />
      <br />
      <div style={{ margin: "auto", width: "auto" }}>
        <Image
          style={{ height: "auto", maxWidth: "80%" }}
          src={xdsponsor2}
          alt="Sponsors"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          marginTop: "1rem",
          padding: "0.09rem",
          backgroundColor: "#5F5F5F",
          position: "relative",
          bottom: 0,
          left: 0,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            marginTop: 13,
            color: "#f7f7f7",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Copyright © 2020, Face Of Singapore. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Contact;

// {/* <Container>
// <Row>
//   <Col sm></Col>
//   <Col sm>
//     {isDesktopOrLaptop && (
//       <Image style={{ width: 480 }} src={sponsorlist} alt="Sponsors" />
//     )}
//     {/* <Image style={{ width: 440 }} src={sponsorlist} alt="Sponsors" /> */}
//     {isTabletDevice && (
//       <Image style={{ width: 440 }} src={sponsorlist} alt="Sponsors" />
//     )}
//     {isMobileDevice && (
//       <Image style={{ width: 340 }} src={sponsorlist} alt="Sponsors" />
//     )}
//   </Col>
//   <Col sm></Col>
// </Row>
// </Container> */}
