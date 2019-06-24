import React, { Component } from 'react';
import DogForm from "./DogForm";
import DogsAvailable from "./DogsAvailable";

class AdminView extends Component {

    render() {

        return (
            <div className="container">
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
                        this.props.dogs.map((item, index) => {
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




export default AdminView;