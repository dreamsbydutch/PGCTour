import React, { useState } from 'react';
import { getRkChange } from '../utils/utils';

export default function PGCLeaderboard(props) {
    var data = props.limit ? props.tourney.pgcLeaderboard.slice(0, props.limit) : props.tourney.pgcLeaderboard
    return (
        <>
            <div className="grid grid-flow-row grid-cols-10 text-center">
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Rank</div>
                <div className="col-span-4 text-md font-bold font-varela place-self-center">Name</div>
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Score</div>
                <div className="col-span-1 text-2xs font-varela place-self-center">{props.live ? 'Today' : 'Pts'}</div>
                <div className="col-span-1 text-2xs font-varela place-self-center">{props.live ? 'Thru' : '$$'}</div>
            </div>
            {data.map(obj => <PGCLeaderboardItem info={obj} key={obj.Player} live={props.live} />)}
        </>
    )
}

function PGCLeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div className='border-b border-dashed border-gray-200' onClick={() => setShowInfo(!showInfo)}>
            <div className='grid grid-flow-row grid-cols-10 text-center py-1'>
                <div className='font-varela place-self-center text-sm col-span-2'>{props.info.ShowRk}   {getRkChange(props.info.RkChange)}</div>
                <div className='font-varela place-self-center text-md col-span-4'>{props.info.Name}</div>
                <div className='font-varela place-self-center text-sm col-span-2'>{props.info.Score}</div>
                <div className='font-varela place-self-center text-2xs col-span-1'>{props.live ? props.info.Today : props.info.Points}</div>
                <div className='font-varela place-self-center text-2xs col-span-1'>{props.live ? props.info.Thru : props.info.Earnings}</div>
            </div>
            {showInfo ? <PGCLeaderboardItemInfo {...props} /> : <></>}
        </div>
    )
}
function PGCLeaderboardItemInfo(props) {
    console.log(props)
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
            <div className="mx-auto grid grid-cols-5">
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 1</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 2</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 3</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Rd 4</div>
                <div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
            </div>
            <div className="mx-auto grid grid-cols-5 mb-1">
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R1}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R2}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R3}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.R4}</div>
                <div className="font-varela py-1 text-sm text-center place-self-center">{props.info.Total}</div>
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
        <table className="text-center w-11/12 mx-auto mb-2 table-auto">
            <thead className="bg-gray-600 text-gray-100">
                <tr>
                    <td className="text-2xs font-bold">Rk</td>
                    <td className="text-2xs font-bold col=span-2" >Golfer</td>
                    <td className="text-2xs font-bold">Score</td>
                    <td className="text-2xs font-bold">Today</td>
                </tr>
            </thead>
            <tbody className="bg-gray-50 text-gray-700">
                {golfers.map(obj => {
                    return (
                        <tr>
                            <td className="text-xs">{obj[0]}</td>
                            <td className="text-xs">{obj[1]}</td>
                            <td className="text-xs">{obj[2]}</td>
                            <td className="text-xs">{obj[3]}</td>
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