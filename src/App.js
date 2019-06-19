import React, { Component } from 'react';
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
      { dogName: "Frankie", otherDogs: true, adultMales: true, adultFemales: true, withChildren: true, withChildren05: false, withChildren612: false, withChildren1317: true, dogSize: "Medium", dogPace: "Energetic", behaviourNervous: false, behaviourBarking: false, behaviourLeadPulling: true, behaviourReactive: false, }
    ],
    borrowers: [
      { firstName: "Gill", surname: "Openshaw", }
    ]
  }

  addBorrowers = (borrowerFirstName, borrowerSurname, borrowerEmail, borrowerMobile, borrowerAddress1, borrowerAddress2, borrowerAddress3, borrowerTownCity, borrowerPostcode, borrowerDayMon, borrowerDayTues, borrowerDayWed, borrowerDayThurs, borrowerDayFri, borrowerDaySat, borrowerDaySun, borrowerAdultMales, borrowerAdultFemales, borrowerChildAgeBand05, borrowerChildAgeBand612, borrowerChildAgeBand1317) => {
    const currentBorrowers = this.state.borrowers;
    const newBorrowerObject = { firstName: borrowerFirstName, surname: borrowerSurname, email: borrowerEmail, mobile: borrowerMobile, address1: borrowerAddress1, address2: borrowerAddress2, address3: borrowerAddress3, townCity: borrowerTownCity, postcode: borrowerPostcode, dayMon: borrowerDayMon, dayTues: borrowerDayTues, dayWed: borrowerDayWed, dayThurs: borrowerDayThurs, dayFri: borrowerDayFri, daySat: borrowerDaySat, daySun: borrowerDaySun, adultMales: borrowerAdultMales, adultFemales: borrowerAdultFemales, childAgeBand05: borrowerChildAgeBand05, childAgeBand612: borrowerChildAgeBand612, childAgeBand1317: borrowerChildAgeBand1317 }
    currentBorrowers.push(newBorrowerObject);
    this.setState({
      borrowers: currentBorrowers
    })
  }

  addDogs = (dogDogName, dogOtherDogs, dogAdultMales, dogAdultFemales, dogWithChildren, dogWithChildren05, dogWithChildren612, dogWithChildren1317, dogDogSize, dogDogPace, dogBehaviourNervous, dogBehaviourLeadPulling, dogBehaviourBarking, dogBehaviourReactive) => {
    const currentDogs = this.state.dogs;
    const newDogObject = { dogName: dogDogName, otherDogs: dogOtherDogs, adultMales: dogAdultMales, adultFemales: dogAdultFemales, withChildren: dogWithChildren, withChildren05: dogWithChildren05, withChildren612: dogWithChildren612, withChildren1317: dogWithChildren1317, dogSize: dogDogSize, dogPace: dogDogPace, behaviourNervous: dogBehaviourNervous, behaviourLeadPulling: dogBehaviourLeadPulling, behaviourBarking: dogBehaviourBarking, behaviourReactive: dogBehaviourReactive }
    currentDogs.push(newDogObject);
    this.setState({
      dogs: currentDogs
    })
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
          <DogForm
            addDogFunction={this.addDogs} />
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
                withChildren={item.withChildren}
                fromAge={item.fromAge}
                dogSize={item.dogSize}
                dogPace={item.dogPace}
                behaviourIssue={item.behaviourIssue}
                itemDone={item.completed}
                addDog={this.addDog}
              />
            })
          }
        </div>

      </div>
    );
  }

}
export default App;
