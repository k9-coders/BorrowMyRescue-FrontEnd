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
                    getDogMatch={this.props.getDogMatch}
                    clearMatchedBorrowersClicked={this.props.borrowerMatches} />

                <div>
                    <button type='button' className='btn2 btn-outline-light' onClick={this.props.clearMatchedBorrowersClicked} > 
                    Clear Matched Borrowers  </button>
                </div>

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
