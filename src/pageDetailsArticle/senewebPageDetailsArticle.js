import React, { Component } from "react";

import { Row, Col } from "react-materialize";

import { connect } from "react-redux";

import Article from "../article/senewebArticleDetails";

class PageDetailsArticle extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Article id={this.props.match.params.article_id} />;
        </Col>
      </Row>
    );
  }
}

export default PageDetailsArticle;
