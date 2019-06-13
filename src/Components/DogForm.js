import React, { Component } from "react";

class DogForm extends Component {

    render() {

        return (
            <div className="col">
                <h2>Dog Input Form</h2>
                <h5>Please enter the dogs available to borrow:</h5>
                <form>
                    <div className="row-12">
                        <label className="col-2 font-weight-bold">Dog's Name:</label>
                        <input className="col-4" type="text" />
                        <label className="col-2 font-weight-bold">Other dogs?:</label>
                        <label className="col-1 font-weight-bold">Yes:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-1 font-weight-bold">No:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Adult Males?:</label>
                        <label className="col-1 font-weight-bold">Yes:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-1 font-weight-bold">No:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Adult Females?:</label>
                        <label className="col-1 font-weight-bold">Yes:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-1 font-weight-bold">No:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Children?:</label>
                        <label className="col-1 font-weight-bold">Yes:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-1 font-weight-bold">No:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Age From:</label>
                        <input className="col-1" type="number" />
                        <h6>Dog's Size:</h6>
                        <label className="col-2 font-weight-bold">Small:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Medium:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Large:</label>
                        <input className="col-1" type="radio" />
                        <h6>Dog's Pace:</h6>
                        <label className="col-2 font-weight-bold">Slow:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Moderate:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Energetic:</label>
                        <input className="col-1" type="radio" />
                        <h6>Any behaviour issues?:</h6>
                        <label className="col-2 font-weight-bold">Nervous:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Barking:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Lead Pulling:</label>
                        <input className="col-1" type="radio" />
                        <label className="col-2 font-weight-bold">Reactive:</label>
                        <input className="col-1" type="radio" />
                        
                    </div>
                </form>
            </div>
        );
    }
}
export default DogForm;   