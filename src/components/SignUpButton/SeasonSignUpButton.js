import React from 'react';
import './SeasonSignUpButton.css'

function SeasonSignUpButton(props) {
    return (
        <div className="seasonsignupbutton-container">
            <a href={props.data} className="seasonsignupbutton">SIGN UP FOR THE 2023 PGC TOUR HERE</a>
        </div>
    )
}

export default SignUpButton;
