import React, { useState } from 'react';
import { getRkChange } from '../utils/utils';

export default function PGCLeaderboard(props) {
    var data = props.limit ? props.tourney.pgcLeaderboard.slice(0, props.limit) : props.tourney.pgcLeaderboard
    return (
        <>
            <div className="grid grid-flow-row grid-cols-10 text-center max-w-xl mx-auto">
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Rank</div>
                <div className="col-span-4 text-base font-bold font-varela place-self-center">Name</div>
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Score</div>
                <div className="col-span-1 text-2xs font-varela place-self-center sm:text-xs">{props.live ? 'Today' : 'Pts'}</div>
                <div className="col-span-1 text-2xs font-varela place-self-center sm:text-xs">{props.live ? 'Thru' : '$$'}</div>
            </div>
            {data.map(obj => <PGCLeaderboardItem info={obj} key={obj.Player} live={props.live} />)}
        </>
    )
}

function PGCLeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div className='border-b border-dashed border-gray-200 max-w-xl mx-auto' onClick={() => setShowInfo(!showInfo)}>
            <div className='grid grid-flow-row grid-cols-10 text-center py-1'>
                <div className='font-varela place-self-center text-sm col-span-2 sm:text-base'>{props.info.ShowRk}   {getRkChange(props.info.RkChange)}</div>
                <div className='font-varela place-self-center text-base col-span-4 sm:text-lg'>{props.info.Name}</div>
                <div className='font-varela place-self-center text-sm col-span-2 sm:text-base'>{props.info.Score}</div>
                <div className='font-varela place-self-center text-2xs col-span-1 sm:text-xs'>{props.live ? props.info.Today : props.info.Points}</div>
                <div className='font-varela place-self-center text-2xs col-span-1 sm:text-xs'>{props.live ? props.info.Thru : props.info.Earnings}</div>
            </div>
            {showInfo ? <PGCLeaderboardItemInfo {...props} /> : <></>}
        </div>
    )
}
function PGCLeaderboardItemInfo(props) {
    return (
        <div className="mt-1 mb-6 mx-auto">
            <TeamRounds {...props} />
            <PGCTeamTable {...props} />
            {props.info.tourneyID > 1 &&
                <ProjStandings {...props} />
            }
        </div>
    )
}


function TeamRounds(props) {
    return (
        <>
            <div className="mx-auto grid grid-cols-5 sm:w-10/12 md:w-9/12">
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 1</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 2</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 3</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 4</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
            </div>
            <div className="mx-auto grid grid-cols-5 mb-1 sm:w-10/12 md:w-9/12">
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R1}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R2}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R3}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.R4}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center md:text-base">{props.info.Total}</div>
            </div>
        </>
    )
}
function PGCTeamTable(props) {
    let golfers = []
    for (let i = 1; i <= 10; i++) {
        golfers.push([
            props.info['G' + i + 'Pos'],
            props.info['G' + i + 'Name'],
            props.info['G' + i + 'Total'],
            props.info['G' + i + 'Today'] ? props.info['G' + i + 'Today'] + ' (' + props.info['G' + i + 'Thru'] + ')' : props.info['G' + i + 'Thru'],
        ])
    }
    return (
        <table className="text-center w-11/12 mx-auto mb-2 table-auto sm:w-9/12 md:w-8/12">
            <thead className="bg-gray-600 text-gray-100">
                <tr>
                    <td className="text-2xs font-bold md:text-xs">Rk</td>
                    <td className="text-2xs font-bold md:text-xs col=span-2" >Golfer</td>
                    <td className="text-2xs font-bold md:text-xs">Score</td>
                    <td className="text-2xs font-bold md:text-xs">Today</td>
                </tr>
            </thead>
            <tbody className={`bg-gray-50 text-gray-700 ${(props.info["R3"] !== "-") ? '[&>*:nth-child(5)]:border-b border-gray-400' : ''}`}>
                {golfers.map(obj => {
                    return (
                        <tr>
                            <td className="text-xs md:text-sm">{obj[0]}</td>
                            <td className="text-xs md:text-sm">{obj[1]}</td>
                            <td className="text-xs md:text-sm">{obj[2]}</td>
                            <td className="text-xs md:text-sm">{obj[3]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
function ProjStandings(props) {
    return (
        <>
            <div className="mx-auto grid grid-cols-2">
                <div className="font-varela font-bold text-xs text-center place-self-center">Current</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Projected</div>
            </div>
            <div className="mx-auto grid grid-cols-2 mb-1">
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R1}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R2}</div>
            </div>
        </>
    )
}