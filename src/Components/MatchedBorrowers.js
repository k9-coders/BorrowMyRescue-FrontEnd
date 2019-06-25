import React, { Component } from 'react';

class MatchedBorrowers extends Component {

    render() {

        return (
            <div className="col">

                <div className="row">

                    <div className="col">
                        {this.props.firstName}
                    </div>

                    <div className="col">
                        {(this.props.surname)}
                    </div>

                    <div className="col">
                        {(this.props.email)}
                    </div>

                    <div className="col">
                        {(this.props.mobile)}
                    </div>

                </div>

            </div>

        );
    }
}

export default MatchedBorrowers;
