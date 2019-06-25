import React, { Component } from 'react';
import logo from './images/BorrowRescueHeader.jpg';
import './Header.css';

class Header extends Component {

    render() {

        return (
            
            <div>
                <h1> <img src={logo} alt='logo' className='center'/></h1>
         </div>
        
        );
    }
}




export default Header;

