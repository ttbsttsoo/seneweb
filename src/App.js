import React, { Component } from "react";

import { Button } from "react-materialize";

import CategoriesNavbar from "./CategoriesNavbar";

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
      <div class="seneweb">
        <CategoriesNavbar categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
