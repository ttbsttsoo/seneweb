import React, { Component } from "react";

import CategoriesNavbar from "./CategoriesNavbar";
import ResumeDArticle from "./ResumeDArticle";

import ArticleImage from "./img/mane.jpg";
import { Row } from "react-materialize";
import Col from "react-materialize/lib/Col";

class App extends Component {
  state = {
    categories: [
      "Actualite",
      "Societe",
      "Sport",
      "Politique",
      "Photos",
      "Videos",
      "Blogs",
      "Faits-Divers",
      "People"
    ],
    article: {
      resume:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed veritatis aspernatur ",
      image: ArticleImage,
      titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topic: "Sport",
      date: "9h",
      ncommentaires: 2
    }
  };
  render() {
    return (
      <div className="seneweb">
        <Row>
          <Col s={12}>
            <CategoriesNavbar categories={this.state.categories} />
          </Col>
        </Row>
        <Row>
          <Col s={4}>
            <ResumeDArticle article={this.state.article} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
