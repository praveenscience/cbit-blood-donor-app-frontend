import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header justify-content-center">
          CBIT Blood Donor App
        </Header>
      </div>
    );
  }
}

export default App;
