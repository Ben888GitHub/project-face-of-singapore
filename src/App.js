import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Events from "./components/Events";
import Contestants from "./components/Contestants";
import Winners from "./components/Winners";
import SignUpForm from "./components/SignUpForm";
import Contact from "./components/Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <br />
      <br /> */}
      <Element name="aboutElement">
        <About />
      </Element>

      {/* <br /> */}
      {/* <br /> */}

      <Element name="eventsElement">
        <Events />
      </Element>

      <br />
      <br />
      <Element name="contestantsElement">
        <Contestants />
      </Element>

      {/* <br />
      <br />
      <br /> */}
      <Element name="winnersElement">
        <Winners />
      </Element>

      {/* <br />
      <br /> */}
      <Element name="signUpElements">
        <SignUpForm />
      </Element>

      {/* <br />
      <br /> */}
      <Element name="contactElement">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
