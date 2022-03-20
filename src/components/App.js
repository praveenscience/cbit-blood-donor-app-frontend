import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import DonorAdd from "./DonorAdd";
import DonorList from "./DonorList";

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
              <DonorList />
              <DonorAdd />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
