import React, { useState } from 'react';

function SignUpButton(props) {
    const [effect, setEffect] = useState(false);
    return (
        <div className="text-center m-auto">
            <a
                href={props.tourney.FormLink}
                className={`${effect && "animate-btnClick"
                    } inline-block w-5/6 p-4 my-4 mx-auto rounded-2xl box-border no-underline font-varela uppercase text-lg font-extrabold text-gray-200 bg-slate-600 shadow-btn hover:text-gray-400 sm:text-xl lg:text-2xl`}
                onClick={() => {
                    setEffect(true);
                }}
                onAnimationEnd={() => setEffect(false)}
            >
                MAKE/EDIT YOUR {props.tourney.Tourney} PICKS HERE
            </a>
        </div>
    )
}

export default SignUpButton;
