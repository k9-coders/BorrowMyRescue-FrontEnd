import React, { Component } from "react";

class BorrowersForm extends Component {

    render() {

        return (
            <div className="col">
                <h2>Borrower Input Form</h2>
                <h5>Please enter your personal details here:</h5>
                <form>
                    <div className="row-12">
                        <label className="col-2 font-weight-bold">First Name:</label>
                        <input className="col-3" type="text" />
                        <label className="col-1 font-weight-bold">Surname:</label>
                        <input className="col-3" type="text" />
                        <label className="col-1 font-weight-bold">Mobile:</label>
                        <input className="col-2" type="text" />
                    </div>
                    <div className="row-12">
                        <label className="col-1 font-weight-bold">Postcode:</label>
                        <input className="col-2" type="text" />
                        <label className="col-1 font-weight-bold">Address:</label>
                        <input className="col-8" type="text" />
                    </div>
                    <div className="row-12">
                        <h5>Please select the days you are available:</h5>
                        <label className="col-2 font-weight-bold">Monday:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Tuesday:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Wednesday:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Thursday:</label>
                        <input className="col-1" type="radio" />
                        <h5> </h5>
                        <label className="col-2 font-weight-bold">Friday:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Saturday:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Sunday:</label>
                        <input className="col-1" type="radio" />
                    </div>


                </form >
                <h5>Enter the details of all people and other dogs in your group on the day out here (if not applicable, please leave blank):</h5>
                <form>
                    <div className="row-12">
                        <h6>Number of adults:</h6>
                        <label className="col-2 font-weight-bold">Adult Males:</label>
                        <input className="col-1" type="number" />
                        <label className="col-2 font-weight-bold">Adult Females:</label>
                        <input className="col-1" type="number" />
                        <h6>Ages of children:</h6>
                        <label className="col-1 font-weight-bold">Child 1:</label>
                        <input className="col-1" type="number" />
                        <label className="col-1 font-weight-bold">Child 2:</label>
                        <input className="col-1" type="number" />
                        <label className="col-1 font-weight-bold">Child 3:</label>
                        <input className="col-1" type="number" />
                        <label className="col-1 font-weight-bold">Child 4:</label>
                        <input className="col-1" type="number" />
                        <label className="col-1 font-weight-bold">Child 5:</label>
                        <input className="col-1" type="number" />
                        <label className="col-1 font-weight-bold">Child 6:</label>
                        <input className="col-1" type="number" />
                        <h6>Other Dogs? If yes, please enter your type of dog and brief details of any issues e.g. nervous, reactive behaviour:</h6>
                        <label className="col-1 font-weight-bold">Yes:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-1 font-weight-bold">No:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-3 font-weight-bold">Dog Type(s)/Issues:</label>
                        <input className="col-5" type="text" />
                        <h5>So we can match you with the best dog for your needs please complete the following:
                        </h5>
                        <h6>The pace of dog for your day out: (Click all that apply)</h6>
                        <label className="col-2 font-weight-bold">Slow:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Moderate:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Energetic:</label>
                        <input className="col-1" type="radio" />
                        <h6>The size of dog for your day out: (Click all that apply)</h6>
                        <label className="col-3 font-weight-bold">Small, e.g. Jack Russell:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-3 font-weight-bold">Medium, e.g. Spaniel:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-3 font-weight-bold">Large, e.g. Labrador:</label>
                        <input className="col-1" type="radio" />
                        <h6>Some of our dogs need a little bit more dog handling experience. If you have of any experience of the following please select: (Click all that apply, if no experience of these issues leave blank)</h6>
                        <label className="col-2 font-weight-bold">Nervous:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Lead-Pulling:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Barking:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Reactive:</label>
                        <input className="col-1" type="radio" />
                    </div>
                </form>
            </div >
        );
    }
}

export default BorrowersForm;