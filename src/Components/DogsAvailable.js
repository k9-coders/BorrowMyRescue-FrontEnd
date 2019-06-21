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
                        {this.props.otherDogs}
                    </div>

                    <div className="col">
                        {this.props.adultMales}
                    </div>

                    <div className="col">
                        {this.props.adultFemales}
                    </div>

                    <div className="col">
                        {this.props.withChildren}
                    </div>

                    <div className="col">
                        {this.props.dogSize}
                    </div>

                    <div className="col">
                        {this.props.dogPace}
                    </div>

                    <div className="col">
                        {this.props.behaviourNervous}
                    </div>

                    <div className="col">
                        {this.props.behaviourBarking}
                    </div>

                    <div className="col">
                        {this.props.behaviourLeadPulling}
                    </div>

                    <div className="col">
                        {this.props.behaviourReactive}
                    </div>

                </div>


            </div>
        );
    }
}

export default DogsAvailable;