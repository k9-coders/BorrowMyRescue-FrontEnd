import React, { Component } from 'react';
import paw from './images/goldenPaw.jpg';
import dog from './images/sponsorDog.jpg';
import pawket from './images/donate.jpg';
import facebook from './images/facebook.jpg';
import './Fundraising.css';


class FundRaising extends Component {

    render() {
        
        return (
            <div>
                <div class="row">
                    <div class="col-3">
                            <h4> <img src={paw} alt='logo' class='goldpaw'/>
                            <button type='button' class='btn btn-outline-dark'> Golden Paw Club </button></h4>
                            </div>
                     </div>
                    <div class="row">
                    <div class="col-3">
                            <h4> <img src={dog} alt='logo' class='sponsorDog'/>
                            <button type='button' class='btn btn-outline-dark'> Sponsor A Sanctuary Dog </button></h4>
                            </div>
                     </div>
                    <div class="row">
                        <div class="col-3">
                            <h4> <img src={pawket} alt='logo' class='donate'/>  
                            <button type='button' class='btn btn-outline-dark'> Pawket Money Toys </button></h4>
                            </div>
                     </div>
                    <div class="row">
                        <div class="col-3">
                            <h4> <img src={facebook} alt='logo' class='facebook'/> 
                            <button type='button' class='btn btn-outline-dark'> Facebook Page </button>
                            </h4>
                            </div>
                     </div>
            </div>

        );
        
    }

}

export default FundRaising;
