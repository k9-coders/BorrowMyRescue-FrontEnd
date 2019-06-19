import React, { Component } from "react";

class BorrowersForm extends Component {

    state = {
        firstName: "",
        surname: "",
        email: "",
        mobile: "",
        address1: "",
        address2: "",
        address3: "",
        townCity: "",
        postcode: "",
        dayMon: "",
        dayTues: "",
        dayWed: "",
        dayThurs: "",
        dayFri: "",
        daySat: "",
        daySun: "",
        adultMales: "",
        adultFemales: "",
        childAgeBand05: "",
        childAgeBand612: "",
        childAgeBand1317: ""
    }

    firstNameData = (event) => {
        const firstName = event.target.value;
        this.setState({
            firstName: firstName
        });
    }

    surnameData = (event) => {
        const surname = event.target.value;
        this.setState({
            surname: surname
        });
    }

    emailData = (event) => {
        const email = event.target.value;
        this.setState({
            email: email
        });
    }

    mobileData = (event) => {
        const mobile = event.target.value;
        this.setState({
            mobile: mobile
        });
    }

    address1Data = (event) => {
        const address1 = event.target.value;
        this.setState({
            address1: address1
        });
    }

    address2Data = (event) => {
        const address2 = event.target.value;
        this.setState({
            address2: address2
        });
    }

    address3Data = (event) => {
        const address3 = event.target.value;
        this.setState({
            address3: address3
        });
    }

    townCityData = (event) => {
        const townCity = event.target.value;
        this.setState({
            townCity: townCity
        });
    }

    postcodeData = (event) => {
        const postcode = event.target.value;
        this.setState({
            postcode: postcode
        });
    }

    dayMonSelected = (event) => {
        const dayMon = event.target.value;
        this.setState({
            dayMon: dayMon
        });
    }

    dayTuesSelected = (event) => {
        const dayTues = event.target.value;
        this.setState({
            dayTues: dayTues
        });
    }

    dayWedSelected = (event) => {
        const dayWed = event.target.value;
        this.setState({
            dayWed: dayWed
        });
    }

    dayThursSelected = (event) => {
        const dayThurs = event.target.value;
        this.setState({
            dayThurs: dayThurs
        });
    }

    dayFriSelected = (event) => {
        const dayFri = event.target.value;
        this.setState({
            dayFri: dayFri
        });
    }

    daySatSelected = (event) => {
        const daySat = event.target.value;
        this.setState({
            daySat: daySat
        });
    }

    daySunSelected = (event) => {
        const daySun = event.target.value;
        this.setState({
            daySun: daySun
        });
    }

    adultMalesData = (event) => {
        const adultMales = event.target.value;
        this.setState({
            adultMales: adultMales
        });
    }

    adultFemalesData = (event) => {
        const adultFemales = event.target.value;
        this.setState({
            adultFemales: adultFemales
        });
    }

    childAgeBand05Data = (event) => {
        const childAgeBand05 = event.target.value;
        this.setState({
            childAgeBand05: childAgeBand05
        });
    }

    childAgeBand612Data = (event) => {
        const childAgeBand612 = event.target.value;
        this.setState({
            childAgeBand612: childAgeBand612
        });
    }

    childAgeBand1317Data = (event) => {
        const childAgeBand1317 = event.target.value;
        this.setState({
            childAgeBand1317: childAgeBand1317
        });
    }

    addBorrowerClicked = e => {
        e.preventDefault();
        const newfirstName = this.state.borrowerFirstName
        const newsurname = this.state.borrowerSurname
        const newemail = this.state.borrowerEmail
        const newmobile = this.state.borrowerMobile
        const newaddress1 = this.state.borrowerAddress1
        const newaddress2 = this.state.borrowerAddress2
        const newaddress3 = this.state.borrowerAddress3
        const newtownCity = this.state.borrowerTownCity
        const newpostcode = this.state.borrowerPostcode
        const newdayMon = this.state.borrowerDayMon
        const newdayTues = this.state.borrowerDayTues
        const newdayWed = this.state.borrowerDayWed
        const newdayThurs = this.state.borrowerDayThurs
        const newdayFri = this.state.borrowerDayFri
        const newdaySat = this.state.borrowerDaySat
        const newdaySun = this.state.borrowerDaySun
        const newadultMales = this.state.borrowerAdultMales
        const newadultFemales = this.state.borrowerAdultFemales
        const newchildAgeBand05 = this.state.borrowerChildAgeBand05
        const newchildAgeBand612 = this.state.borrowerChildAgeBand612
        const newchildAgeBand1317 = this.state.borrowerChildAgeBand1317
        this.props.addBorrowerFunction(newfirstName, newsurname, newemail, newmobile, newaddress1, newaddress2, newaddress3, newtownCity, newpostcode, newdayMon, newdayTues, newdayWed, newdayThurs, newdayFri, newdaySat, newdaySun, newadultMales, newadultFemales, newchildAgeBand05, newchildAgeBand612, newchildAgeBand1317); 
    }

    render() {

        return (
            <div className="col">
                <h2>Borrower Input Form</h2>
                <h5>Please enter your personal details here:</h5>
                <form>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First name" onChange={this.firstNameData}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="surname">Surname</label>
                            <input type="text" className="form-control" id="surname" placeholder="Surname" onChange={this.surnameData} ></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={this.emailData} ></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" className="form-control" id="mobile" placeholder="Mobile" onChange={this.mobileData} ></input>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="address1">Address 1</label>
                            <input type="text" className="form-control" id="address1" onChange={this.address1Data} ></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="address2">Address 2</label>
                            <input type="text" className="form-control" id="address2" onChange={this.address2Data} ></input>
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="address3">Address 3</label>
                            <input type="text" className="form-control" id="address3" onChange={this.address3Data} ></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="townCity">Town/City</label>
                            <input type="text" className="form-control" id="townCity" onChange={this.townCityData} ></input>
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="postcode">Post Code</label>
                            <input type="text" className="form-control" id="postcode" onChange={this.postcodeData} ></input>
                        </div>

                    </div>
                    <h5>Please select all the days you are available to borow a dog (select all that apply)</h5>
                    <div className="form-group">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayMoncustomRadioInline1" name="dayMoncustomRadioInline1" className="custom-control-input" onChange={this.dayMonSelected} ></input>
                            <label className="custom-control-label" htmlFor="dayMoncustomRadioInline1">Monday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayTuescustomRadioInline1" name="dayTuescustomRadioInline1" className="custom-control-input" onChange={this.dayTuesSelected} ></input>
                            <label className="custom-control-label" htmlFor="dayTuescustomRadioInline1">Tuesday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayWedcustomRadioInline1" name="dayWedcustomRadioInline1" className="custom-control-input" onChange={this.dayWedSelected} ></input>
                            <label className="custom-control-label" htmlFor="dayWedcustomRadioInline1">Wednesday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayThurscustomRadioInline1" name="dayThurscustomRadioInline1" className="custom-control-input" onChange={this.dayThursSelected} ></input>
                            <label className="custom-control-label" htmlFor="dayThurscustomRadioInline1">Thursday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayFricustomRadioInline1" name="dayFricustomRadioInline1" className="custom-control-input" onChange={this.dayFriSelected} ></input>
                            <label className="custom-control-label" htmlFor="dayFricustomRadioInline1">Friday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="daySatcustomRadioInline1" name="daySatcustomRadioInline1" className="custom-control-input" onChange={this.daySatSelected} ></input>
                            <label className="custom-control-label" htmlFor="daySatcustomRadioInline1">Saturday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="daySuncustomRadioInline1" name="daySuncustomRadioInline1" className="custom-control-input" onChange={this.daySunSelected} ></input>
                            <label className="custom-control-label" htmlFor="daySuncustomRadioInline1">Sunday</label>
                        </div>
                    </div>
                </form >

                <h5>Enter the details of all people and other dogs in your group on the day out here (if not applicable, please enter zero):</h5>
                <form>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="borrowerMales">Number of Adult Males</label>
                            <input type="number" className="form-control" id="borrowerMales" onChange={this.borrowerMalesData} ></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="borrowerFemales">Number of Adult Females</label>
                            <input type="number" className="form-control" id="borrowerFemales" onChange={this.borrowerFemalesData} ></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="childAgeBand05">Number of children aged 0-5</label>
                            <input type="number" className="form-control" id="childAgeBand05" onChange={this.childAgeBand05Data} ></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="childAgeBand612">Number of children aged 6-12</label>
                            <input type="number" className="form-control" id="childAgeBand612" onChange={this.childAgeBand612Data} ></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="childAgeBand1317">Number of children aged 13-17</label>
                            <input type="number" className="form-control" id="childAgeBand1317" onChange={this.childAgeBand1317Data} ></input>
                        </div>
                    </div>
                    <h6>Other Dogs?:</h6>

                    <div className="form-row">
                        <div className="custom-control custom-radio custom-control-inline">

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={this.otherDogYesSelected}/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                            </div>
                        </div>
                    </div>
                    <h5>If yes, please enter your type of dog and brief details of any issues e.g. nervous, reactive behaviour</h5>
                    <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="ownDogType">Your own dog type (if applicable):</label>
                            <input type="text" className="form-control" id="ownDogType"></input>
                        </div>
                        <div className="col-6">
                            <label htmlFor="ownDogDetails">Any issues (if applicable):</label>
                            <input type="text" className="form-control" id="ownDogDetails"></input>
                        </div>
                    </div>

                    <div>
                        <h5>So we can match you with the best dog for your needs please complete the following:
                        </h5>
                        <h6>The pace of dog for your day out: (Click all that apply)</h6>
                        <div className="custom-control custom-radio custom-control-inline">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="slowInlineRadioOptions" id="SlowInlineRadio1" value="option1" />
                                <label className="form-check-label" htmlFor="slowInlineRadio1">Slow</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="moderateInlineRadioOptions" id="moderateInlineRadio2" value="option2" />
                                <label className="form-check-label" htmlFor="moderateInlineRadio2">Moderate</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="energeticInlineRadioOptions" id="energeticInlineRadio3" value="option3" />
                                <label className="form-check-label" htmlFor="energeticInlineRadio3">Energetic</label>
                            </div>
                        </div>

                        <h6>The size of dog for your day out: (Click all that apply)</h6>
                        <div className="custom-control custom-radio custom-control-inline"></div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="smallInlineRadioOptions" id="smallInlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="smallInlineRadio1">Small, e.g. Jack Russell</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="mediumInlineRadioOptions" id="mediumInlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="mediumInlineRadio2">Medium, e.g. Spaniel</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="largeInlineRadioOptions" id="largeInlineRadio3" value="option3" />
                            <label className="form-check-label" htmlFor="largeInlineRadio3">Large, e.g. Labrador</label>
                        </div>
                    </div>

                    <h6>Some of our dogs need a little bit more dog handling experience. If you have of any experience of the following please select: (Click all that apply, if no experience of these issues leave blank)</h6>

                    <div className="custom-control custom-radio custom-control-inline">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="nervousInlineRadioOptions" id="nervousInlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="nervousInlineRadio1">Nervous</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="barkingInlineRadioOptions" id="barkingInlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="barkingInlineRadio2">Barking</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="pullingInlineRadioOptions" id="pullingInlineRadio3" value="option3" />
                            <label className="form-check-label" htmlFor="pullingInlineRadio3">Lead Pulling</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="reactiveInlineRadioOptions" id="reactiveInlineRadio3" value="option3" />
                            <label className="form-check-label" htmlFor="reactiveInlineRadio3">Reactive</label>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-am m-2" onClick={this.addborrowerClicked} > Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BorrowersForm;