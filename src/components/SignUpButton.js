import React, { useState } from 'react';

function SignUpButton(props) {
    console.log(props.tourney.Tourney)
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
                MAKE/EDIT YOUR {props.tourney.Tourney === 'FedEx-St. Jude Championship' ? 'PGC PLAYOFF' : props.tourney.Tourney} PICKS HERE
            </a>
            {props.tourney.Tourney === 'FedEx-St. Jude Championship' ? <div className='text-center w-4/6 mx-auto font-barlow font-semibold'>Please do not enter picks if you have not qualified for the playoffs.</div> : null}
        </div>
    )
}

export default SignUpButton;
