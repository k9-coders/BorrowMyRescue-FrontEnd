import React, { Component } from "react";

class UserSelection extends Component {

    render() {

        return (
            <div className="col">
                <h5>Please select whether you are a visitor or an admin to the website:</h5>
                <form>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Visitor</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Admin</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default UserSelection;