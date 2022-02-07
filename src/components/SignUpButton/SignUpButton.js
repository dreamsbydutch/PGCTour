import React from 'react';
import './SignUpButton.css'

function SignUpButton(props) {
    return (
        <div className="signupbutton-container">
            <a href={props.data.FormLink} className="signupbutton">CLICK HERE TO MAKE YOUR {props.data.Tourney} PICKS</a>
        </div>
    )
}

export default SignUpButton;
