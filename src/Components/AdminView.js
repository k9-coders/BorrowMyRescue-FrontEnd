import React, { Component } from 'react';
import DogForm from "./DogForm";
import DogsTable from "./DogsTable";
import MatchedBorrowersTable from './MatchedBorrowersTable';


class AdminView extends Component {
    render() {

        return (
            <div className="adminContainer">

                <div>
                    <h5>Matched Borrowers</h5>
                </div>



                <MatchedBorrowersTable
                    borrowerMatches={this.props.borrowerMatches}
                    getDogMatch={this.props.getDogMatch} />

                <DogsTable dogs={this.props.dogs}
                    getDogMatch={this.props.getDogMatch} />



                <div className="row-12">
                    <DogForm
                        addDogs={this.props.addDogs} />
                </div>
            </div>
        );
    }
}




export default AdminView;
