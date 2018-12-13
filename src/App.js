import React, { Component } from "react";

import Navigation from "./navigation/senewebNavigation";
import PageDAcceuil from "./pageDAcceuil/senewebPageDAcceuil";
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
    ]
  };
  render() {
    return (
      <div className="">
        <Row>
          <Col s={12}>
            <Navigation categories={this.state.categories} />
          </Col>
        </Row>
        <PageDAcceuil />
      </div>
    );
  }
}

export default App;
