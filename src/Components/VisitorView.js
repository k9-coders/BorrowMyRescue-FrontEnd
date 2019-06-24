import React, { Component } from 'react';
import BorrowersForm from "./BorrowersForm";

class VisitorView extends Component {

    render() {

        return (

            <div className="row-12">
          <BorrowersForm 
          addBorrowerFunction={this.addBorrowers} />
        </div>
        );
    }
}




export default VisitorView;