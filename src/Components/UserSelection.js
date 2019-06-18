import React, { Component } from "react";

class UserSelection extends Component {

    render() {

        return (
            <div className="col">
                <h5>Please select whether you are a visitor or an admin to the website:</h5>
                <form>
                    <div className="custom-control custom-radio custom-control-inline">

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">Visitor</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Admin</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default UserSelection;