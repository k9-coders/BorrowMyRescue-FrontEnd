import React from "react";
import { Table } from 'react-bootstrap'
import MatchedBorrowers from './MatchedBorrowers';

const MatchedBorrowersTable = (props) => {
    return (

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th align="centre">First Name</th>
                    <th align="centre">Surname</th>
                    <th align="centre">Email</th>
                    <th align="centre">Mobile</th>
                </tr>
            </thead>
            <tbody>
                {props.borrowerMatches.map((item, index) => {

                    return <MatchedBorrowers
                        borrowerId={item.borrowerId} key={index}
                        firstName={item.firstName}
                        surname={item.surname}
                        email={item.email}
                        mobile={item.mobile}
                        getDogMatch={props.getDogMatch}
                    />
                })}
            </tbody>
        </Table>
    )
}

export default MatchedBorrowersTable;