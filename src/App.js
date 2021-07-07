import React, { Component } from "react";
import Movie from "./container/Movie";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Movie />
      </div>
    );
  }
}

export default App;
