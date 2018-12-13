import React from "react";

import { Row, Col } from "react-materialize";

const Image = ({ image }) => {
  return (
    <Row>
      <Col>
        <img src={image} alt="Image de l'article" width="250px" />
      </Col>
    </Row>
  );
};

export default Image;
