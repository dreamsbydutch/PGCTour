import React, { useState } from 'react';
import { getRkChange, useWindowDimensions } from '../utils/utils'

export default function Standings(props) {
    var { width } = useWindowDimensions()
    return (
        <>
            <div className="mb-2 pb-2 text-5xl font-yellowtail text-center">PGC Tour Standings</div>
            <div className="text-sm pb-2 text-gray-400 text-center">Tap on a PGC player to view their stats and tournament history.</div>
            <div id="my-4">
                <div className='grid grid-flow-row grid-cols-8 text-center'>
                    <div className="font-varela place-self-center font-bold text-xs">Rank</div>
                    <div className="font-varela place-self-center font-bold text-base grid-span-4">Name</div>
                    <div className="font-varela place-self-center font-bold text-xs grid-span-2">{width < 400 ? 'Points' : 'Cup Points'}</div>
                    <div className="font-varela place-self-center text-2xs">{width < 360 ? '$$' : 'Earnings'}</div>
                </div>
                {
                    props.limit ?
                        props.data.standings.slice(0, props.limit).map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} />) :
                        props.data.standings.map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} />)
                }
            </div>
        </>
    )
}



function StandingsItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className="[&:nth-child(37)]:border-t-2 [&:nth-child(37)]:border-gray-600" onClick={() => setShowInfo(!showInfo)}>
            <div className='grid grid-flow-row grid-cols-8 text-center py-1 border-t border-dashed border-t-gray-400'>
                <div className="font-varela place-self-center text-2xs">{props.info.ShowRk}  {getRkChange(props.info.RkChange)}</div>
                <div className="font-varela place-self-center text-base grid-span-4 [&>:nth-child(1)]:ml-1.5">
                    {props.info.TeamName}
                    {props.info.Tourney6Rk === '1' ? <img className="inline-block mx-0.5 w-8" src={props.tourneys[5].Logo} alt={props.tourneys[5].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney10Rk === '1' ? <img className="inline-block mx-0.5 w-8" src={props.tourneys[9].Logo} alt={props.tourneys[9].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney13Rk === '1' ? <img className="inline-block mx-0.5 w-8" src={props.tourneys[12].Logo} alt={props.tourneys[12].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney16Rk === '1' ? <img className="inline-block mx-0.5 w-8" src={props.tourneys[15].Logo} alt={props.tourneys[15].Tourney + " Logo"} /> : <></>}
                </div>
                <div className="font-varela place-self-center text-xs grid-span-2">{props.info.Points}</div>
                <div className="font-varela place-self-center text-2xs">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.info.Earnings)}</div>
            </div>
            {showInfo ? <StandingsItemInfo info={props.info} tourneys={props.tourneys} /> : <></>}
        </div>
    )
}

function StandingsItemInfo(props) {

    return (
        <div className="mx-2.5">
            <div className="grid grid-flow-row grid-cols-5 text-center pt-1.5">
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Top Tens</div>
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Cuts Made</div>
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Weekday Avg.</div>
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Weekend Avg.</div>
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Wins</div>
            </div>
            <div className="grid grid-flow-row grid-cols-5 text-center pb-3">
                <div className="font-varela place-self-center text-xs">{props.info.TourneyWins}</div>
                <div className="font-varela place-self-center text-xs">{props.info.TourneyToptens}</div>
                <div className="font-varela place-self-center text-xs">{props.info.TourneyCutsmade}</div>
                <div className="font-varela place-self-center text-xs">{props.info.WeekdayScrAvg}</div>
                <div className="font-varela place-self-center text-xs">{props.info.WeekendScrAvg}</div>
            </div>
            <div className="grid grid-flow-row grid-cols-8 text-center items-end px-1 py-1.5">
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[0].Logo} alt={props.tourneys[0].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney1Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[1].Logo} alt={props.tourneys[1].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney2Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[2].Logo} alt={props.tourneys[2].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney3Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[3].Logo} alt={props.tourneys[3].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney4Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[4].Logo} alt={props.tourneys[4].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney5Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[5].Logo} alt={props.tourneys[5].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney6Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[6].Logo} alt={props.tourneys[6].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney7Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[7].Logo} alt={props.tourneys[7].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney8Rk}</div>
                </div>
            </div>
            <div className="grid grid-flow-row grid-cols-8 text-center items-end px-1 py-1.5 mb-3">
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[8].Logo} alt={props.tourneys[8].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney9Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[9].Logo} alt={props.tourneys[9].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney10Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[10].Logo} alt={props.tourneys[10].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney11Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[11].Logo} alt={props.tourneys[11].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney12Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[12].Logo} alt={props.tourneys[12].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney13Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[13].Logo} alt={props.tourneys[13].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney14Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[14].Logo} alt={props.tourneys[14].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney15Rk}</div>
                </div>
                <div className="grid h-full items-end justify-items-center">
                    <div className="block max-w-full max-h-14 p-0.5">
                        <img src={props.tourneys[15].Logo} alt={props.tourneys[15].Tourney} /></div>
                    <div className="font-barlow font-extrabold text-sm">{props.info.Tourney15Rk}</div>
                </div>
            </div>
        </div>
    )
}