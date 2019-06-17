import React, { Component } from 'react';
import uuid from "uuid/v4";
import Header from "./Components/Header";
import UserSelection from "./Components/UserSelection";
import BorrowersForm from "./Components/BorrowersForm";
import DogForm from "./Components/DogForm";
import DogsAvailable from "./Components/DogsAvailable";
import FundRaising from "./Components/FundRaising";

import './App.css';

class App extends Component {

  state = {
    dogs: [
      { id: uuid(), dogName: "Toby", otherDogs: "Yes", adultMales: "Yes", adultFemales: "Yes", children: "Yes", fromAge: 10, dogSize: "Medium", dogPace: "Moderate", behaviourIssue: "None", completed: false, },
      { id: uuid(), dogName: "Luca", otherDogs: "Yes", adultMales: "Yes", adultFemales: "Yes", children: "Yes", fromAge: 10, dogSize: "Medium", dogPace: "Moderate", behaviourIssue: "None", completed: false, },
      { id: uuid(), dogName: "Tilly", otherDogs: "No", adultMales: "No", adultFemales: "Yes", children: "No", fromAge: 18, dogSize: "Small", dogPace: "Slow", behaviourIssue: "Reactive", completed: false, },
      { id: uuid(), dogName: "Freddie", otherDogs: "No", adultMales: "Yes", adultFemales: "Yes", children: "No", fromAge: 18, dogSize: "Large", dogPace: "Energetic", behaviourIssue: "Nervous", completed: false, },
      { id: uuid(), dogName: "Murphy", otherDogs: "Yes", adultMales: "Yes", adultFemales: "Yes", children: "Yes", fromAge: 10, dogSize: "Medium", dogPace: "Moderate", behaviourIssue: "Lead Pulling", completed: false, },
      { id: uuid(), dogName: "Oscar", otherDogs: "No", adultMales: "Yes", adultFemales: "Yes", children: "No", fromAge: 18, dogSize: "Large", dogPace: "Energetic", behaviourIssue: "Barking", completed: false, },
      { id: uuid(), dogName: "Huxley", otherDogs: "Yes", adultMales: "Yes", adultFemales: "Yes", children: "Yes", fromAge: 10, dogSize: "Small", dogPace: "Moderate", behaviourIssue: "None", completed: false, },
      { id: uuid(), dogName: "Rosie", otherDogs: "No", adultMales: "No", adultFemales: "Yes", children: "No", fromAge: 18, dogSize: "Medium", dogPace: "Moderate", behaviourIssue: "Reactive", completed: false, },
      { id: uuid(), dogName: "Fen", otherDogs: "Yes", adultMales: "Yes", adultFemales: "Yes", children: "Yes", fromAge: 14, dogSize: "Large", dogPace: "Energetic", behaviourIssue: "Lead Pulling", completed: false, },
      { id: uuid(), dogName: "Frankie", otherDogs: "Yes", adultMales: "Yes", adultFemales: "Yes", children: "Yes", fromAge: 14, dogSize: "Medium", dogPace: "Energetic", behaviourIssue: "Nervous", completed: false, }
    ]
  }

  render() {

    return (
      <div className="container">

        <div className="row-12">
          <Header />
        </div>

        <div className="row-12">
          <FundRaising />
        </div>
        
        <div className="row-12">
          <UserSelection />
        </div>

        <div className="row-12">
          <BorrowersForm />
        </div>

        <div className="row-12">
          <DogForm />
        </div>

        <div className="row-12">
        <h5>Dogs available to borrow</h5>
        <h6>Dog's Name  Other Dog's?  Adult Males?  Adult Females? Children?  From Age? Dog Size  Dog Pace  Behaviour Issues</h6>
          {           
            this.state.dogs.map((item, index) => {
              return <DogsAvailable
                dogName={item.dogName} key={index} 
                otherDogs={item.otherDogs}
                adultMales={item.adultMales}
                adultFemales={item.adultFemales}
                children={item.children}
                fromAge={item.fromAge}
                dogSize={item.dogSize}
                dogPace={item.dogPace}
                behaviourIssue={item.behaviourIssue}
                itemDone={item.completed}
              />
            })
          }
        </div>

      </div>
    );
  }

}
export default App;
