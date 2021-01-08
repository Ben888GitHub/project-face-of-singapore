import React from "react";
import {
  Form,
  Button,
  Container,
  Card,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function SignUpForm() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1366 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });

  const isMobileDevice = useMediaQuery({ maxDeviceWidth: 767 });
  const isTabletDevice = useMediaQuery({
    minDeviceWidth: 768,
    maxDeviceWidth: 1366,
  });

  return (
    <div className="text-center">
      <br />
      {isDesktopOrLaptop && (
        <h1 style={{ fontWeight: "bold", margin: 20, fontSize: 55 }}>
          BECOME A MODEL
        </h1>
      )}
      {isTabletDevice && (
        <h1 style={{ fontWeight: "bold", margin: 20, fontSize: 55 }}>
          BECOME A MODEL
        </h1>
      )}
      {isMobileDevice && (
        <h1 style={{ fontWeight: "bold", margin: 20 }}>BECOME A MODEL</h1>
      )}

      <br />
      <p style={{ margin: 20 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt <br /> ut ero labore et dolore magna aliqua. Ut enim
        ad <br /> minim veniam, quis nostrud exercitation ullamco.
      </p>
      <br />
      {isDesktopOrLaptop && (
        <div>
          <Form
            className="justify-content-center"
            style={{
              //   justifyContent: "center",
              //   alignItems: "center",
              displayInline: "block",
              margin: "auto",
              //   marginLeft: "auto",
              //   marginRight: "auto",
            }}
          >
            <Container>
              <Row>
                <Col>
                  <Form.Group
                    //   className="justify-content-center"
                    //   as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 450 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            // borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          FULL NAME
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        className="custom-font-family"
                        style={{
                          borderRadius: 0,
                          height: 52,
                          borderColor: "black",
                        }}
                        type="text"
                        placeholder="Full Name"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    style={{ marginTop: 25 }}
                    //   as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 450 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            // borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            width: 115,
                            justifyContent: "center",
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          EMAIL
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        className="custom-font-family"
                        style={{
                          borderRadius: 0,
                          height: 52,
                          borderColor: "black",
                        }}
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    // style={{ marginTop: 25 }}
                    //   as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 450 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            // borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            width: 115,
                            justifyContent: "center",
                            height: 52,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          DETAIL
                        </InputGroup.Text>
                      </InputGroup.Prepend>

                      <Form.Control
                        style={{ borderColor: "black" }}
                        className="custom-font-family"
                        as="textarea"
                        rows={5}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button
                    // style={{}}
                    className="float-right custom-font-family"
                    style={{
                      fontWeight: 600,
                      height: 52,
                      width: 115,
                      backgroundColor: "#242424",
                      //   justifyContent: "right",
                      //   right: -200,
                      //   marginRight: -210,
                      //   margin: 0,
                      marginTop: 15,
                      marginRight: 100,
                    }}
                    variant="primary"
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                  {/* <br />
              <input type="file" class="custom-file-input" /> */}
                </Col>
              </Row>
            </Container>
          </Form>
        </div>
      )}
      {isTabletDevice && (
        <div>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form
                  className="justify-content-center"
                  style={{
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    displayInline: "block",
                    margin: 30,
                    //   marginLeft: "auto",
                    //   marginRight: "auto",
                  }}
                >
                  <Form.Group
                    //   className="justify-content-center"
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 350 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          FULL NAME
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        className="custom-font-family"
                        style={{
                          borderRadius: 0,
                          height: 52,
                          borderColor: "black",
                        }}
                        type="text"
                        placeholder="Full Name"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      {/* <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback> */}
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    style={{ marginTop: 25 }}
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 350 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            width: 115,
                            justifyContent: "center",
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          EMAIL
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        className="custom-font-family"
                        style={{
                          borderRadius: 0,
                          height: 52,
                          borderColor: "black",
                        }}
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      {/* <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback> */}
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    style={{ marginTop: 25 }}
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 350 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            width: 115,
                            justifyContent: "center",
                            height: 52,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          COMMENT
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      {/* <Form.Control
              style={{ borderRadius: 0, height: 52 }}
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            /> */}
                      {/* <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback> */}

                      <Form.Control
                        style={{ borderColor: "black" }}
                        className="custom-font-family"
                        as="textarea"
                        rows={3}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button
                    className="custom-font-family"
                    style={{
                      fontWeight: 600,
                      height: 52,
                      width: 115,
                      backgroundColor: "#242424",
                    }}
                    variant="primary"
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      )}
      {isMobileDevice && (
        <div>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form
                  className="justify-content-center"
                  style={{
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    displayInline: "block",
                    margin: 30,
                    //   marginLeft: "auto",
                    //   marginRight: "auto",
                  }}
                >
                  <Form.Group
                    //   className="justify-content-center"
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 350 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          FULL NAME
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        className="custom-font-family"
                        style={{
                          borderRadius: 0,
                          height: 52,
                          borderColor: "black",
                        }}
                        type="text"
                        placeholder="Full Name"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      {/* <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback> */}
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    style={{ marginTop: 25 }}
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 350 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            width: 115,
                            justifyContent: "center",
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          EMAIL
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        className="custom-font-family"
                        style={{
                          borderRadius: 0,
                          height: 52,
                          borderColor: "black",
                        }}
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      {/* <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback> */}
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    style={{ marginTop: 25 }}
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <InputGroup style={{ width: 350 }}>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="custom-font-family"
                          id="inputGroupPrepend"
                          style={{
                            borderRadius: 0,
                            backgroundColor: "#242424",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            width: 115,
                            justifyContent: "center",
                            height: 52,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                          }}
                        >
                          COMMENT
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      {/* <Form.Control
              style={{ borderRadius: 0, height: 52 }}
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            /> */}
                      {/* <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback> */}

                      <Form.Control
                        style={{ borderColor: "black" }}
                        className="custom-font-family"
                        as="textarea"
                        rows={3}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button
                    className="custom-font-family"
                    style={{
                      fontWeight: 600,
                      height: 52,
                      width: 115,
                      backgroundColor: "#242424",
                    }}
                    variant="primary"
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      )}

      <br />
      <br />
    </div>
  );
}

export default SignUpForm;
