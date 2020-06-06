import React, { useState, useEffect, useLayoutEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import Card from "react-bootstrap/Card";

export default function CountyCarousel({
  reset,
  onRegionChange,
  onCountyChange,
  index,
  county
}) {
  const south = [
    "Atlantic",
    "Burlington",
    "Camden",
    "Cape May",
    "Cumberland",
    "Gloucester",
    "Salem"
  ];
  const central = [
    "Middlesex",
    "Monmouth",
    "Ocean",
    "Mercer",
    "Somerset",
    "Hunterdon"
  ];
  const north = [
    "Bergen",
    "Union",
    "Essex",
    "Hudson",
    "Morris",
    "Passaic",
    "Sussex",
    "Warren"
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(index);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [counties, setCounties] = useState("");
  const [cards, setCards] = useState(5);
  const [gutter, setGutter] = useState(10);
  const chevronWidth = 40;

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 991) {
        setCards(5);
        setGutter(10);
      }
      if (window.innerWidth <= 990) {
        setCards(4);
        setGutter(10);
      }
      if (window.innerWidth < 768) {
        setCards(2);
        setGutter(0);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [cards, gutter]);

  useEffect(() => {
    const createChildren = arr =>
      arr.map((county, index) => (
        <button key={index} id="county-button">
          <Card
            key={index}
            className={`county-card ${hoverIndex === index ? "clicked" : ""}`}
            onClick={() => {
              setHoverIndex(index);
              onCountyChange(county);
            }}
          >
            <Card.Body id="card-body-font">{county}</Card.Body>
          </Card>
        </button>
      ));
    if (county === "South") {
      setCounties(createChildren(south));
    }
    if (county === "Central") {
      setCounties(createChildren(central));
    }
    if (county === "North") {
      setCounties(createChildren(north));
    }
    if (reset) {
      setActiveItemIndex(0);
      setHoverIndex(0);
      onRegionChange(false);
    }
  }, [county, activeItemIndex, onRegionChange, reset, hoverIndex]);

  return (
    <div style={{ padding: `10px ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={cards}
        gutter={gutter}
        leftChevron={<button id="chevron-button">{"<"}</button>}
        rightChevron={<button id="chevron-button">{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        classes={{itemsWrapper: "items-wrapper"}}
      >
        {counties}
      </ItemsCarousel>
    </div>
  );
}
