import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Faq from "./Faq";
import logo from "../LogoFinal.png";

export default function Header() {
  const [faqOpen, setFaq] = useState(false);
  const [toggle, setToggle] = useState(false)

  const toggleOn = () => {
    setFaq(false);
  };

  return (
    <div>
      <div id="overlay">{faqOpen ? <Faq handleClose={toggleOn} /> : ""}</div>
      <Container fluid className="header-img">
        <Navbar expand="sm" className="justify-content-between">
          <Navbar.Brand>
            <img
              src={logo}
              width="200"
              height="100"
              className="d-inline-block align-top"
              alt="SaveTheGarden"
            />
          </Navbar.Brand>
          <Navbar.Toggle onClick={()=> setToggle(false)}aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={() => setFaq(!faqOpen)}>
                <Button variant="link" className="whiteText">
                  FAQ
                </Button>
              </Nav.Link>
              <Nav.Link href="https://savethegardennj.typeform.com/to/YxBOPd" className="greenBlueText">
                  <Button className="secondaryColor" variant="info">
                    Add A Business
                  </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container style={{ marginTop: "10px" }}>
          <div id="header">
            <h1 id="header-text">Help Save Local Businesses in NJ</h1>
            <div className="center">
              <p id="hero-text">
                Many of your favorite local business will close if we don't
                <br />
                help "flatten the curve" of lost income from COVID-19. By <br />
                buying gift cards or donating we can help save our favorite
                <br />
                eateries from closing forever.
              </p>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}
