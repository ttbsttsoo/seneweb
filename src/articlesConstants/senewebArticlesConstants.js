import React, { Component } from "react";

import { Row, Col } from "react-materialize";
import Article from "../article/senewebArticle";

class ArticlesConstants extends Component {
  state = {
    article_ids: [4, 5, 6]
  };
  render() {
    return (
      <Row>
        {this.state.article_ids.map(id => {
          return (
            <Col s={12}>
              <Article id={id} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

// const mapStateToProps

export default ArticlesConstants;
