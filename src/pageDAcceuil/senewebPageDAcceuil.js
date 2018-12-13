import React, { Component } from "react";

import ArticleImage from "../img/mane.jpg";
import { Row, Col } from "react-materialize";
import Article from "../article/senewebArticle";

class PageDAcceuil extends Component {
  render() {
    return (
      <Row>
        <Col s={4}>
          <Article id={2} />
        </Col>
      </Row>
    );
  }
}

export default PageDAcceuil;
