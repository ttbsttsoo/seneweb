import React, { Component } from "react";

import { Button, Icon } from "react-materialize";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Testing React Installed OK</p>
        <div>
          <Button>Material</Button>
        </div>
        <Button floating className="pink lighten-2 z-depth-2" icon="favorite" />
        <p>OK</p>
      </div>
    );
  }
}

export default App;
