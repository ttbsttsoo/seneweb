import React from "react";

import { Row, Col } from "react-materialize";

const Image = ({ image }) => {
  return (
    <Row>
      <Col>
        <img src={image} alt="Image de l'article" className="responsive-img" />
      </Col>
    </Row>
  );
};

export default Image;
