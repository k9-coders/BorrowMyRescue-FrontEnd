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
                <div className="row">
                    <div className="col">
                        <h4> <img src={paw} alt='logo' className='goldpaw' /></h4>
                        <button type='button' className='btn btn-outline-secondary'> Golden Paw Club </button>
                    </div>

                    <div className="col">
                        <h4> <img src={dog} alt='logo' className='sponsorDog' /></h4>
                        <button type='button' className='btn btn-outline-secondary'> Sponsor A Sanctuary Dog </button>
                    </div>

                    <div className="col">
                        <h4> <img src={pawket} alt='logo' className='donate' /></h4>
                        <button type='button' class='btn btn-outline-secondary'> Pawket Money Toys </button>
                    </div>

                    <div className="col">
                        <h4> <img src={facebook} alt='logo' className='facebook' /></h4>
                        <button type='button' className='btn btn-outline-secondary'> Facebook Page </button>
                    </div>
                </div>
            </div>

        );

    }

}

export default FundRaising;
