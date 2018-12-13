import React, { Component } from "react";

import { Row, Col } from "react-materialize";
import Article from "../article/senewebArticle";

class ArticlesConstants extends Component {
  state = {
    article_ids: [1, 2, 3]
  };
  render() {
    return (
      <Row>
        {this.state.article_ids.map(id => {
          return (
            <Col s={12}>
              <p>Article Constant</p>
            </Col>
          );
        })}
      </Row>
    );
  }
}

// const mapStateToProps

export default ArticlesConstants;
