import React, { Component } from "react";

import { Row, Col, Navbar } from "react-materialize";
import Article from "../../article/senewebArticleDetails";
import Icon from "react-materialize/lib/Icon";
import Button from "react-materialize/lib/Button";

class PostsRecents extends Component {
  state = {
    article_ids: [1, 2, 3]
  };
  render() {
    return (
      <Row>
        <Col s={12}>
          <Navbar className="white black-text center z-depth-0">
            POSTS RECENTS
            <Icon className="left">bookmark_border</Icon>
            <Icon className="right">dehaze</Icon>
          </Navbar>
        </Col>
        {this.state.article_ids.map(id => {
          return (
            <Col s={4}>
              <Article id={id} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

// const mapStateToProps

export default PostsRecents;
