import React from "react";
import RestCard from "./RestCard";
import Modal from "react-bootstrap/Modal";

export default function SearchResult({ result, onClose }) {
  return (
    <Modal show={true} style={{ marginTop: "35px" }} onHide={onClose}>
      <Modal.Header closeButton>
        {result.black ? (
          <span>Support This Business Now!</span>
        ) : (
          <span className="secondaryColorText">Buy a Gift Card Now!</span>
        )}
      </Modal.Header>
      <Modal.Body style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <RestCard
          name={result.name}
          address={result.address}
          giftCard={result.giftCard}
          black={result.black}
          phone={result.phone}
          specialty={result.specialty}
        />
      </Modal.Body>
    </Modal>
  );
}
