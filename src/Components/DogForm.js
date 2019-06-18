import React, { Component } from "react";

class DogForm extends Component {

    state = {
        dogDogName: "",
        dogOtherDogs: "",
        dogAdultMales: "",
        dogAdultFemales: "",
        dogWithChildren: "",
        dogWithChildren05: "",
        dogWithChildren612: "",
        dogWithChildren1317: "",
        dogDogSize: "",
        dogDogPace: "",
        dogBehaviourNervous: "",
        dogBehaviourLeadPulling: "",
        dogBehaviourBarking: "",
        dogBehaviourReactive: ""
    }

    dogNameData = (event) => {
        const dogDogName = event.target.value;
        this.setState({
            dogDogName: dogDogName
        });
    }

    otherDogsData = (event) => {
        const dogOtherDogs = event.target.value;
        this.setState({
            dogOtherDogs: dogOtherDogs
        });
    }

    adultMalesSelected = (event) => {
        const dogAdultMales = event.target.value;
        this.setState({
            dogAdultMales: dogAdultMales
        });
    }

    adultFemalesSelected = (event) => {
        const dogAdultFemales = event.target.value;
        this.setState({
            dogAdultFemales: dogAdultFemales
        });
    }

    withChildrenSelected = (event) => {
        const dogWithChildren = event.target.value;
        this.setState({
            dogWithChildren: dogWithChildren
        });
    }

    withChildren05Selected = (event) => {
        const dogWithChildren05 = event.target.value;
        this.setState({
            dogWithChildren05: dogWithChildren05
        });
    }

    withChildren612Selected = (event) => {
        const dogWithChildren612 = event.target.value;
        this.setState({
            dogWithChildren612: dogWithChildren612
        });
    }

    withChildren1317Selected = (event) => {
        const dogWithChildren1317 = event.target.value;
        this.setState({
            dogWithChildren1317: dogWithChildren1317
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
        const dogBehaviourNervous = event.target.value;
        this.setState({
            dogBehaviourNervous: dogBehaviourNervous
        });
    }

    behaviourLeadPulling = (event) => {
        const dogBehaviourLeadPulling = event.target.value;
        this.setState({
            dogBehaviourLeadPulling: dogBehaviourLeadPulling
        });
    }

    behaviourBarking = (event) => {
        const dogBehaviourBarking = event.target.value;
        this.setState({
            dogBehaviourBarking: dogBehaviourBarking
        });
    }

    behaviourReactive = (event) => {
        const dogBehaviourReactive = event.target.value;
        this.setState({
            dogBehaviourReactive: dogBehaviourReactive
        });
    }

    addDogClicked = e => {
        e.preventDefault();
        const newdogName = this.state.dogDogName
        const newotherDogs= this.state.dogOtherDogs 
        const newadultMales= this.state.dogAdultMales
        const newadultFemales= this.state.dogAdultFemales
        const newwithChildren= this.state.dogWithChildren
        const newwithChildren05= this.state.dogWithChildren05
        const newwithChildren612= this.state.dogWithChildren612
        const newwithChildren1317= this.state.dogWithChildren1317
        const newdogSize= this.state.dogDogSize
        const newdogPace= this.state.dogDogPace
        const newbehaviourNervous= this.state.dogBehaviourNervous
        const newbehaviourLeadPulling= this.state.dogBehaviourLeadPulling
        const newbehaviourBarking= this.state.dogBehaviourBarking
        const newbehaviourReactive= this.state.dogBehaviourReactive
        this.props.addDogFunction(newdogName, newotherDogs, newadultMales, newadultFemales, newwithChildren, newwithChildren05, newwithChildren612, newwithChildren1317, newdogSize, newdogPace, newbehaviourNervous, newbehaviourLeadPulling, newbehaviourBarking, newbehaviourReactive);
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
                            <input type="text" className="form-control" id="dogName" placeholder="Dog's name" onChange={this.dogNameData} ></input>
                        </div>
                    </div>

                    <h5>Suitable with other dogs?: </h5>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes" onChange={this.otherDogsData} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="No" />
                            <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                        </div>
                    </div>

                    <h5>Suitable with males / females? (Select the box if yes): </h5>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes" onChange={this.adultMalesSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Males</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Yes" onChange={this.adultFemalesSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Females</label>
                        </div>
                    </div>

                    <h5>Suitable with children? (Select the box for all that apply): </h5>

                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="No" onChange={this.withChildrenSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">None</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes" onChange={this.withChildren05Selected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">aged 0 to 5</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Yes" onChange={this.withChildren612Selected} />
                            <label className="form-check-label" htmlFor="inlineRadio2">aged 6 to 12</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Yes" onChange={this.withChildren1317Selected} />
                            <label className="form-check-label" htmlFor="inlineRadio3">aged 13 to 17</label>
                        </div>
                    </div>
                    <h5>Dog's Size (Select the appropriate box):</h5>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Small" onChange={this.dogSizeSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Small</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Medium" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Large" />
                            <label className="form-check-label" htmlFor="inlineRadio3">Large</label>
                        </div>
                    </div>
                    <h5>Dog's Pace (Select the appropriate box):</h5>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Slow" onChange={this.dogPaceSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Slow</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Moderate" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Moderate</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Energetic" />
                            <label className="form-check-label" htmlFor="inlineRadio3">Energetic</label>
                        </div>
                    </div>
                    <h5>Any behaviour issues? (Select the box for all that apply): </h5>
                    <div className="custom-control custom-radio custom-control-inline">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes" onChange={this.behaviourNervousSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Nervous</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Yes" onChange={this.behaviourLeadPullingSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Barking</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Yes" onChange={this.behaviourBarkingSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Lead Pulling</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Yes" onChange={this.behaviourReactiveSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Reactive</label>
                        </div>
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