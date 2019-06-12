import React, { Component } from "react";
import BorrowMyRescueInfo from "./BorrowMyRescueInfo.jpg"

class Header extends Component {

    render() {

        return (
            <div className="row-12">
                <img src={BorrowMyRescueInfo} alt="BorrowMyRescueInfo" />
            </div>
        );

    }

}





export default Header;