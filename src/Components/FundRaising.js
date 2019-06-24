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
                    <div class="col">
                        <h4> <img src={paw} alt='logo' class='goldpaw' /></h4>
                        <button type='button' class='btn btn-outline-secondary'> Golden Paw Club </button>
                    </div>

                    <div class="col">
                        <h4> <img src={dog} alt='logo' class='sponsorDog' /></h4>
                        <button type='button' class='btn btn-outline-secondary'> Sponsor A Sanctuary Dog </button>
                    </div>

                    <div class="col">
                        <h4> <img src={pawket} alt='logo' class='donate' /></h4>
                        <button type='button' class='btn btn-outline-secondary'> Pawket Money Toys </button>
                    </div>

                    <div class="col">
                        <h4> <img src={facebook} alt='logo' class='facebook' /></h4>
                        <button type='button' class='btn btn-outline-secondary'> Facebook Page </button>
                    </div>
                </div>
            </div>

        );

    }

}

export default FundRaising;
