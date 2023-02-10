import React, { useState } from 'react';

export default function PGALeaderboard(props) {
    console.log(props)
    return (
        <>
            <div className="grid grid-flow-row grid-cols-10 text-center">
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Rank</div>
                <div className="col-span-4 text-md font-bold font-varela place-self-center">Name</div>
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Score</div>
                <div className="col-span-1 text-2xs font-varela place-self-center">{props.live ? 'Today' : '$$'}</div>
                <div className="col-span-1 text-2xs font-varela place-self-center">Usage</div>
            </div>
            {props.tourney.pgaLeaderboard.map(obj => <PGALeaderboardItem info={obj} key={obj['PLAYER']} live={props.live} />)}
        </>
    )
}


function PGALeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='border-b border-dashed border-gray-200' onClick={() => setShowInfo(!showInfo)}>
            <div className='grid grid-flow-row grid-cols-10 text-center py-1'>
                <div className='font-varela place-self-center text-sm col-span-2'>{props.info.POS}</div>
                <div className='font-varela place-self-center text-md col-span-4'>{props.info.PLAYER}</div>
                <div className='font-varela place-self-center text-sm col-span-2'>{props.info.SCORE > 0 ? '+'+props.info.SCORE : props.info.SCORE}</div>
                <div className='font-varela place-self-center text-2xs col-span-1'>{props.live ? props.info.THRU ? (props.info.TODAY > 0 ? '+'+props.info.TODAY : props.info.TODAY) + " (" + props.info.THRU + ")" : props.info.THRU : props.info.EARNINGS}</div>
                <div className='font-varela place-self-center text-2xs col-span-1'>{props.info.Usage}</div>
            </div>
            {showInfo ? <PGALeaderboardItemInfo info={props.info} /> : <></>}
        </div>
    )
}
function PGALeaderboardItemInfo(props) {
    return (
        <div className="mt-1 mb-5 mx-auto">
            <div className="mx-auto grid grid-cols-5">
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 1</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 2</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 3</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 4</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
            </div>
            <div className="mx-auto grid grid-cols-5 mb-1">
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R1 ? props.info.R1 : "-"}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R2 ? props.info.R2 : "-"}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R3 ? props.info.R3 : "-"}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R4 ? props.info.R4 : "-"}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.TOT ? props.info.TOT : "-"}</div>
            </div>
        </div>
    )
}