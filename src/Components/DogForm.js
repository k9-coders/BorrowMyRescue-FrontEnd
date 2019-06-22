import React, { Component } from "react";

class DogForm extends Component {

    state = {
        dogDogName: "",
        dogOtherDogs: true,
        dogAdultMales: false,
        dogAdultFemales: false,
        dogWithChildren: false,
        dogWithChildren05: false,
        dogWithChildren612: false,
        dogWithChildren1318: false,
        dogDogSize: "",
        dogDogPace: "",
        dogBehaviourNervous: false,
        dogBehaviourLeadPulling: false,
        dogBehaviourBarking: false,
        dogBehaviourReactive: false
    }

    // used to set focus on dog name input box
    constructor(props) {
        // always need super(props)
        // as first line in a constructor
        super(props);
        // create a ref to store the dogNameInput DOM element
        this.dogNameInput = React.createRef();
        // create a ref to store the dateInput DOM element
        //this.dateInput = React.createRef();
        // constructor to bind add new dog button click
        // to dog input form textbox, dogNameInput
        this.addDogClicked = this.addDogClicked.bind(this);
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
        const dogWithChildren = event.target.value === "Yes";
        this.setState({
            dogWithChildren: dogWithChildren
        });
    }

    childAge05Selected = (event) => {
        const dogWithChildren05 = event.target.checked;
        this.setState({
            dogWithChildren05: dogWithChildren05
        });
    }

    childAge612Selected = (event) => {
        const dogWithChildren612 = event.target.checked;
        this.setState({
            dogWithChildren612: dogWithChildren612
        });
    }

    childAge1318Selected = (event) => {
        const dogWithChildren1318 = event.target.checked;
        this.setState({
            dogWithChildren1318: dogWithChildren1318
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
        const newwithChildren = this.state.dogWithChildren
        const newwithChildren05 = this.state.dogWithChildren05
        const newwithChildren612 = this.state.dogWithChildren612
        const newwithChildren1318 = this.state.dogWithChildren1318
        const newdogSize = this.state.dogDogSize
        const newdogPace = this.state.dogDogPace
        const newbehaviourNervous = this.state.dogBehaviourNervous
        const newbehaviourLeadPulling = this.state.dogBehaviourLeadPulling
        const newbehaviourBarking = this.state.dogBehaviourBarking
        const newbehaviourReactive = this.state.dogBehaviourReactive

        // only add dog to database if a dog name is specified
        if (newdogName.length > 0) {
            this.props.addDogFunction(newdogName, newotherDogs, newadultMales, 
                newadultFemales, newwithChildren, newwithChildren05, newwithChildren612, 
                newwithChildren1318, newdogSize, newdogPace, newbehaviourNervous, 
                newbehaviourLeadPulling, newbehaviourBarking, newbehaviourReactive);
        
            // reset form options to defaults
            this.setState({
                dogDogName: "",
                dogOtherDogs: true,
                dogAdultMales: false,
                dogAdultFemales: false,
                dogWithChildren: false,
                dogWithChildren05: false,
                dogWithChildren612: false,
                dogWithChildren1318: false,
                dogDogSize: "",
                dogDogPace: "",
                dogBehaviourNervous: false,
                dogBehaviourLeadPulling: false,
                dogBehaviourBarking: false,
                dogBehaviourReactive: false,
                dogNameInvalid: false,
            })
        } else {

            //if the dogNameInvalid state is set
            // an error message will display to show that the dog name 
            // has not not specified
            
                this.setState({
                    dogNameInvalid: true
            })
        }
        // set focus back to the dog name text box - 
        // in case further dogs need to be added
        // Explicitly focus the dog name input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.dogNameInput.current.focus();
    };
        
         

            

    render() {

        return (
            <div className="col">
                <h2>Dog Input Form</h2>
                <h5>Please enter the dogs available to borrow:</h5>
                <form>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="dogName">Dog's name:</label>
                                <span className = "invalidDogName">
                                        {this.state.dogNameInvalid &&
                                        " Please enter the dog's name"
                                        }
                                </span>
                            <input type="text" className="form-control" id="dogName" placeholder="Enter dog's name" 
                                value={this.state.dogDogName} ref={this.dogNameInput} onChange={this.dogNameData} ></input>
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

                    {/* suitable with children form */}

                    <h5>Suitable with children?: </h5>

                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withChildren" id="inlineRadio1" value="Yes" onChange={this.withChildrenSelected} checked={this.state.dogWithChildren} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withChildren" id="inlineRadio1" value="No" onChange={this.withChildrenSelected} checked={this.state.dogWithChildren === false} />
                            <label className="form-check-label" htmlFor="inlineRadio1">No</label>
                        </div>
                    </div>
                    {/* child age ranges form 
                    (enable the checkboxes for the age ranges when withChildren = yes 
                    selected in the section above) */}

                    <h5>Child age range (Select all that apply): </h5>

                    <div className="custom-control custom-radio custom-control-inline">
                        <div className="form-check form-check-inline">
                            {(this.state.dogWithChildren)?
                                <input className="form-check-input" type="checkbox" name="childAges" id="inlineCheckbox1" value="05" onChange={this.childAge05Selected} checked={this.state.dogWithChildren05 === true} />
                                :
                                <input className="form-check-input" type="checkbox" disabled = "disabled" name="childAges" id="inlineCheckbox1" value="05" onChange={this.childAgeBand05} checked={this.state.dogWithChildren05 === true} />
                            }
                            <label className="form-check-label" htmlFor="inlineCheckbox1">aged 0 to 5</label>
                        </div>
                        <div className="form-check form-check-inline">
                            {(this.state.dogWithChildren)?
                                <input className="form-check-input" type="checkbox" name="childAges" id="inlineCheckbox2" value="612" onChange={this.childAge612Selected} checked={this.state.dogWithChildren612 === true} />
                                :
                                <input className="form-check-input" type="checkbox" disabled = "disabled" name="childAges" id="inlineCheckbox2" value="612" onChange={this.childAgeBand612} checked={this.state.dogWithChildren612 === true} />
                            }    
                            <label className="form-check-label" htmlFor="inlineCheckbox2">aged 6 to 12</label>
                        </div>

                        <div className="form-check form-check-inline">
                            {(this.state.dogWithChildren)?
                                <input className="form-check-input" type="checkbox" name="childAges" id="inlineCheckbox3" value="1318" onChange={this.childAge1318Selected} checked={this.state.dogWithChildren1318 === true} />
                                :
                                <input className="form-check-input" type="checkbox" disabled = "disabled" name="childAges" id="inlineCheckbox3" value="1318" onChange={this.childAgeBand1318} checked={this.state.dogWithChildren1318 === true} />
                            }    
                            <label className="form-check-label" htmlFor="inlineCheckbox3">aged 13 to 18</label>
                        </div>
                    </div>

                    <h5>Dog's Size (Select the appropriate box):</h5>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="dogSize" id="inlineRadio1" value="S" onChange={this.dogSizeSelected} checked={this.state.dogDogSize === "S"} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Small</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="dogSize" id="inlineRadio2" value="M" onChange={this.dogSizeSelected} checked={this.state.dogDogSize === "M"} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="dogSize" id="inlineRadio3" value="L" onChange={this.dogSizeSelected} checked={this.state.dogDogSize === "L"} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Large</label>
                        </div>
                    </div>


                    <h5>Dog's Pace (Select the appropriate box):</h5>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="dogPace" id="inlineRadio1" value="S" checked={this.state.dogDogPace === "S"} onChange={this.dogPaceSelected} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Slow</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio"
                                onChange={this.dogPaceSelected} name="dogPace" id="inlineRadio2" value="M" checked={this.state.dogDogPace === "M"} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Moderate</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio"
                                onChange={this.dogPaceSelected} name="dogPace" id="inlineRadio3" value="E" checked={this.state.dogDogPace === "E"} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Energetic</label>
                        </div>
                    </div>


                    <h5>Any behaviour issues? (Select all that apply): </h5>

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