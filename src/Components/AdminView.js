import React, { Component } from 'react';
import DogForm from "./DogForm";
import MatchedBorrowers from "./MatchedBorrowers";
import DogsTable from "./DogsTable";


class AdminView extends Component {
    render() {

        return (
            <div className="adminContainer">

                <div className="row-12">
                    <h5>Matched Borrowers</h5>
                </div>

                {
                    this.props.borrowerMatches.map((item, index) => {

                        return <MatchedBorrowers
                            borrowerId={item.borrowerId} key={index}
                            firstName={item.firstName}
                            surname={item.surname}
                            email={item.email}
                            mobile={item.mobile}

                        />
                    })}

                <DogsTable dogs={this.props.dogs} getDogMatch={this.props.getDogMatch} />



                <div className="row-12">
                    <DogForm
                        addDogs={this.props.addDogs} />
                </div>
            </div>
        );
    }
}




export default AdminView;
