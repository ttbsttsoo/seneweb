import React from "react";
import { Row } from "react-materialize";
import Col from "react-materialize/lib/Col";
import Button from "react-materialize/lib/Button";

const ResumeDArticle = ({ article }) => {
  return (
    <div className="">
      <Row>
        <Col>
          <Button flat className="orange accent-4 white-text">
            {article.topic}
          </Button>
          {article.titre}
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={article.image} alt="Image de l'article" width="250px" />
        </Col>
      </Row>
      <Row>
        <Col>{article.resume}</Col>
      </Row>
      <Row>
        <Col>{article.date}</Col>
        <Col>{article.ncommentaires} commentaires</Col>
      </Row>
    </div>
  );
};

export default ResumeDArticle;
