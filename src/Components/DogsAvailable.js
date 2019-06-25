import React, { Component } from "react";
import './DogsAvailable.css';

class DogsAvailable extends Component {
    

    matchDogClicked = e => {
        e.preventDefault();
        // retrieve  dog id 
        const matchDogId = this.props.dogId
        // test that dog Id has been selected
        console.log("Dog Id for matching " + matchDogId);
        // retrieve list of matching borrowers
        // if dogId has been selected
        if (matchDogId > 0) {
            this.props.getDogMatch(matchDogId);
        } 
        // remove focus from the match button
        //document.getElementById("deleteTask").blur();
        document.activeElement.blur();
    };

    render() {

        return (
            <div className="col">
                <div className="row">

                    <div className="col">
                        {this.props.dogName}
                    </div>

                    <div className="col">
                        {(this.props.otherDogs)? "Y":"N"}
                    </div>

                    <div className="col">
                        {(this.props.adultMales)? "Y":"N"}
                    </div>

                    <div className="col">
                        {(this.props.adultFemales)? "Y":"N"}
                    </div>

                    <div className="col">
                        {(this.props.withChildren)? "Y":"N"}
                    </div>
                    <div className="col">
                        {(this.props.withChildren05)? "Y":"N"}
                    </div>
                    <div className="col">
                        {(this.props.withChildren612)? "Y":"N"}
                    </div>
                    <div className="col">
                        {(this.props.withChildren1318)? "Y":"N"}
                    </div>
                    <div className="col">
                        {this.props.dogSize}
                    </div>

                    <div className="col">
                        {this.props.dogPace}
                    </div>

                    <div className="col">
                        {(this.props.behaviourNervous)? "Y":"N"}
                    </div>

                    <div className="col">
                        {(this.props.behaviourBarking)? "Y":"N"}
                    </div>

                    <div className="col">
                        {(this.props.behaviourLeadPulling)? "Y":"N"}
                    </div>

                    <div className="col">
                        {(this.props.behaviourReactive)? "Y":"N"}
                    </div>

                    <div>
                    <button type='button' className='btn3 btn-outline-light'
                        onClick={this.matchDogClicked}>Match</button>
                    </div>

                </div>


            </div>
        );
    }
}

export default DogsAvailable;