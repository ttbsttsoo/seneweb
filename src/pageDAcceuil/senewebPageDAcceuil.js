import React, { Component } from "react";

import { Row, Col } from "react-materialize";
import Article from "../article/senewebArticle";
import ArticlesDAcceuil from "../articlesDAcceuil/senewebArticlesDAcceuil";
import ArticlesConstants from "../articlesConstants/senewebArticlesConstants";

class PageDAcceuil extends Component {
  render() {
    return (
      <Row>
        <Col s={8}>
          <ArticlesDAcceuil />
        </Col>
        <Col s={4}>
          <ArticlesConstants />
        </Col>
      </Row>
    );
  }
}

export default PageDAcceuil;
