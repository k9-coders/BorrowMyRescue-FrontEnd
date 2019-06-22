import React, { Component } from 'react';
// add axios to allow access to borrowMyRescueDB database
import axios from "axios";
import Header from "./Components/Header";
import UserSelection from "./Components/UserSelection";
import BorrowersForm from "./Components/BorrowersForm";
import DogForm from "./Components/DogForm";
import DogsAvailable from "./Components/DogsAvailable";
import FundRaising from "./Components/FundRaising";

import './App.css';


class App extends Component {

  // hard coded list of dogs/borrowers for reference
  //state = {
  //  dogs: [
  //   { dogName: "Frankie", otherDogs: true, adultMales: true, adultFemales: true, withChildren: false, dogSize: "Medium", dogPace: "Energetic", behaviourNervous: false, behaviourBarking: false, behaviourLeadPulling: true, behaviourReactive: false,}
  // ],
  // borrowers: [
  //   { firstName: "Gill", surname: "Openshaw", email: "me.someone@gmail.com", mobile: "07123456789", address1: "1 High Street", address2: "Chorlton", address3: "", townCity: "Manchester",postcode:"M1 1AB", dayMon: true, dayTues: true, dayWed: true, dayThurs: false, dayFri: false, daySat: false, daySun: false, adultMales: 1, adultFemales: 1, childAgeBandNone: true, childAgeBand05: 0, childAgeBand612: 0, childAgeBand1317: 2, otherDog: true, ownDogType: "Springer Spaniel", ownDogDetails: "Lead Pulling", dogPaceSlow: true, dogPaceModerate: true, dogPaceEnergetic: true, dogSizeSmall: true, dogSizeMedium: true, dogSizeLarge: false, dogBehaviourNervous: true, dogBehaviourBarking: true, dogBehaviourLeadPulling: true, dogBehaviourReactive: false}
  //  ]
  //}
  state = {
    dogs: [ 

    ],
    borrowers: [
      
    ]
  }
  // load list of dogs when the App.js component is launched
  // load list of borrowers when the App.js component is launched
  componentWillMount() {
    // retrieve dogs
    axios.get('https://83qwfqi218.execute-api.eu-west-2.amazonaws.com/dev/dogs')
    .then(response => {
      // test log to console to ensure dogs list is loaded
      //console.log("dogs list ", response.data.dogs);
      // get completed set state to list of dogs from database
      this.setState({dogs: response.data.dogs});
    })
    // error handling if the get fails to retrieve data
    .catch(error => {
      console.log(error);
    });
    // retrieve borrowers 
    axios.get('https://83qwfqi218.execute-api.eu-west-2.amazonaws.com/dev/borrowers')
    .then(response => {
      // test log to console to ensure dogs list is loaded
      //console.log("dogs list ", response.data.dogs);
      // get completed set state to list of dogs from database
      this.setState({borrowers: response.data.borrowers});
    })
    // error handling if the get fails to retrieve data
    .catch(error => {
      console.log(error);
    });
    }

  addBorrowers = (borrowerFirstName, borrowerSurname, borrowerEmail, 
    borrowerMobile, borrowerAddress1, borrowerAddress2, borrowerAddress3, 
    borrowerTownCity, borrowerPostcode, borrowerDayMon, borrowerDayTues, 
    borrowerDayWed, borrowerDayThurs, borrowerDayFri, borrowerDaySat, 
    borrowerDaySun, borrowerAdultMales, borrowerAdultFemales, 
    borrowerChildren, borrowerChildAgeBand05, borrowerChildAgeBand612, 
    borrowerChildAgeBand1318, borrowerOtherDog, borrowerownDogType, 
    borrowerownDogDetails, borrowerDogPace, borrowerDogSize, 
    borrowerdogBehaviourNervous, borrowerdogBehaviourBarking, 
    borrowerdogBehaviourLeadPulling, borrowerdogBehaviourReactive) => {

    const currentBorrowers = this.state.borrowers;

    const newBorrowerObject = { firstName: borrowerFirstName, surname: borrowerSurname, 
      email: borrowerEmail, mobile: borrowerMobile, 
      address1: borrowerAddress1, address2: borrowerAddress2, 
      address3: borrowerAddress3, townCity: borrowerTownCity, 
      postcode: borrowerPostcode, dayMon: borrowerDayMon, 
      dayTues: borrowerDayTues, dayWed: borrowerDayWed, 
      dayThurs: borrowerDayThurs, dayFri: borrowerDayFri, 
      daySat: borrowerDaySat, daySun: borrowerDaySun, 
      borrowerMales: borrowerAdultMales, borrowerFemales: borrowerAdultFemales, 
      borrowerChildren: borrowerChildren, 
      childAgeBand05: borrowerChildAgeBand05, 
      childAgeBand612: borrowerChildAgeBand612, 
      childAgeBand1318: borrowerChildAgeBand1318, 
      ownDog:borrowerOtherDog, ownDogType:borrowerownDogType, 
      ownDogDetails:borrowerownDogDetails, 
      borrowerDogPace:borrowerDogPace, dogSize: borrowerDogSize, 
      dogBehaviourNervous: borrowerdogBehaviourNervous, 
      dogBehaviourBarking:borrowerdogBehaviourBarking, 
      dogBehaviourLeadPulling:borrowerdogBehaviourLeadPulling, 
      dogBehaviourReactive:borrowerdogBehaviourReactive
       }

    console.log("new borrower ",newBorrowerObject)

    axios.post('https://83qwfqi218.execute-api.eu-west-2.amazonaws.com/dev/dogs', 
      newBorrowerObject)
      .then(result => {
        const borrowerId = result.data.borrowerId;
        newBorrowerObject.borrowerId = borrowerId;
        currentBorrowers.push(newBorrowerObject);
        // Always use setState to update any part of the state which needs to change
        this.setState({
          borrowers: currentBorrowers
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addDogs = (dogDogName, dogOtherDogs, dogAdultMales, dogAdultFemales, dogWithChildren, dogWithChildren05, dogWithChildren612, dogWithChildren1318, dogDogSize, dogDogPace, dogBehaviourNervous, dogBehaviourLeadPulling, dogBehaviourBarking, dogBehaviourReactive) => {
    const currentDogs = this.state.dogs;
    const newDogObject = 
    { dogName: dogDogName, otherDogs: dogOtherDogs, 
      adultMales: dogAdultMales, adultFemales: dogAdultFemales, 
      withChildren: dogWithChildren, withChildren05: dogWithChildren05, 
      withChildren612: dogWithChildren612, withChildren1318: 
      dogWithChildren1318, dogSize: dogDogSize, dogPace: dogDogPace, 
      behaviourNervous: dogBehaviourNervous, 
      behaviourLeadPulling: dogBehaviourLeadPulling, 
      behaviourBarking: dogBehaviourBarking, behaviourReactive: dogBehaviourReactive }
    axios.post('https://83qwfqi218.execute-api.eu-west-2.amazonaws.com/dev/dogs', 
      newDogObject)
      .then(result => {
        const dogId = result.data.dogId;
        newDogObject.dogId = dogId;
        currentDogs.push(newDogObject);
        // Always use setState to update any part of the state which needs to change
        this.setState({
          dogs: currentDogs
          });
      })
      .catch(err => {
        console.log(err);
      });
    
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
          <BorrowersForm 
          addBorrowerFunction={this.addBorrowers} />
        </div>

        <div className="row-12">
          <DogForm
            addDogFunction={this.addDogs} />
        </div>

        <div className="row-12">
          <h5>Dogs available to borrow</h5> 
          <div className="col">
              <div className="row"></div>
                <div className="row">
                  <div className="col">
                    <h6> Dog's Name</h6>
                  </div>
                  <div className="col">
                    <h6>Other Dogs</h6>
                  </div>
                  <div className="col">
                    <h6>Adult Males</h6>
                  </div>
                  <div className="col">
                    <h6>Adult Females</h6>
                  </div>
                  <div className="col">
                    <h6>Children</h6>
                  </div>
                  <div className="col">
                    <h6>Age 0-5</h6>
                  </div>
                  <div className="col">
                    <h6>Age 6-12</h6>
                  </div>
                  <div className="col">
                    <h6>Age 13-18</h6>
                  </div>
                  <div className="col">
                    <h6>Dog Size</h6>
                  </div>
                  <div className="col">
                    <h6>Dog Pace</h6>
                  </div>
                  <div className="col">
                    <h6>Nervous</h6>
                  </div>
                  <div className="col">
                    <h6>Barking</h6>
                  </div>
                  <div className="col">
                    <h6>Lead Pulling</h6>
                  </div>
                  <div className="col">
                    <h6>Reactive</h6>
                  </div>
                </div>
              </div>

          {
            this.state.dogs.map((item, index) => {
              return <DogsAvailable
                dogName={item.dogName} key={index}
                otherDogs={item.otherDogs}
                adultMales={item.adultMales}
                adultFemales={item.adultFemales}
                withChildren={item.withChildren}
                withChildren05={item.withChildren05}
                withChildren612={item.withChildren612}
                withChildren1318={item.withChildren1318}
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
