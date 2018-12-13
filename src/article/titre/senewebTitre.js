import React from "react";
import { Row, Col, Button } from "react-materialize";
import { Link } from "react-router-dom";

const Titre = ({ titre, topic }) => {
  return (
    <Row>
      <Col>
        <Button flat className="orange accent-4 white-text">
          {topic}
        </Button>
        <Link to="#"> {titre}</Link>
      </Col>
    </Row>
  );
};

export default Titre;
