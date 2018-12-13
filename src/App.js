import React, { Component } from "react";

import Navigation from "./navigation/senewebNavigation";
import Article from "./article/senewebArticle";
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
      contenu:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed veritatis aspernatur ",
      image: ArticleImage,
      titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topic: "Sport",
      date: "9h",
      reactions: {
        ncommentaires: 2
      }
    }
  };
  render() {
    return (
      <div className="seneweb">
        <Row>
          <Col s={12}>
            <Navigation categories={this.state.categories} />
          </Col>
        </Row>
        <Row>
          <Col s={4}>
            <Article article={this.state.article} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
