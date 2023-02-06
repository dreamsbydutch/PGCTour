import React, { useState } from 'react';

function SeasonSignUpButton(props) {
    const [effect, setEffect] = useState(false);
    return (
        <div className="text-center m-auto">
            <a
                href={props.url}
                className={`${effect && "animate-btnClick"
                    } inline-block w-5/6 p-4 my-4 mx-auto rounded-2xl box-border no-underline font-varela uppercase text-lg font-extrabold text-gray-200 bg-slate-600 shadow-btn hover:text-gray-400`}
                onClick={() => {
                    setEffect(true);
                }}
                onAnimationEnd={() => setEffect(false)}
            >
                SIGN UP FOR THE 2023 PGC TOUR HERE
            </a>
        </div>
    )
}

export default SeasonSignUpButton;
