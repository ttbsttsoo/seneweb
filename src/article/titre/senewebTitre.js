import React from "react";
import { Row, Col, Button } from "react-materialize";

const Titre = ({ titre, topic }) => {
  return (
    <Row>
      <Col>
        <Button flat className="orange accent-4 white-text">
          {topic}
        </Button>
        {titre}
      </Col>
    </Row>
  );
};

export default Titre;
