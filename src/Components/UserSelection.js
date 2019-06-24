import React, { Component } from "react";

class UserSelection extends Component {
    

    // store whether visitor selected
    typeUser = (event) => {
        const typeSelected = event.target.value;
        this.props.updateUserSelected(typeSelected)
    }


    render() {

                return(
            <div className = "col" >
                        <h5>Please select whether you are a visitor or an admin to the website:</h5>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                {/* user type selection for visitor or admin */}
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioVisitor" id="inlineRadioVisitor" value="visitor" onChange={this.typeUser} checked={this.props.selection === "visitor"} />
                                    <label className="form-check-label" htmlFor="inlineRadioVisitor">Visitor</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioAdmin" id="inlineRadioAdmin" value="admin" onChange={this.typeUser} checked={this.props.selection === "admin"} />
                                    <label className="form-check-label" htmlFor="inlineRadioAdmin">Admin</label>
                                </div>
                                
                            </div>

                        </form>
            </div>
        )
    }
};

export default UserSelection;