import React, { Component } from 'react';

class MatchedBorrowers extends Component {

    render() {

        return (

                <tr>

                    <td>
                        {this.props.firstName}
                    </td>

                    <td>
                        {(this.props.surname)}
                    </td>

                    <td>
                        {(this.props.email)}
                    </td>

                    <td>
                        {(this.props.mobile)}
                    </td>

                </tr>

        );
    }
}

export default MatchedBorrowers;
