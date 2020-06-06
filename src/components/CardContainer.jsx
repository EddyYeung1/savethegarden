import React from "react";
import Container from "react-bootstrap/Container";
import Results from "./Results";
import Pagination from "react-js-pagination";

function CardContainer({restaurants, posts, currentPage, paginate}) {
  return (
    <div>
      <Container id="card-container">
        <Results startIndex={posts} restaurants={restaurants} />
        <Pagination
          innerClass="pagination center-pagination"
          itemClass="page-item"
          linkClass="page-link pag-link"
          activeLinkClass = "pag-item-active"
          activePage={currentPage}
          itemsCountPerPage = {12}
          totalItemsCount={restaurants.length}
          pageRangeDisplayed={5}
          onChange={paginate}
        />
      </Container>
    </div>
  );
}

export default CardContainer;
