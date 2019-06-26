import React, { Component } from 'react';
// add axios to allow access to borrowMyRescueDB database
import axios from "axios";
import Header from "./Components/Header";
import BorrowersForm from "./Components/BorrowersForm";
import DogForm from "./Components/DogForm";
import DogsAvailable from "./Components/DogsAvailable";
import FundRaising from "./Components/FundRaising";
import Carousel from "./Components/Carousel";
import MatchedBorrowers from "./Components/MatchedBorrowers";
import UserSelection from "./Components/UserSelection";
import VisitorView from "./Components/VisitorView";
import AdminView from "./Components/AdminView";
import WelcomeMessage from "./Components/WelcomeMessage";

import './Components/Fundraising.css';

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

    ],
    borrowerMatches: [
    ],
    type: "visitor"

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
        this.setState({ dogs: response.data.dogs });
      })
      // error handling if the get fails to retrieve data
      .catch(error => {
        console.log(error);
      });
    // retrieve borrowers 
    axios.get('https://83qwfqi218.execute-api.eu-west-2.amazonaws.com/dev/borrowers')
      .then(response => {
        // test log to console to ensure borrowers list is loaded
        console.log("borrowers list ", response.data.borrowers);
        // get completed set state to list of borrowers from database
        this.setState({ borrowers: response.data.borrowers });
      })
      // error handling if the get fails to retrieve data
      .catch(error => {
        console.log(error);
      });
  }

  addBorrowers = (borrowerFirstName, borrowerSurname, borrowerEmail, borrowerMobile, borrowerAddress1, borrowerAddress2, borrowerAddress3, borrowerTownCity, borrowerPostcode, borrowerDayMon, borrowerDayTues, borrowerDayWeds, borrowerDayThurs, borrowerDayFri, borrowerDaySat, borrowerDaySun, borrowerAdultMales, borrowerAdultFemales, borrowerChildren, borrowerChildAgeBand05, borrowerChildAgeBand612, borrowerChildAgeBand1318, borrowerownDog, borrowerownDogType, borrowerownDetails, borrowerDogPace, borrowerDogSize, borrowerdogBehaviourNervous, borrowerdogBehaviourBarking, borrowerdogBehaviourLeadPulling, borrowerdogBehaviourReactive) => {
    console.log("start of add borrowers");
    const currentBorrowers = this.state.borrowers;

    const newBorrowerObject = {
      firstName: borrowerFirstName, surname: borrowerSurname,
      email: borrowerEmail, mobile: borrowerMobile,
      postcode: borrowerPostcode,
      address1: borrowerAddress1, address2: borrowerAddress2,
      address3: borrowerAddress3, townCity: borrowerTownCity,
      dayMon: borrowerDayMon,
      dayTues: borrowerDayTues, dayWeds: borrowerDayWeds,
      dayThurs: borrowerDayThurs, dayFri: borrowerDayFri,
      daySat: borrowerDaySat, daySun: borrowerDaySun,
      borrowerMales: borrowerAdultMales, borrowerFemales: borrowerAdultFemales,
      borrowerChildren: borrowerChildren,
      childAgeBand05: borrowerChildAgeBand05,
      childAgeBand612: borrowerChildAgeBand612,
      childAgeBand1318: borrowerChildAgeBand1318,
      ownDog: borrowerownDog, ownDogType: borrowerownDogType,
      ownDogDetails: borrowerownDetails,
      borrowerDogPace: borrowerDogPace, borrowerdogSize: borrowerDogSize,
      expNervous: borrowerdogBehaviourNervous,
      expBarking: borrowerdogBehaviourBarking,
      expLeadPulling: borrowerdogBehaviourLeadPulling,
      expReactive: borrowerdogBehaviourReactive
    }

    console.log("new borrower ", newBorrowerObject)

    axios.post('https://83qwfqi218.execute-api.eu-west-2.amazonaws.com/dev/borrowers',
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
    console.log("start of add dogs");
    const currentDogs = this.state.dogs;
    const newDogObject =
    {
      dogName: dogDogName, otherDogs: dogOtherDogs,
      adultMales: dogAdultMales, adultFemales: dogAdultFemales,
      withChildren: dogWithChildren, withChildren05: dogWithChildren05,
      withChildren612: dogWithChildren612, withChildren1318:
        dogWithChildren1318, dogSize: dogDogSize, dogPace: dogDogPace,
      behaviourNervous: dogBehaviourNervous,
      behaviourLeadPulling: dogBehaviourLeadPulling,
      behaviourBarking: dogBehaviourBarking, behaviourReactive: dogBehaviourReactive
    }

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

  // retrieve matching borrower list from the database
  getDogMatch = (idMatchDog) => {
    console.log("*** calling getDogMatch");
    // retrieve list of possible borrower matches for dog
    axios.get(`https://83qwfqi218.execute-api.eu-west-2.amazonaws.com/dev/matching/${idMatchDog}`)
      .then(response => {
        // test log to console to ensure matched borrowers list is loaded
        console.log("matched borrowers list ", response.data.borrowerMatches);
        // get completed set state to list of dogs from database
        this.setState({ borrowerMatches: response.data.borrowerMatches });
      })
      // error handling if the get fails to retrieve data
      .catch(error => {
        console.log(error);
      });
    // launch the modal form from here???
  }

  updateUserSelected = (typeSelected) => {
    // alert(typeSelected);
    this.setState({ type: typeSelected });
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


        <Carousel />

        <WelcomeMessage />

        <div className="row-12">
          <UserSelection updateUserSelected={this.updateUserSelected}
            selection={this.state.type} />
        </div>

        {
          this.state.type === 'visitor' ?
            <VisitorView addBorrowers={this.addBorrowers} /> :
            <AdminView
              borrowerMatches={this.state.borrowerMatches}
              dogs={this.state.dogs}
              addDogs={this.addDogs}
              getDogMatch={this.getDogMatch}
            />
        }

      </div>

    );
  }

}
export default App;
