import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import blmLogo from "./blmLogo.ico"

function RestCard(props) {
  return (
    <Card className={`text-center ${props.black ? "rest-card-black" : "rest-card"}`}>
      {props.black ? <div className="blm-logo"><img src={blmLogo}/></div> : ""}
      <Card.Body className="center">
        <Card.Title id="rest-card-title" src={props.siteLink}>
          {props.name}
        </Card.Title>
        <Card.Subtitle id="rest-card-subtitle" className="mb-2 text-muted">
          {props.address}
        </Card.Subtitle>
        <Card.Subtitle id="rest-card-subtitle" className="mb-2 text-muted">
          {props.phone}
        </Card.Subtitle>
        <Card.Subtitle id="rest-card-subtitle" className="mb-2 text-muted">
          {props.specialty}
        </Card.Subtitle>
        {props.black === "y" ? (
          <Button
            target="_blank"
            rel="noopener noreferrer"
            className="rest-button-black"
            href={props.siteLink}
            variant="outline-success"
          >
            {props.siteLink ? "Order Now" : "Call"}<br></br>
            {!props.siteLink ? props.phone : ""}
          </Button>
        ) : (
          <Button
            target="_blank"
            rel="noopener noreferrer"
            className="rest-button"
            href={props.giftCard}
            variant="outline-success"
          >
            {"Get a Gift Card"}
          </Button>
        )}{" "}
      </Card.Body>
    </Card>
  );
}

export default RestCard;
