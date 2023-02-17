import React, { useState } from 'react';
import { formatMoney } from '../utils/utils';

export default function PGALeaderboard(props) {
    return (
        <>
            <div className="grid grid-flow-row grid-cols-10 text-center max-w-xl mx-auto">
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Rank</div>
                <div className="col-span-4 text-base font-bold font-varela place-self-center">Name</div>
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Score</div>
                <div className="col-span-1 text-2xs font-varela place-self-center sm:text-xs">{props.live ? 'Today' : '$$'}</div>
                <div className="col-span-1 text-2xs font-varela place-self-center sm:text-xs">Usage</div>
            </div>
            {props.tourney.pgaLeaderboard.map(obj => <PGALeaderboardItem info={obj} key={obj.PLAYER} live={props.live} />)}
        </>
    )
}


function PGALeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='border-b border-dashed border-gray-200 max-w-xl mx-auto' onClick={() => setShowInfo(!showInfo)}>
            <div className={`grid grid-flow-row grid-cols-10 text-center py-1 ${(props.info.SCORE === "CUT" || props.info.SCORE === "WD" || props.info.SCORE === "DQ") ? 'text-gray-400' : 'text-gray-800'}`}>
                <div className='font-varela place-self-center text-sm col-span-2 sm:text-base'>{props.info.POS}</div>
                <div className='font-varela place-self-center text-base col-span-4 sm:text-lg'>{props.info.PLAYER}</div>
                <div className='font-varela place-self-center text-sm col-span-2 sm:text-base'>{props.info.SCORE > 0 ? '+' + props.info.SCORE : props.info.SCORE}</div>
                <div className='font-varela place-self-center whitespace-nowrap text-2xs col-span-1 sm:text-xs'>{props.live ? !(props.info.THRU.includes("AM") || props.info.THRU.includes("PM") || props.info.THRU.includes("CUT") || props.info.THRU.includes("WD")) ? (props.info.TODAY > 0 ? '+' + props.info.TODAY : props.info.TODAY) + " (" + props.info.THRU + ")" : props.info.THRU : formatMoney(props.info.EARNINGS)}</div>
                <div className='font-varela place-self-center text-2xs col-span-1 sm:text-xs'>{props.info.USAGE}</div>
            </div>
            {showInfo ? <PGALeaderboardItemInfo info={props.info} /> : <></>}
        </div>
    )
}
function PGALeaderboardItemInfo(props) {
    return (
        <div className="mt-1 mb-6 mx-auto">
            <div className={`mx-auto grid grid-cols-5 sm:w-10/12 md:w-9/12 ${(props.info.SCORE === "CUT" || props.info.SCORE === "WD" || props.info.SCORE === "DQ") ? 'text-gray-400' : 'text-gray-800'}`}>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 1</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 2</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 3</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 4</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
            </div>
            <div className={`mx-auto grid grid-cols-5 mb-1 sm:w-10/12 md:w-9/12 ${(props.info.SCORE === "CUT" || props.info.SCORE === "WD" || props.info.SCORE === "DQ") ? 'text-gray-400' : 'text-gray-800'}`}>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R1}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R2}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R3}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R4}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.Total}</div>
            </div>
        </div>
    )
}