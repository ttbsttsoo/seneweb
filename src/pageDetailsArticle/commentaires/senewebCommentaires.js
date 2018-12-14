import React, { Component } from "react";

import { Row, Col, Navbar } from "react-materialize";
import Article from "../../article/senewebArticleDetails";
import Icon from "react-materialize/lib/Icon";

class Commentaires extends Component {
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
      </Row>
    );
  }
}

// const mapStateToProps

export default Commentaires;
