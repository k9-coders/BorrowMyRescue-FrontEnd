import React, { Component } from 'react';

class MatchedBorrowers extends Component {

    render() {

        return (
            <div className="col">

                <div className="row">

                    <div className="col-3">
                        {this.props.firstName}
                    </div>

                    <div className="col-3">
                        {(this.props.surname)}
                    </div>

                    <div className="col-3">
                        {(this.props.email)}
                    </div>

                    <div className="col-3">
                        {(this.props.mobile)}
                    </div>

                </div>

            </div>

        );
    }
}

export default MatchedBorrowers;
