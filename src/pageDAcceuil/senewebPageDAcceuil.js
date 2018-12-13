import React, { Component } from "react";

import { Row, Col } from "react-materialize";
import Article from "../article/senewebArticle";

const PageDAcceuil = ({ article_ids }) => {
  return (
    <Row>
      <Col s={4}>
        <Article id={2} />
      </Col>
    </Row>
  );
};

// const mapStateToProps

export default PageDAcceuil;
