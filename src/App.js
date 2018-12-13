import React, { Component } from "react";

import Navigation from "./navigation/senewebNavigation";
import PageDAcceuil from "./pageDAcceuil/senewebPageDAcceuil";
import { Row } from "react-materialize";
import Col from "react-materialize/lib/Col";

import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
        <div className="">
          <Row>
            <Col s={12}>
              <Navigation categories={this.state.categories} />
            </Col>
          </Row>
          <PageDAcceuil />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
