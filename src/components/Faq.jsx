import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

function FAQ({ handleClose }) {
  return (
    <Modal
      dialogClassName="modal-90w"
      style={{ marginTop: "60px" }}
      show={true}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Frequently Asked Questions</Modal.Title>
      </Modal.Header>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            What is <span className="faq-text">SaveTheGarden</span>?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <span className="faq-text">SaveTheGarden</span> is a website that
              provides patrons of small businesses and local restaurants to buy
              gift cards as a way to pay it forward while many businesses
              struggle with COVID-19. This idea was inspired by saveourfaves.org
              and helpmainstreet.com
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Who made this?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              This was developed by <span className="faq-text-orange">Eddy Yeung</span>, a South Jersey native and
              designed by <span className="faq-text-orange">Eileen Zhang</span>(California) and <span className="faq-text-orange">Rebecca Fu </span>(New York).
              <span className="faq-text"> SaveTheGarden </span>also collaborated with New York's version,
              helpmainstreet and the promising startup, lunchbox.io. The name
              was cleverly thought of by <span className="faq-text-orange">Zachary Goldberg</span>.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            I don't see my business. How can I add mine?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Sorry we missed you! Just send an email to
              <span className="faq-text-email"> savethegardennj@gmail.com</span> and we can add your business to the
              site! Please provide a link to your gift card page and we will add
              it on as soon as we can.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            How can I start offering gift cards?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Typically your POS (Point of Sale) provider has some sort of gift
              card functionality that you should contact them about. If you are
              unsure or need help feel free to reach out to
              <span className="faq-text-email"> savethegardennj@gmail.com</span> and we can help you out!
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            What's next for <span className="faq-text">SaveTheGarden</span>?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              We will be adding more functionality as we finish up school, but
              things on the road map include a "featured" businesses on the
              header to help those who are in desperate need and an easier form
              to add new businesses.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            How can I help out?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              Please reach out to <span className="faq-text-email">savethegardennj@gmail.com</span> and we can see how
              you can help out! Right now, Eddy is the only developer and works
              with two designers from different states. Any help would be
              appreciated!
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Modal>
  );
}

export default FAQ;
