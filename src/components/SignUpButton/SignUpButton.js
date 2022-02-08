import React from 'react';
import './SignUpButton.css'

function SignUpButton(props) {
    return (
        <div className="signupbutton-container">
            <a href={props.data.FormLink} className="signupbutton">MAKE YOUR {props.data.Tourney} PICKS HERE</a>
        </div>
    )
}

export default SignUpButton;
