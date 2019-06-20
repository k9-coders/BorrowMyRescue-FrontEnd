import React, { Component } from "react";

class DogForm extends Component {

    state = {
        dogDogName: "",
        dogOtherDogs: true,
        dogAdultMales: false,
        dogAdultFemales: false,
        dogWithChildren: "All",
        dogDogSize: "",
        dogDogPace: "",
        dogBehaviourNervous: false,
        dogBehaviourLeadPulling: false,
        dogBehaviourBarking: false,
        dogBehaviourReactive: false
    }

    dogNameData = (event) => {
        const dogDogName = event.target.value;
        this.setState({
            dogDogName: dogDogName
        });
    }

    otherDogsData = (event) => {
        const dogOtherDogs = event.target.value === "Yes";
        this.setState({
            dogOtherDogs: dogOtherDogs
        });
    }

    adultMalesSelected = (event) => {
        const dogIsOkWithAdultMales = event.target.checked;
        this.setState({
            dogAdultMales: dogIsOkWithAdultMales
        });
    }

    adultFemalesSelected = (event) => {
        const dogIsOkWithAdultFemales = event.target.checked;
        this.setState({
            dogAdultFemales: dogIsOkWithAdultFemales
        });
    }

    withChildrenSelected = (event) => {
        const dogWithChildren = event.target.value;
        this.setState({
            dogWithChildren: dogWithChildren
        });
    }



    dogSizeSelected = (event) => {
        const dogDogSize = event.target.value;
        this.setState({
            dogDogSize: dogDogSize
        });
    }

    dogPaceSelected = (event) => {
        const dogDogPace = event.target.value;
        this.setState({
            dogDogPace: dogDogPace
        });
    }

    behaviourNervousSelected = (event) => {
        const dogBehaviourNervousYes = event.target.checked;
        this.setState({
            dogBehaviourNervous: dogBehaviourNervousYes
        });
    }

    behaviourLeadPullingSelected = (event) => {
        const dogBehaviourLeadPullingYes = event.target.checked;
        this.setState({
            dogBehaviourLeadPulling: dogBehaviourLeadPullingYes
        });
    }

    behaviourBarkingSelected = (event) => {
        const dogBehaviourBarkingYes = event.target.checked;
        this.setState({
            dogBehaviourBarking: dogBehaviourBarkingYes
        });
    }

    behaviourReactiveSelected = (event) => {
        const dogBehaviourReactiveYes = event.target.checked;
        this.setState({
            dogBehaviourReactive: dogBehaviourReactiveYes
        });
    }

    addDogClicked = e => {
        e.preventDefault();
        const newdogName = this.state.dogDogName
        const newotherDogs = this.state.dogOtherDogs
        const newadultMales = this.state.dogAdultMales
        const newadultFemales = this.state.dogAdultFemales
        const newwithChildrenAll = this.state.dogWithChildrenAll
        const newwithChildrenNone = this.state.dogWithChildrenNone
        const newwithChildren05 = this.state.dogWithChildren05
        const newwithChildren012 = this.state.dogWithChildren012
        const newdogSize = this.state.dogDogSize
        const newdogPace = this.state.dogDogPace
        const newbehaviourNervous = this.state.dogBehaviourNervous
        const newbehaviourLeadPulling = this.state.dogBehaviourLeadPulling
        const newbehaviourBarking = this.state.dogBehaviourBarking
        const newbehaviourReactive = this.state.dogBehaviourReactive
        this.props.addDogFunction(newdogName, newotherDogs, newadultMales, newadultFemales, newwithChildrenAll, newwithChildrenNone, newwithChildren05, newwithChildren012, newdogSize, newdogPace, newbehaviourNervous, newbehaviourLeadPulling, newbehaviourBarking, newbehaviourReactive);
    }

    render() {

        return (
            <div className="col">
                <h2>Dog Input Form</h2>
                <h5>Please enter the dogs available to borrow:</h5>
                <form>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="dogName">Dog's name:</label>
                            <input type="text" className="form-control" id="dogName" placeholder="Dog's name" value={this.state.dogDogName} onChange={this.dogNameData} ></input>
                        </div>
                    </div>

                    <h5>Suitable with other dogs?: </h5>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes" onChange={this.otherDogsData} checked={this.state.dogOtherDogs} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="No" onChange={this.otherDogsData} checked={this.state.dogOtherDogs === false} />
                            <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                        </div>
                    </div>

                    <h5>Suitable with males / females? (Select all that apply): </h5>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Male" onChange={this.adultMalesSelected} checked={this.state.dogAdultMales === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Female" onChange={this.adultFemalesSelected} checked={this.state.dogAdultFemales === true} />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Female</label>
                    </div>

                    {/* children form */}

                    <h5>Suitable with children? (Select the box for all that apply): </h5>

                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withChildren" id="inlineRadio1" value="All" onChange={this.withChildrenSelected} checked={this.state.dogWithChildren === "All"} />
                            <label className="form-check-label" htmlFor="inlineRadio1">All</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withChildren" id="inlineRadio1" value="05" onChange={this.withChildrenSelected} checked={this.state.dogWithChildren === "05"} />
                            <label className="form-check-label" htmlFor="inlineRadio1">aged 0 to 5</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withChildren" id="inlineRadio2" value="012" onChange={this.withChildrenSelected} checked={this.state.dogWithChildren === "012"} />
                            <label className="form-check-label" htmlFor="inlineRadio2">aged 0 to 12</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withChildren" id="inlineRadio1" value="None" onChange={this.withChildrenSelected} checked={this.state.dogWithChildren === "None"} />
                            <label className="form-check-label" htmlFor="inlineRadio1">None</label>
                        </div>

                    </div>

                    <h5>Dog's Size (Select the appropriate box):</h5>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="dogSize" id="inlineRadio1" value="Small" onChange={this.dogSizeSelected} checked={this.state.dogDogSize === "Small"} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Small</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="dogSize" id="inlineRadio2" value="Medium" onChange={this.dogSizeSelected} checked={this.state.dogDogSize === "Medium"} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="dogSize" id="inlineRadio3" value="Large" onChange={this.dogSizeSelected} checked={this.state.dogDogSize === "Large"} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Large</label>
                        </div>
                    </div>


                    <h5>Dog's Pace (Select the appropriate box):</h5>
                    <div className="custom-control custom-radio custom-control-inline">



                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="dogPace" id="inlineRadio1" value="Slow" checked={this.state.dogDogPace === "Slow"} onChange={this.dogPaceSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Slow</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio"
                                onChange={this.dogPaceSelected} name="dogPace" id="inlineRadio2" value="Moderate" checked={this.state.dogDogPace === "Moderate"} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Moderate</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio"
                                onChange={this.dogPaceSelected} name="dogPace" id="inlineRadio3" value="Energetic" checked={this.state.dogDogPace === "Energetic"} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Energetic</label>
                        </div>
                    </div>


                    <h5>Any behaviour issues? (Select the box for all that apply): </h5>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckboxBehaviour" value="Nervous" 
                        onChange={this.behaviourNervousSelected} 
                        checked={this.state.dogBehaviourNervous === true} />
                        <label className="form-check-label" htmlFor="inlineCheckboxBehaviour">Nervous</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckboxBehaviour" value="LeadPulling" 
                        onChange={this.behaviourLeadPullingSelected} 
                        checked={this.state.dogBehaviourLeadPulling === true} />
                        <label className="form-check-label" htmlFor="inlineCheckboxLeadBehaviour">Lead Pulling</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckboxBehaviour" value="Barking" 
                        onChange={this.behaviourBarkingSelected} 
                        checked={this.state.dogBehaviourBarking === true} />
                        <label className="form-check-label" htmlFor="inlineCheckboxBehaviour">Barking</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckboxBehaviour" value="Reactive" 
                        onChange={this.behaviourReactiveSelected} 
                        checked={this.state.dogBehaviourReactive === true} />
                        <label className="form-check-label" htmlFor="inlineCheckboxBehaviour">Reactive</label>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-am m-2" onClick={this.addDogClicked} > Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default DogForm;   