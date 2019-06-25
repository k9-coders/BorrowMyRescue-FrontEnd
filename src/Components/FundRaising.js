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
                    <div className="col-3">
                        <h4> <img src={paw} alt='logo' className='goldpaw' />

                            <button type='button' className='btn btn-outline-light'> Golden Paw Club </button></h4>
                    </div>

                    <div className="col-3">
                        <h4> <img src={dog} alt='logo' className='sponsorDog' />
                            <button type='button' className='btn btn-outline-light'> Sponsor A Sanctuary Dog </button></h4>
                    </div>

                    <div className="col-3">
                        <h4> <img src={pawket} alt='logo' className='donate' />
                            <button type='button' className='btn btn-outline-light'> Pawket Money Toys </button></h4>
                    </div>

                    <div className="col-3">
                        <h4> <img src={facebook} alt='logo' className='facebook' />
                            <button type='button' className='btn btn-outline-light'> Facebook Page </button> </h4>
                    </div>
                </div>
            </div>

        );

    }

}

export default FundRaising;
