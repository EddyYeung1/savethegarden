import React, { useState, useLayoutEffect } from "react";
import RestCard from "./RestCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Results({ startIndex, restaurants }) {
  const [smallScreen, setSmallScreen] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [smallScreen]);

  const restaurantList = restaurants.map((restaurant,index) => (
    <Col key={index}>
      <RestCard
        name={restaurant.name}
        address={restaurant.address}
        siteLink={restaurant.site}
        giftCard={restaurant.giftCard}
        black = {restaurant.black}
        phone = {restaurant.phone}
        specialty = {restaurant.specialty}
      />
    </Col>
  ));
  return (
    <div>
      {smallScreen ? (
        <div>
          <Row className="card-row">
            {restaurantList.slice(startIndex, startIndex + 2)}
          </Row>
          <Row className="card-row">
            {restaurantList.slice(startIndex + 2, startIndex + 4)}
          </Row>
          <Row className="card-row">
            {restaurantList.slice(startIndex + 4, startIndex + 6)}
          </Row>
          <Row className="card-row">
            {restaurantList.slice(startIndex + 6, startIndex + 8)}
          </Row>
          <Row className="card-row">
            {restaurantList.slice(startIndex + 10, startIndex + 12)}
          </Row>
        </div>
      ) : (
        <div>
          <Row className="card-row">
            {restaurantList.slice(startIndex, startIndex + 3)}
          </Row>
          <Row className="card-row">
            {restaurantList.slice(startIndex + 3, startIndex + 6)}
          </Row>
          <Row className="card-row">
            {restaurantList.slice(startIndex + 6, startIndex + 9)}
          </Row>
          <Row className="card-row">
            {restaurantList.slice(startIndex + 9, startIndex + 12)}
          </Row>
        </div>
      )}
    </div>
  );
}
