import React, { useState } from 'react';
import { formatMoney, getRkChange, useWindowDimensions } from '../utils/utils'

import ReactGA from 'react-ga4';
ReactGA.send({ hitType: "pageview", page: "/standings" });

export default function Standings(props) {
    const [pgcEffect, setPGCEffect] = useState(false);
    const [dbydEffect, setDbyDEffect] = useState(false);
    const [standingsToggle, setStandingsToggle] = useState("PGC")
    return (
        <>
            <div className="mb-2 pb-2 text-5xl font-yellowtail text-center sm:text-6xl md:text-7xl">{props.home ? 'Combined Top 15' : standingsToggle === "PGC" ? 'PGC Tour Standings' : 'Dreams by Dutch Tour Standings'}</div>
            <div className="text-sm pb-2 text-gray-400 text-center md:text-base">Tap on a tour player to view their stats and tournament history.</div>
            
            <div className="mt-8">
                {props.home ?
                        <FullStandings {...props} />
                    :
                    <>
                    <div className="my-4 mx-auto text-center">
                        <button onClick={() => { setStandingsToggle("PGC"); setPGCEffect(true); }} className={`${pgcEffect && "animate-toggleClick"} my-2 mx-3 py-1 px-6 rounded-lg text-lg md:text-xl sm:px-8 md:px-10 font-bold ${standingsToggle === "PGC" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setPGCEffect(false)}>PGC</button>
                        <button onClick={() => { setStandingsToggle("DbyD"); setDbyDEffect(true); }} className={`${dbydEffect && "animate-toggleClick"} my-2 mx-3 py-1.5 px-6 rounded-lg text-md md:text-lg sm:px-8 md:px-10 font-bold ${standingsToggle === "DbyD" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setDbyDEffect(false)}>Dreams by Dutch</button>
                    </div>
                    {standingsToggle === "PGC" ?
                            <PGCStandings {...props} />
                        :
                            <DbyDStandings {...props} />}
                    </>
                }
            </div>
        </>
    )
}
function FullStandings(props) {
    var { width } = useWindowDimensions()
    const fullStandings = props.data.standings.map(obj => {
        obj.ShowRk = obj.FullRk
        return obj
    })
    return (
        <>
            <div id="my-4">
                <div className='grid grid-flow-row grid-cols-8 text-center'>
                    <div className="font-varela place-self-center font-bold text-xs sm:text-sm">Rank</div>
                    <div className="font-varela place-self-center font-bold text-base sm:text-lg  col-span-4">Name</div>
                    <div className="font-varela place-self-center font-bold text-xs col-span-2 xs:text-sm sm:text-base">{width < 400 ? 'Points' : 'Cup Points'}</div>
                    <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm">{width < 360 ? '$$' : 'Earnings'}</div>
                </div>
                {
                    props.limit ?
                        fullStandings.slice(0, props.limit).map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} />) :
                        fullStandings.map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} />)
                }
            </div>
        </>
    )
}
function PGCStandings(props) {
    var { width } = useWindowDimensions()
    const pgcStandings = props.data.standings.filter(obj => obj.TourID === '1')
    return (
        <>
            <div id="my-4">
                <div className='grid grid-flow-row grid-cols-8 text-center'>
                    <div className="font-varela place-self-center font-bold text-xs sm:text-sm">Rank</div>
                    <div className="font-varela place-self-center font-bold text-base sm:text-lg  col-span-4">Name</div>
                    <div className="font-varela place-self-center font-bold text-xs col-span-2 xs:text-sm sm:text-base">{width < 400 ? 'Points' : 'Cup Points'}</div>
                    <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm">{width < 360 ? '$$' : 'Earnings'}</div>
                </div>
                {
                    props.limit ?
                        pgcStandings.slice(0, props.limit).map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} />) :
                        pgcStandings.map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} />)
                }
            </div>
        </>
    )
}
function DbyDStandings(props) {
    var { width } = useWindowDimensions()
    const dbydStandings = props.data.standings.filter(obj => obj.TourID === '2')
    return (
        <>
            <div id="my-4">
                <div className='grid grid-flow-row grid-cols-8 text-center'>
                    <div className="font-varela place-self-center font-bold text-xs sm:text-sm">Rank</div>
                    <div className="font-varela place-self-center font-bold text-base sm:text-lg  col-span-4">Name</div>
                    <div className="font-varela place-self-center font-bold text-xs col-span-2 xs:text-sm sm:text-base">{width < 400 ? 'Points' : 'Cup Points'}</div>
                    <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm">{width < 360 ? '$$' : 'Earnings'}</div>
                </div>
                {
                    props.limit ?
                        dbydStandings.slice(0, props.limit).map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} />) :
                        dbydStandings.map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} />)
                }
            </div>
        </>
    )
}



function StandingsItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className="" onClick={() => setShowInfo(!showInfo)}>
        {/* <div className="[&:nth-child(17)]:border-t-2 [&:nth-child(17)]:border-yellow-600 [&:nth-child(32)]:border-t-2 [&:nth-child(32)]:border-gray-600" onClick={() => setShowInfo(!showInfo)}> */}
            <div className='grid grid-flow-row grid-cols-8 text-center py-1 md:py-2 border-t border-dashed border-t-gray-400'>
                <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm md:text-md lg:text-lg">{props.info.ShowRk}  {getRkChange(props.info.RkChange)}</div>
                <div className="font-varela place-self-center text-base sm:text-lg md:text:xl lg:text-2xl col-span-4 [&>:nth-child(1)]:ml-1.5">
                    {props.info.TeamName}
                    {props.info.Tourney6Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.tourneys[5].Logo} alt={props.tourneys[5].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney10Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.tourneys[9].Logo} alt={props.tourneys[9].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney13Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.tourneys[12].Logo} alt={props.tourneys[12].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney16Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.tourneys[15].Logo} alt={props.tourneys[15].Tourney + " Logo"} /> : <></>}
                </div>
                <div className="font-varela place-self-center text-xs col-span-2 2xs:text-sm sm:text-base md:text-lg lg:text-xl">{props.info.Points}</div>
                <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg">{formatMoney(props.info.Earnings)}</div>
            </div>
            {showInfo ? <StandingsItemInfo info={props.info} tourneys={props.tourneys} /> : <></>}
        </div>
    )
}

function StandingsItemInfo(props) {

    return (
        <div className="mx-2.5">
            <div className="grid grid-flow-row grid-cols-5 text-center pt-1.5">
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Wins</div>
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Top Tens</div>
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Cuts Made</div>
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Weekday Avg.</div>
                <div className="place-self-center font-varela text-3xs 2xs:text-2xs sm:text-sm font-bold">Weekend Avg.</div>
            </div>
            <div className="grid grid-flow-row grid-cols-5 text-center pb-3">
                <div className="font-varela place-self-center text-xs 2xs:text-sm sm:text-base md:text-lg">{props.info.TourneyWins}</div>
                <div className="font-varela place-self-center text-xs 2xs:text-sm sm:text-base md:text-lg">{props.info.TourneyToptens}</div>
                <div className="font-varela place-self-center text-xs 2xs:text-sm sm:text-base md:text-lg">{props.info.TourneyCutsmade}</div>
                <div className="font-varela place-self-center text-xs 2xs:text-sm sm:text-base md:text-lg">{props.info.WeekdayScrAvg}</div>
                <div className="font-varela place-self-center text-xs 2xs:text-sm sm:text-base md:text-lg">{props.info.WeekendScrAvg}</div>
            </div>
            <div className="grid grid-flow-row grid-cols-8 text-center items-end px-1 py-1.5 [&>*:nth-child(8)]:border-none">
                {props.tourneys.slice(0, 8).map(obj => {
                    return (
                        <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                            <a href={"#/leaderboard/" + obj.tourneyID} className="block max-w-full max-h-14 p-0.5">
                                <img className="max-h-12" src={obj.Logo} alt={obj.Tourney} /></a>
                            <div className="font-barlow font-extrabold text-base xs:text-lg sm:text-xl md:text-2xl">{props.info['Tourney' + obj.tourneyID + 'Rk']}</div>
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-flow-row grid-cols-8 text-center items-end px-1 py-1.5 [&>*:nth-child(8)]:border-none">
                {props.tourneys.slice(8, 16).map(obj => {
                    return (
                        <div className="grid h-full items-end justify-items-center border-r border-dotted border-gray-400">
                            <a href={"#/leaderboard/" + obj.tourneyID}  className="block max-w-full max-h-14 p-0.5">
                                <img className="max-h-12" src={obj.Logo} alt={obj.Tourney} /></a>
                            <div className="font-barlow font-extrabold text-base xs:text-lg sm:text-xl md:text-2xl">{props.info['Tourney' + obj.tourneyID + 'Rk']}</div>
                        </div>
                    )
                })}
            </div>
            <div className="py-4"></div>
        </div>
    )
}