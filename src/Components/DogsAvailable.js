import React, { Component } from "react";

class DogsAvailable extends Component {

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
                    <button type="button" class="btn btn-outline-primary">Primary</button>
                    </div>

                </div>


            </div>
        );
    }
}

export default DogsAvailable;