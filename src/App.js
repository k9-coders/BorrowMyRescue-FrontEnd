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
      { dogName: "Frankie", otherDogs: true, adultMales: true, adultFemales: true, withChildren: false, dogSize: "Medium", dogPace: "Energetic", behaviourNervous: false, behaviourBarking: false, behaviourLeadPulling: true, behaviourReactive: false,}
    ],
    borrowers: [
      { firstName: "Gill", surname: "Openshaw", email: "me.someone@gmail.com", mobile: "07123456789", address1: "1 High Street", address2: "Chorlton", address3: "", townCity: "Manchester",postcode:"M1 1AB", dayMon: true, dayTues: true, dayWed: true, dayThurs: false, dayFri: false, daySat: false, daySun: false, adultMales: 1, adultFemales: 1, childAgeBandNone: true, childAgeBand05: 0, childAgeBand612: 0, childAgeBand1317: 2, otherDog: true, ownDogType: "Springer Spaniel", ownDogDetails: "Lead Pulling", dogPaceSlow: true, dogPaceModerate: true, dogPaceEnergetic: true, dogSizeSmall: true, dogSizeMedium: true, dogSizeLarge: false, dogBehaviourNervous: true, dogBehaviourBarking: true, dogBehaviourLeadPulling: true, dogBehaviourReactive: false}
    ]
  }

  addBorrowers = (borrowerFirstName, borrowerSurname, borrowerEmail, borrowerMobile, borrowerAddress1, borrowerAddress2, borrowerAddress3, borrowerTownCity, borrowerPostcode, borrowerDayMon, borrowerDayTues, borrowerDayWed, borrowerDayThurs, borrowerDayFri, borrowerDaySat, borrowerDaySun, borrowerAdultMales, borrowerAdultFemales, borrowerChildAgeBandNone, borrowerChildAgeBand05, borrowerChildAgeBand612, borrowerChildAgeBand1317, borrowerOtherDog, borrowerownDogType, borrowerownDogDetails, borrowerdogPaceSlow, borrowerdogPaceModerate, borrowerdogPaceEnergetic, borrowerDogSizeSmall, borrowerdogBehaviourNervous, borrowerdogBehaviourBarking, borrowerdogBehaviourLeadPulling, borrowerdogBehaviourReactive) => {
    const currentBorrowers = this.state.borrowers;
    const newBorrowerObject = { firstName: borrowerFirstName, surname: borrowerSurname, email: borrowerEmail, mobile: borrowerMobile, address1: borrowerAddress1, address2: borrowerAddress2, address3: borrowerAddress3, townCity: borrowerTownCity, postcode: borrowerPostcode, dayMon: borrowerDayMon, dayTues: borrowerDayTues, dayWed: borrowerDayWed, dayThurs: borrowerDayThurs, dayFri: borrowerDayFri, daySat: borrowerDaySat, daySun: borrowerDaySun, adultMales: borrowerAdultMales, adultFemales: borrowerAdultFemales, childAgeBandNone: borrowerChildAgeBandNone, childAgeBand05: borrowerChildAgeBand05, childAgeBand612: borrowerChildAgeBand612, childAgeBand1317: borrowerChildAgeBand1317, otherDog:borrowerOtherDog,  ownDogType:borrowerownDogType, ownDogDetails:borrowerownDogDetails, dogPaceSlow:borrowerdogPaceSlow, dogPaceModerate:borrowerdogPaceModerate, dogPaceEnergetic:borrowerdogPaceEnergetic, dogSizeSmall: borrowerDogSizeSmall, dogBehaviourNervous: borrowerdogBehaviourNervous, dogBehaviourBarking:borrowerdogBehaviourBarking, dogBehaviourLeadPulling:borrowerdogBehaviourLeadPulling, dogBehaviourReactive:borrowerdogBehaviourReactive }
    currentBorrowers.push(newBorrowerObject);
    this.setState({
      borrowers: currentBorrowers
    })
  }

  addDogs = (dogDogName, dogOtherDogs, dogAdultMales, dogAdultFemales, dogWithChildrenAll, dogWithChildrenNone,  dogWithChildren05, dogWithChildren012, dogDogSize, dogDogPace, dogBehaviourNervous, dogBehaviourLeadPulling, dogBehaviourBarking, dogBehaviourReactive) => {
    const currentDogs = this.state.dogs;
    const newDogObject = { dogName: dogDogName, otherDogs: dogOtherDogs, adultMales: dogAdultMales, adultFemales: dogAdultFemales, withChildrenAll: dogWithChildrenAll, withChildrenNone: dogWithChildrenNone, withChildren05: dogWithChildren05, withChildren012: dogWithChildren012, dogSize: dogDogSize, dogPace: dogDogPace, behaviourNervous: dogBehaviourNervous, behaviourLeadPulling: dogBehaviourLeadPulling, behaviourBarking: dogBehaviourBarking, behaviourReactive: dogBehaviourReactive }
    currentDogs.push(newDogObject);
    this.setState({
      dogs: currentDogs
    })
  }

  render() {

    return (
      <div className="container">

        {/* <div className="row-12">
          <Header />
        </div>

        <div className="row-12">
          <FundRaising />
        </div>

        <div className="row-12">
          <UserSelection />
        </div> */}

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
                dogSize={item.dogSize}
                dogPace={item.dogPace}
                behaviourNervous={item.behaviourNervous}
                behaviourBarking={item.behaviourBarking}
                behaviourLeadPulling={item.behaviourLeadPulling}
                behaviourReactive={item.behaviourReactive}
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
