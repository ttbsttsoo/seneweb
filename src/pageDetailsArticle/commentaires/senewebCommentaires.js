import React, { Component } from "react";

import { Row, Col, Navbar } from "react-materialize";
import Article from "../../article/senewebArticleDetails";
import Icon from "react-materialize/lib/Icon";

import Commentaire from "./commentaire/senewebCommentaire";

class Commentaires extends Component {
  state = {
    article_ids: [1, 2, 3, 1, 2, 3, 1, 2, 3]
  };
  render() {
    return (
      <Row>
        <Col s={12}>
          <Navbar className="grey lighten-4 black-text center z-depth-0">
            COMMENTAIRES
            <Icon className="left">bookmark_border</Icon>
            <Icon className="right">dehaze</Icon>
          </Navbar>
        </Col>
        {this.state.article_ids.map(id => {
          return <Commentaire />;
        })}
      </Row>
    );
  }
}

// const mapStateToProps

export default Commentaires;
