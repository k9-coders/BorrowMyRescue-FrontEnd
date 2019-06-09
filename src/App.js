import React, { Component } from 'react';
import Header from "./Components/Header";
import BorrowersForm from "./Components/BorrowersForm";
import DogForm from "./Components/DogForm";
import DogsAvailable from "./Components/DogsAvailable";

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="container">

        <div className="row">
          <Header />
        </div>

        <div className="row">
          <BorrowersForm />
        </div>

        <div className="row">
          <DogForm />
        </div>

        <div className="row">
          <DogsAvailable />
        </div>

      </div>
    );
  }

}
export default App;
