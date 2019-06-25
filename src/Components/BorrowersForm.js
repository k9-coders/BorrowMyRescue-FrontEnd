import React, { Component } from "react";

class BorrowersForm extends Component {

    state = {
        borrowerfirstName: "",
        borrowersurname: "",
        borroweremail: "",
        borrowermobile: "",
        borroweraddress1: "",
        borroweraddress2: "",
        borroweraddress3: "",
        borrowertownCity: "",
        borrowerPostCode: "",
        borrowerdayMon: false,
        borrowerdayTues: false,
        borrowerdayWeds: false,
        borrowerdayThurs: false,
        borrowerdayFri: false,
        borrowerdaySat: false,
        borrowerdaySun: false,
        borroweradultMales: false,
        borroweradultFemales: false,
        borrowerChildren: false,
        borrowerchildAgeBand05: false,
        borrowerchildAgeBand612: false,
        borrowerchildAgeBand1318: false,
        borrowerownDog: "",
        borrowerownDogType: "",
        borrowerownDetails: "",
        borrowerdogPace: "",
        borrowerdogSize: "",
        borrowerdogBehaviourNervous: false,
        borrowerdogBehaviourBarking: false,
        borrowerdogBehaviourLeadPulling: false,
        borrowerdogBehaviourReactive: false
    }

    // used to set focus on borrower first name input box
    constructor(props) {
    // always need super(props)
    // as first line in a constructor
    super(props);
    // create a ref to store the dogNameInput DOM element
    this.firstNameInput = React.createRef();
    // create a ref to store the dateInput DOM element
    //this.dateInput = React.createRef();
    // constructor to bind add new borrower button click
    // to borrower input textbox firstNameInput
    this.addBorrowerClicked = this.addBorrowerClicked.bind(this);
    }

    // display an alert message 
    // this is used to inform a borrower that their details have been submitted to our database
    showAlert() {
      alert("Thankyou for submitting your details, a member of our team will be in touch with you shortly");
    } 
  
    firstNameData = (event) => {
        const borrowerfirstName = event.target.value;
        this.setState({
            borrowerfirstName: borrowerfirstName
        });
    }

    surnameData = (event) => {
        const borrowersurname = event.target.value;
        this.setState({
            borrowersurname: borrowersurname
        });
    }

    emailData = (event) => {
        const borroweremail = event.target.value;
        this.setState({
            borroweremail: borroweremail
        });
    }

    mobileData = (event) => {
        const borrowermobile = event.target.value;
        this.setState({
            borrowermobile: borrowermobile
        });
    }

    address1Data = (event) => {
        const borroweraddress1 = event.target.value;
        this.setState({
            borroweraddress1: borroweraddress1
        });
    }

    address2Data = (event) => {
        const borroweraddress2 = event.target.value;
        this.setState({
            borroweraddress2: borroweraddress2
        });
    }

    address3Data = (event) => {
        const borroweraddress3 = event.target.value;
        this.setState({
            borroweraddress3: borroweraddress3
        });
    }

    townCityData = (event) => {
        const borrowertownCity = event.target.value;
        this.setState({
            borrowertownCity: borrowertownCity
        });
    }

    postcodeData = (event) => {
        const borrowerpostcode = event.target.value;
        this.setState({
            borrowerPostCode: borrowerpostcode
        });
    }

    dayMonSelected = (event) => {
        const borrowerdayMon = event.target.checked;
        this.setState({
            borrowerdayMon: borrowerdayMon
        });
    }

    dayTuesSelected = (event) => {
        const borrowerdayTues = event.target.checked;
        this.setState({
            borrowerdayTues: borrowerdayTues
        });
    }

    dayWedsSelected = (event) => {
        const borrowerdayWeds = event.target.checked;
        this.setState({
            borrowerdayWeds: borrowerdayWeds
        });
    }

    dayThursSelected = (event) => {
        const borrowerdayThurs = event.target.checked;
        this.setState({
            borrowerdayThurs: borrowerdayThurs
        });
    }

    dayFriSelected = (event) => {
        const borrowerdayFri = event.target.checked;
        this.setState({
            borrowerdayFri: borrowerdayFri
        });
    }

    daySatSelected = (event) => {
        const borrowerdaySat = event.target.checked;
        this.setState({
            borrowerdaySat: borrowerdaySat
        });
    }

    daySunSelected = (event) => {
        const borrowerdaySun = event.target.checked;
        this.setState({
            borrowerdaySun: borrowerdaySun
        });
    }

    adultMalesSelected = (event) => {
        const borroweradultMales = event.target.checked;
        this.setState({
            borroweradultMales: borroweradultMales
        });
    }

    adultFemalesSelected = (event) => {
        const borroweradultFemales = event.target.checked;
        this.setState({
            borroweradultFemales: borroweradultFemales
        });
    }
    // store whether borrower has any children
    borrowerChildrenSelected = (event) => {
        const borrowerChildren = event.target.checked;
        this.setState({
            borrowerChildren: borrowerChildren
        });
    }

    childAgeBand05Selected = (event) => {
        const borrowerchildAgeBand05 = event.target.checked;
        this.setState({
            borrowerchildAgeBand05: borrowerchildAgeBand05
        });
    }

    childAgeBand612Selected = (event) => {
        const borrowerchildAgeBand612 = event.target.checked;
        this.setState({
            borrowerchildAgeBand612: borrowerchildAgeBand612
        });
    }

    childAgeBand1318Selected = (event) => {
        const borrowerchildAgeBand1318 = event.target.checked;
        this.setState({
            borrowerchildAgeBand1318: borrowerchildAgeBand1318
        });
    }

    ownDogSelected = (event) => {
        const borrowerownDog = event.target.value === "Yes";
        this.setState({
            borrowerownDog: borrowerownDog
        });
    }

    ownDogTypeData = (event) => {
        const borrowerownDogType = event.target.value;
        this.setState({
            borrowerownDogType: borrowerownDogType
        });
    }

    ownDogDetailsData = (event) => {
        const borrowerownDetails = event.target.value;
        this.setState({
            borrowerownDetails: borrowerownDetails
        });
    }

    borrowerPaceSelected = (event) => {
        const borrowerdogPace = event.target.value;
        this.setState({
            borrowerdogPace: borrowerdogPace
        });
    }

    borrowerDogSizeSelected = (event) => {
        const borrowerdogSize = event.target.value;
        this.setState({
            borrowerdogSize: borrowerdogSize
        });
    }

    dogBehaviourNervous = (event) => {
        const borrowerdogBehaviourNervousYes = event.target.checked;
        this.setState({
            borrowerdogBehaviourNervous: borrowerdogBehaviourNervousYes
        });
    }

    dogBehaviourBarking = (event) => {
        const borrowerdogBehaviourBarkingYes = event.target.checked;
        this.setState({
            borrowerdogBehaviourBarking: borrowerdogBehaviourBarkingYes
        });
    }

    dogBehaviourLeadPulling = (event) => {
        const borrowerdogBehaviourLeadPullingYes = event.target.checked;
        this.setState({
            borrowerdogBehaviourLeadPulling: borrowerdogBehaviourLeadPullingYes
        });
    }

    dogBehaviourReactive = (event) => {
        const borrowerdogBehaviourReactiveYes = event.target.checked;
        this.setState({
            borrowerdogBehaviourReactive: borrowerdogBehaviourReactiveYes
        });
    }

    addBorrowerClicked = e => {
        e.preventDefault();
        
        const newfirstName = this.state.borrowerfirstName
        const newsurname = this.state.borrowersurname
        const newemail = this.state.borroweremail
        const newmobile = this.state.borrowermobile
        const newaddress1 = this.state.borroweraddress1
        const newaddress2 = this.state.borroweraddress2
        const newaddress3 = this.state.borroweraddress3
        const newtownCity = this.state.borrowertownCity
        const newpostcode = this.state.borrowerPostCode
        const newdayMon = this.state.borrowerdayMon
        const newdayTues = this.state.borrowerdayTues
        const newdayWeds = this.state.borrowerdayWeds
        const newdayThurs = this.state.borrowerdayThurs
        const newdayFri = this.state.borrowerdayFri
        const newdaySat = this.state.borrowerdaySat
        const newdaySun = this.state.borrowerdaySun
        const newadultMales = this.state.borroweradultMales
        const newadultFemales = this.state.borroweradultFemales
        const newborrowerChildren = this.state.borrowerChildren
        const newchildAgeBand05 = this.state.borrowerChildAgeBand05
        const newchildAgeBand612 = this.state.borrowerchildAgeBand612
        const newchildAgeBand1318 = this.state.borrowerchildAgeBand1318
        const newownDog = this.state.borrowerownDog
        const newownDogType = this.setState.borrowerownDogType
        const newownDetails = this.setState.borrowerownDetails
        const newdogPace = this.state.borrowerdogPace
        const newdogSize = this.state.borrowerdogSize
        const newborrowerdogBehaviourNervous = this.state.borrowerdogBehaviourNervous
        const newborrowerdogBehaviourBarking = this.state.borrowerdogBehaviourBarking
        const newborrowerdogBehaviourLeadPulling = this.state.borrowerdogBehaviourLeadPulling
        const newborrowerdogBehaviourReactive = this.state.borrowerdogBehaviourReactive

        
        
        // set the borrower form back to the default values
        // set the focus onto the borrower first name textbox

        /// only add borrower to database if firstname, surname, mobile and email address supplied
        // could change the code here to add more validation
        if (newfirstName.length > 0 && newsurname.length > 0 && newemail.length > 0 && newmobile.length > 0) {
            this.props.addBorrowerFunction(newfirstName, newsurname, newemail, newmobile, 
                newaddress1, newaddress2, newaddress3, newtownCity, newpostcode, 
                newdayMon, newdayTues, newdayWeds, newdayThurs, newdayFri, newdaySat, newdaySun, 
                newadultMales, newadultFemales, newborrowerChildren, 
                newchildAgeBand05, newchildAgeBand612, newchildAgeBand1318, 
                newownDog, newownDogType, newownDetails, newdogPace, newdogSize, 
                newborrowerdogBehaviourNervous, newborrowerdogBehaviourBarking, 
                newborrowerdogBehaviourLeadPulling, newborrowerdogBehaviourReactive);

            
            // reset form options to defaults
            this.setState({
                borrowerfirstName: "",
                borrowersurname: "",
                borroweremail: "",
                borrowermobile: "",
                borroweraddress1: "",
                borroweraddress2: "",
                borroweraddress3: "",
                borrowertownCity: "",
                borrowerPostCode: "",
                borrowerdayMon: false,
                borrowerdayTues: false,
                borrowerdayWeds: false,
                borrowerdayThurs: false,
                borrowerdayFri: false,
                borrowerdaySat: false,
                borrowerdaySun: false,
                borroweradultMales: false,
                borroweradultFemales: false,
                borrowerChildren: false,
                borrowerchildAgeBand05: false,
                borrowerchildAgeBand612: false,
                borrowerchildAgeBand1318: false,
                borrowerownDog: "",
                borrowerownDogType: "",
                borrowerownDetails: "",
                borrowerdogPace: "",
                borrowerdogSize: "",
                borrowerdogBehaviourNervous: false,
                borrowerdogBehaviourBarking: false,
                borrowerdogBehaviourLeadPulling: false,
                borrowerdogBehaviourReactive: false,
                borrowDetailsInvalid: false
            });
            // display message to borrower to confirm that their details have been entered into the
            // database
            this.showAlert();
                
        } else {

            //if the borrowerDetailsInvalid state is set
            // an error message will display to show that the borrower needs to provide
            // key details - first name, surname, mobile and email address
            
                this.setState({
                    borrowerDetailsInvalid: true
            })
        }
        // set focus back to the borrower name text box - 
        // in case further borrowers need to be added
        // Explicitly focus the borrower name input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.firstNameInput.current.focus();
    }

    render() {

        return (
            <div className="col">
                <h2>Borrower Input Form</h2>
                <h5>Please enter your personal details here:</h5>
                    <span className = "invalidBorrowerDetails">
                        {this.state.borrowerDetailsInvalid &&
                        "Please enter your details - we require a minimum of first name, surname, mobile and email"
                        }
                    </span>
                <form>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First name" 
                                value={this.state.borrowerfirstName} ref={this.firstNameInput} onChange={this.firstNameData}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="surname">Surname</label>
                            <input type="text" className="form-control" id="surname" placeholder="Surname" 
                            value={this.state.borrowersurname} onChange={this.surnameData} ></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" 
                            value={this.state.borroweremail} onChange={this.emailData} ></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" className="form-control" id="mobile" placeholder="Mobile" 
                            value={this.state.borrowermobile} onChange={this.mobileData} ></input>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="address1">Address 1</label>
                            <input type="text" className="form-control" id="address1" placeholder="1st line of address"
                            value={this.state.borroweraddress1} onChange={this.address1Data} ></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="address2">Address 2</label>
                            <input type="text" className="form-control" id="address2" placeholder="2nd line of address"
                            value={this.state.borroweraddress2} onChange={this.address2Data} ></input>
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="address3">Address 3</label>
                            <input type="text" className="form-control" id="address3" placeholder="3rd line of address"
                            value={this.state.borroweraddress3} onChange={this.address3Data} ></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="townCity">Town/City</label>
                            <input type="text" className="form-control" id="townCity" placeholder="town or city"
                            value={this.state.borrowertownCity} onChange={this.townCityData} ></input>
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="postcode">Post Code</label>
                            <input type="text" className="form-control" id="postcode" 
                            placeholder="Postcode" value={this.state.borrowerPostCode} onChange={this.postcodeData} ></input>
                        </div>

                    </div>

                    <h5>Please select your availability to borrow a dog (select all that apply):</h5>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Monday" onChange={this.dayMonSelected} checked={this.state.borrowerdayMon === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Monday</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Tuesday" onChange={this.dayTuesSelected} checked={this.state.borrowerdayTues === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Tuesday</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Wednesday" onChange={this.dayWedsSelected} checked={this.state.borrowerdayWeds === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Wednesday</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Thursday" onChange={this.dayThursSelected} checked={this.state.borrowerdayThurs === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Thursday</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Friday" onChange={this.dayFriSelected} checked={this.state.borrowerdayFri === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Friday</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Saturday" onChange={this.daySatSelected} checked={this.state.borrowerdaySat === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Saturday</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Sunday" onChange={this.daySunSelected} checked={this.state.borrowerdaySun === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Sunday</label>
                    </div>

                </form >

                <h5>Please indicate whether the following people will be in your group on your day out (if not applicable, please leave blank):</h5>
                <form>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="AdultMales" onChange={this.adultMalesSelected} checked={this.state.borroweradultMales === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Adult Males</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="AdultFemales" onChange={this.adultFemalesSelected} checked={this.state.borroweradultFemales === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Adult Females</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="AdultFemales" onChange={this.borrowerChildrenSelected} checked={this.state.borrowerChildren === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Children</label>
                    </div>
                    <h6> Please select the age range(s) of the children in your group (select all that apply)</h6>

                    <div className="form-row">
                        <div className="form-check form-check-inline">
                            {(this.state.borrowerChildren)?
                                <input className="form-check-input" type="checkbox" name="childAgeRanges" id="inlineCheckbox1" value="withChildren05" onChange={this.childAgeBand05Selected} checked={this.state.borrowerchildAgeBand05 === true} />
                                :
                                <input className="form-check-input" type="checkbox" disabled = "disabled" name="childAgeRanges" id="inlineCheckbox1" value="withChildren05" onChange={this.childAgeBand05Selected} checked={this.state.borrowerchildAgeBand05 === true} />
                            }
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Childen aged 0-5</label>
                        </div>
                        <div className="form-check form-check-inline">
                            {(this.state.borrowerChildren)?
                                <input className="form-check-input" type="checkbox" name="childAgeRanges" id="inlineCheckbox1" value="withChildren612" onChange={this.childAgeBand612Selected} checked={this.state.borrowerchildAgeBand612 === true} />
                                :
                                <input className="form-check-input" type="checkbox" disabled = "disabled" name="childAgeRanges" id="inlineCheckbox1" value="withChildren612" onChange={this.childAgeBand612Selected} checked={this.state.borrowerchildAgeBand612 === true} />
                            }
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Childen aged 6-12</label>
                        </div>
                        <div className="form-check form-check-inline">
                            {(this.state.borrowerChildren)?
                                <input className="form-check-input" type="checkbox" name="childAgeRanges" id="inlineCheckbox1" value="withChildren1318" onChange={this.childAgeBand1318Selected} checked={this.state.borrowerchildAgeBand1318 === true} />
                                :
                                <input className="form-check-input" type="checkbox" disabled = "disabled" name="childAgeRanges" id="inlineCheckbox1" value="withChildren1318" onChange={this.childAgeBand1318Selected} checked={this.state.borrowerchildAgeBand1318 === true} />
                            }
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Childen aged 13-18</label>
                        </div>
                    </div>

                    


                    <h5>Will there be any other dogs in your group on your day out?:</h5>

                    <div className="form-row">
                        <div className="custom-control custom-radio custom-control-inline">

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="ownDog" id="inlineRadio1" value="Yes" onChange={this.ownDogSelected} checked={this.state.borrowerownDog === true} />
                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="ownDog" id="inlineRadio2" value="No" onChange={this.ownDogSelected} checked={this.state.borrowerownDog === false} />
                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                            </div>
                        </div>
                    </div>

                    <h6>If yes, please enter your type of dog and brief details of any issues e.g. nervous, reactive behaviour</h6>


                    <div className="form-group col-md-6">
                        <label htmlFor="ownDogType">Your own dog type (if applicable):</label>
                        {(this.state.borrowerownDog)?
                            <input type="text" className="form-control" id="ownDogType" placeholder="ownDogType" 
                            value={this.state.borrowerownDogType} ref={this.ownDogTypeInput} onChange={this.ownDogTypeData}  ></input>
                            :
                            <input type="text" className="form-control" disabled = "disabled" id="ownDogType" value={this.state.borrowerownDogType} ref={this.ownDogTypeInput} onChange={this.ownDogTypeData}  ></input>
                        }
                    </div>
                  
                    <div className="form-group col-md-6">
                        <label htmlFor="ownDogDetails">Any issues (if applicable):</label>
                        {(this.state.borrowerownDog)?
                            <input type="text" className="form-control" id="ownDogDetails" placeholder="ownDogDetails" 
                            value={this.state.borrowerownDogDetails} ref={this.ownDogDetailsInput} onChange={this.ownDogDetailsData} ></input>
                            :
                            <input type="text" className="form-control" disabled="disabled" id="ownDogDetails" value={this.state.borrowerownDogDetails} ref={this.ownDogDetailsInput} onChange={this.ownDogDetailsData} ></input>
                        }
                        
                    </div>



                    <h5>So we can match you with the best dog for your needs please complete the following:
                        </h5>
                    <div>
                        <h6>The pace of dog for your day out:</h6>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="borrowerPace" id="inlineRadio1" value="S" checked={this.state.borrowerdogPace === "S"} onChange={this.borrowerPaceSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Slow</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineRadioPaceModerate" value="M" onChange={this.borrowerPaceSelected} checked={this.state.borrowerdogPace === "M"} />
                            <label className="form-check-label" htmlFor="inlineRadioPaceModerate">Moderate</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineRadioPaceEnergetic" value="E" onChange={this.borrowerPaceSelected} checked={this.state.borrowerdogPace === "E"} />
                            <label className="form-check-label" htmlFor="inlineRadioPaceEnergetic">Energetic</label>
                        </div>

                        <h6>The size of dog for your day out:</h6>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineCheckboxdogSmall" value="S" onChange={this.borrowerDogSizeSelected} checked={this.state.borrowerdogSize === "S"} />
                            <label className="form-check-label" htmlFor="inlineCheckboxDogSmall">Small</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineCheckboxMedium" value="M" onChange={this.borrowerDogSizeSelected} checked={this.state.borrowerdogSize === "M"} />
                            <label className="form-check-label" htmlFor="inlineCheckboxMedium">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineCheckboxLarge" value="L" onChange={this.borrowerDogSizeSelected} checked={this.state.borrowerdogSize === "L"} />
                            <label className="form-check-label" htmlFor="inlineCheckboxLarge">Large</label>
                        </div>

                    </div>

                    <h6>Some of our dogs need a little bit more dog handling experience. If you have of any experience of the following please select: (Click all that apply, if no experience of these issues leave unchecked)</h6>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckboxBehaviourNervous" value="Nervous" onChange={this.dogBehaviourNervous} checked={this.state.borrowerdogBehaviourNervous === true} />
                        <label className="form-check-label" htmlFor="inlineCheckboxBehaviourNervous">Nervous</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckboxBehaviourBarking" value="Barking" onChange={this.dogBehaviourBarking} checked={this.state.borrowerdogBehaviourBarking === true} />
                        <label className="form-check-label" htmlFor="inlineCheckboxBehaviourBarking">Barking</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckboxBehaviourLeadPulling" value="LeadPulling" onChange={this.dogBehaviourLeadPulling} checked={this.state.borrowerdogBehaviourLeadPulling === true} />
                        <label className="form-check-label" htmlFor="inlineCheckboxBehaviourLeadPulling">LeadPulling</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckboxBehaviourReactive" value="Reactive" onChange={this.dogBehaviourReactive} checked={this.state.borrowerdogBehaviourReactive === true} />
                        <label className="form-check-label" htmlFor="inlineCheckboxBehaviourReactive">Reactive</label>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-am m-2" onClick={this.addBorrowerClicked} >Submit</button>
                    </div>
                </form>
            </div >
        );
    }
}

export default BorrowersForm;