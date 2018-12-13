import React, { Component } from "react";

import { Row, Col } from "react-materialize";
import Article from "../article/senewebArticle";
import ArticlesDAcceuil from "../articlesDAcceuil/senewebArticlesDAcceuil";
import ArticlesConstants from "../articlesConstants/senewebArticlesConstants";
import PageDetailsArticle from "../pageDetailsArticle/senewebPageDetailsArticle";
import { Route } from "react-router-dom";

class PageDAcceuil extends Component {
  render() {
    return (
      <Row>
        <Col s={8}>
          <Route exact path="/" component={ArticlesDAcceuil} />
          <Route path="/article_id" component={PageDetailsArticle} />
        </Col>
        <Col s={4}>
          <ArticlesConstants />
        </Col>
      </Row>
    );
  }
}

export default PageDAcceuil;
