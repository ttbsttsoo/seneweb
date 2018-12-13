import React from "react";

import { Row, Col } from "react-materialize";

const Contenu = ({ contenu }) => {
  return (
    <Row>
      <Col>{contenu}</Col>
    </Row>
  );
};

export default Contenu;
