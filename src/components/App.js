import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header justify-content-center">
          CBIT Blood Donor App
        </Header>
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-8">
                <h2>List of Blood Donors</h2>
              </div>
              <div className="col-12 col-md-4">
                <h2>Add yourself as Blood Donor</h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
