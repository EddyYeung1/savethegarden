import React from "react";
import RestCard from "./RestCard";
import Modal from "react-bootstrap/Modal";

export default function SearchResult({ result, onClose }) {
  return (
    <Modal show={true} style={{ marginTop: "35px" }} onHide={onClose}>
      <Modal.Header closeButton>
        <span className="secondaryColorText">Buy a Gift Card Now!</span>
      </Modal.Header>
      <Modal.Body style={{paddingLeft:"50px",paddingRight:"50px"}}>
        <RestCard
          name={result.name}
          address={result.address}
          giftCard={result.giftCard}
        />
      </Modal.Body>
    </Modal>
  );
}
