import React, { Component } from "react";
import './DogsAvailable.css';

class DogsAvailable extends Component {


    matchDogClicked = e => {
        e.preventDefault();
        // retrieve  dog id 
        const matchDogId = this.props.dogId
        // test that dog Id has been selected
        console.log("Dog Id for matching " + matchDogId);
        // retrieve list of matching borrowers
        // if dogId has been selected
        if (matchDogId > 0) {
            this.props.getDogMatch(matchDogId);
        }
        // remove focus from the match button
        //document.getElementById("deleteTask").blur();
        document.activeElement.blur();
    };

    deleteDogClicked = e => {
        e.preventDefault();
        // retrieve  dog id 
        const deleteDogId = this.props.dogId
        // test that dog Id has been selected
        console.log("Dog Id for delete " + deleteDogId);
        // retrieve list of matching borrowers
        // if dogId has been selected
        if (deleteDogId > 0) {
            this.props.deleteDogMatch(deleteDogId);
        }
        // remove focus from the match button
        //document.getElementById("deleteTask").blur();
        document.activeElement.blur();
    };

    render() {
        return (
            <tr>
                <td className="col">
                    {this.props.dogName}
                </td>

                <td className="col">
                    {(this.props.otherDogs) ? "Y" : "N"}
                </td>

                <td className="col">
                    {(this.props.adultMales) ? "Y" : "N"}
                </td>

                <td className="col">
                    {(this.props.adultFemales) ? "Y" : "N"}
                </td>

                <td className="col">
                    {(this.props.withChildren) ? "Y" : "N"}
                </td>
                <td className="col">
                    {(this.props.withChildren05) ? "Y" : "N"}
                </td>
                <td className="col">
                    {(this.props.withChildren612) ? "Y" : "N"}
                </td>
                <td className="col">
                    {(this.props.withChildren1318) ? "Y" : "N"}
                </td>
                <td className="col">
                    {this.props.dogSize}
                </td>

                <td className="col">
                    {this.props.dogPace}
                </td>

                <td className="col">
                    {(this.props.behaviourNervous) ? "Y" : "N"}
                </td>

                <td className="col">
                    {(this.props.behaviourBarking) ? "Y" : "N"}
                </td>

                <td className="col">
                    {(this.props.behaviourLeadPulling) ? "Y" : "N"}
                </td>

                <td className="col">
                    {(this.props.behaviourReactive) ? "Y" : "N"}
                </td>

                <td>
                <button type='button' className='btn3 btn-outline-light'
                        onClick={this.matchDogClicked}>Match</button>
                </td>
                <td>
                <button type='button' className='btn3 btn-outline-light'
                        onClick={this.deleteDogClicked}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default DogsAvailable;