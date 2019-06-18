import React, { Component } from "react";

class BorrowersForm extends Component {

    state = {
        firstName: "",
    }

    firstNameData = (event) => {
        const firstName = event.target.value;
        this.setState({
            firstName: firstName
        });
    }

    render() {

        return (
            <div className="col">
                <h2>Borrower Input Form</h2>
                <h5>Please enter your personal details here:</h5>
                <form>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label for="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First name" onChange={this.firstNameData}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="surname">Surname</label>
                            <input type="text" className="form-control" id="surname" placeholder="Surname"></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label for="mobile">Mobile</label>
                            <input type="text" className="form-control" id="mobile" placeholder="Mobile"></input>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label for="address1">Address 1</label>
                            <input type="text" className="form-control" id="address1"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="address2">Address 2</label>
                            <input type="text" className="form-control" id="address2"></input>
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label for="address3">Address 3</label>
                            <input type="text" className="form-control" id="address3"></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label for="townCity">Town/City</label>
                            <input type="text" className="form-control" id="townCity"></input>
                        </div>

                        <div className="form-group col-md-2">
                            <label for="postcode">Post Code</label>
                            <input type="text" className="form-control" id="postcode"></input>
                        </div>

                    </div>
                    <h5>Please select all the days you are available to borow a dog (select all that apply)</h5>
                    <div className="form-group">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayMoncustomRadioInline1" name="dayMoncustomRadioInline1" className="custom-control-input"></input>
                            <label className="custom-control-label" for="dayMoncustomRadioInline1">Monday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayTuescustomRadioInline1" name="dayTuescustomRadioInline1" className="custom-control-input"></input>
                            <label className="custom-control-label" for="dayTuescustomRadioInline1">Tuesday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayWedcustomRadioInline1" name="dayWedcustomRadioInline1" className="custom-control-input"></input>
                            <label className="custom-control-label" for="dayWedcustomRadioInline1">Wednesday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayThurscustomRadioInline1" name="dayThurscustomRadioInline1" className="custom-control-input"></input>
                            <label className="custom-control-label" for="dayThurscustomRadioInline1">Thursday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="dayFricustomRadioInline1" name="dayFricustomRadioInline1" className="custom-control-input"></input>
                            <label className="custom-control-label" for="dayFricustomRadioInline1">Friday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="daySatcustomRadioInline1" name="daySatcustomRadioInline1" className="custom-control-input"></input>
                            <label className="custom-control-label" for="daySatcustomRadioInline1">Saturday</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="daySuncustomRadioInline1" name="daySuncustomRadioInline1" className="custom-control-input"></input>
                            <label className="custom-control-label" for="daySuncustomRadioInline1">Sunday</label>
                        </div>
                    </div>
                </form >

                <h5>Enter the details of all people and other dogs in your group on the day out here (if not applicable, please enter zero):</h5>
                <form>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label for="borrowerMales">Number of Adult Males</label>
                            <input type="number" className="form-control" id="borrowerMales"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="borrowerFemales">Number of Adult Females</label>
                            <input type="number" className="form-control" id="borrowerFemales"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="childrenBand05">Number of children aged 0-5</label>
                            <input type="number" className="form-control" id="childrenBand05"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="childrenBand612">Number of children aged 6-12</label>
                            <input type="number" className="form-control" id="childrenBand612"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="childrenBand1317">Number of children aged 13-17</label>
                            <input type="number" className="form-control" id="childrenBand1317"></input>
                        </div>
                    </div>
                    <h6>Other Dogs?:</h6>

                    <div className="form-row">
                        <div className="custom-control custom-radio custom-control-inline">

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>
                        </div>
                    </div>
                    <h5>If yes, please enter your type of dog and brief details of any issues e.g. nervous, reactive behaviour</h5>
                    <div className="form-row">
                        <div className="col-6">
                            <label for="ownDogType">Your own dog type (if applicable):</label>
                            <input type="text" className="form-control" id="ownDogType"></input>
                        </div>
                        <div className="col-6">
                            <label for="ownDogDetails">Any issues (if applicable):</label>
                            <input type="text" className="form-control" id="ownDogDetails"></input>
                        </div>
                    </div>

                    <div>
                        <h5>So we can match you with the best dog for your needs please complete the following:
                        </h5>
                        <h6>The pace of dog for your day out: (Click all that apply)</h6>
                        <div className="custom-control custom-radio custom-control-inline">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="slowInlineRadioOptions" id="SlowInlineRadio1" value="option1" />
                                <label class="form-check-label" for="slowInlineRadio1">Slow</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="moderateInlineRadioOptions" id="moderateInlineRadio2" value="option2" />
                                <label class="form-check-label" for="moderateInlineRadio2">Moderate</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="energeticInlineRadioOptions" id="energeticInlineRadio3" value="option3" />
                                <label class="form-check-label" for="energeticInlineRadio3">Energetic</label>
                            </div>
                        </div>

                        <h6>The size of dog for your day out: (Click all that apply)</h6>
                        <div className="custom-control custom-radio custom-control-inline"></div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="smallInlineRadioOptions" id="smallInlineRadio1" value="option1" />
                            <label class="form-check-label" for="smallInlineRadio1">Small, e.g. Jack Russell</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="mediumInlineRadioOptions" id="mediumInlineRadio2" value="option2" />
                            <label class="form-check-label" for="mediumInlineRadio2">Medium, e.g. Spaniel</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="largeInlineRadioOptions" id="largeInlineRadio3" value="option3" />
                            <label class="form-check-label" for="largeInlineRadio3">Large, e.g. Labrador</label>
                        </div>
                    </div>

                    <h6>Some of our dogs need a little bit more dog handling experience. If you have of any experience of the following please select: (Click all that apply, if no experience of these issues leave blank)</h6>

                    <div className="custom-control custom-radio custom-control-inline">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="nervousInlineRadioOptions" id="nervousInlineRadio1" value="option1" />
                            <label class="form-check-label" for="nervousInlineRadio1">Nervous</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="barkingInlineRadioOptions" id="barkingInlineRadio2" value="option2" />
                            <label class="form-check-label" for="barkingInlineRadio2">Barking</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pullingInlineRadioOptions" id="pullingInlineRadio3" value="option3" />
                            <label class="form-check-label" for="pullingInlineRadio3">Lead Pulling</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="reactiveInlineRadioOptions" id="reactiveInlineRadio3" value="option3" />
                            <label class="form-check-label" for="reactiveInlineRadio3">Reactive</label>
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