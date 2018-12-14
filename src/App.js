import React, { Component } from "react";

import Navigation from "./navigation/senewebNavigation";
import PageDAcceuil from "./pageDAcceuil/senewebPageDAcceuil";
import { Row } from "react-materialize";
import Col from "react-materialize/lib/Col";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Row>
            <Col s={12}>
              <Navigation />
            </Col>
          </Row>
          <PageDAcceuil />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
