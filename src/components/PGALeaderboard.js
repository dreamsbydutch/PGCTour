import { useState } from 'react';
import { formatScore } from '../utils/utils';
import { formatThru } from '../utils/utils';

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
            {props.tourney.pgaLeaderboard?.map(obj => <PGALeaderboardItem info={obj} key={obj.PLAYER} live={props.live} />)}
        </>
    )
}


function PGALeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div className='border-b border-dashed border-gray-200 max-w-xl mx-auto' onClick={() => setShowInfo(!showInfo)}>
            <div className={`grid grid-flow-row grid-cols-10 text-center py-1 ${props.info.currentScore>99 ? 'text-gray-400' : 'text-gray-800'}`}>
                <div className='font-varela place-self-center text-sm col-span-2 sm:text-base'>{props.info.currentPos}</div>
                <div className='font-varela place-self-center text-base col-span-4 sm:text-lg'>{props.info.playerName}</div>
                <div className='font-varela place-self-center text-sm col-span-2 sm:text-base'>{formatScore(props.info.currentScore)}</div>
                <div className='font-varela place-self-center whitespace-nowrap text-2xs col-span-1 sm:text-xs'>{formatScore(props.info.today) + " (" + formatThru(props.info.thru,(props.info.R1 === "" ? props.info.r1TeeTime : props.info.R2 === "" ? props.info.r2TeeTime : props.info.R3 === "" ? props.info.r3TeeTime : props.info.R4 === "" ? props.info.r4TeeTime : "")) + ")"}</div>
                <div className='font-varela place-self-center text-2xs col-span-1 sm:text-xs'>{Math.round(props.info.usage*1000)/10}%</div>
            </div>
            {showInfo ? <PGALeaderboardItemInfo info={props.info} /> : <></>}
        </div>
    )
}
function PGALeaderboardItemInfo(props) {
    return (
        <div className="mt-1 mb-6 mx-auto">
            <div className={`mx-auto grid grid-cols-7 sm:w-11/12 md:w-10/12 ${(props.info.score === "CUT" || props.info.score === "WD" || props.info.score === "DQ") ? 'text-gray-400' : 'text-gray-800'}`}>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 1</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 2</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 3</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 4</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
                {props.info.R2==="" ? 
                    <>
                        <div className="font-varela font-bold text-xs text-center place-self-center">Make Cut</div>
                        <div className="font-varela font-bold text-xs text-center place-self-center">Top 10</div>
                    </>
                    :
                    <>
                        <div className="font-varela font-bold text-xs text-center place-self-center">Top 10</div>
                        <div className="font-varela font-bold text-xs text-center place-self-center">Win</div>
                    </>
                }
            </div>
            <div className={`mx-auto grid grid-cols-7 mb-1 sm:w-11/12 md:w-10/12 ${(props.info.score === "CUT" || props.info.score === "WD" || props.info.score === "DQ") ? 'text-gray-400' : 'text-gray-800'}`}>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R1}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R2}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R3}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R4}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.Total}</div>
                {props.info.R2==="" ?
                    <>
                        <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{Math.round(props.info.makeCut*1000)/10}%</div>
                        <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{Math.round(props.info.topTen*1000)/10}%</div>
                    </>
                    :
                    <>
                        <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{Math.round(props.info.topTen*1000)/10}%</div>
                        <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{Math.round(props.info.win*1000)/10}%</div>
                    </>
                }
            </div>
        </div>
    )
}
