import React, { useState } from 'react';
import { formatMoney, getRkChange, useWindowDimensions } from '../utils/utils'

import ReactGA from 'react-ga4';
import { useSearchParams } from 'react-router-dom';
import { useDistributions } from '../utils/fetchData';
import LoadingSpinner from '../components/LoadingSpinner';
ReactGA.send({ hitType: "pageview", page: "/standings" });

export default function Standings(props) {
    const [searchParams, ] = useSearchParams()
    const [pgcEffect, setPGCEffect] = useState(false);
    const [dbydEffect, setDbyDEffect] = useState(false);
    const [playoffEffect, setPlayoffEffect] = useState(false);
    const [standingsToggle, setStandingsToggle] = useState(searchParams.get("tour") || "PGC")
    return (
        <>
            <div className="mb-4 pb-2 text-5xl font-yellowtail text-center sm:text-6xl md:text-7xl">{props.home ? 'Tour Standings' : standingsToggle === "PGC" ? 'PGC Tour Standings' : 'Dreams by Dutch Tour Standings'}</div>
            
                {props.home ?
                        <HomeStandings {...props} />
                        :
                        <>
                            <div className="mb-2 text-sm text-gray-400 text-center md:text-base">Tap on a tour player to view their stats and tournament history.</div>
                            <div className="my-4 mx-auto text-center">
                                <button onClick={() => { setStandingsToggle("PGC"); setPGCEffect(true); }} className={`${pgcEffect && "animate-toggleClick"} my-2 mx-3 py-1 px-6 rounded-lg text-lg md:text-xl sm:px-8 md:px-10 font-bold ${standingsToggle === "PGC" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setPGCEffect(false)}>PGC</button>
                                <button onClick={() => { setStandingsToggle("DbyD"); setDbyDEffect(true); }} className={`${dbydEffect && "animate-toggleClick"} my-2 mx-3 py-1.5 px-6 rounded-lg text-md md:text-lg sm:px-8 md:px-10 font-bold ${standingsToggle === "DbyD" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setDbyDEffect(false)}>Dreams by Dutch</button>
                                <button onClick={() => { setStandingsToggle("Playoff"); setPlayoffEffect(true); }} className={`${playoffEffect && "animate-toggleClick"} my-2 mx-3 py-1.5 px-6 rounded-lg text-md md:text-lg sm:px-8 md:px-10 font-bold ${standingsToggle === "Playoff" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setPlayoffEffect(false)}>Projected Playoffs</button>
                            </div>
                            {standingsToggle === "PGC" ?
                                    <PGCStandings {...props} />
                                :
                            standingsToggle === "DbyD" ?
                                    <DbyDStandings {...props} />
                                :
                                    <ProjectedPlayoffs {...props} />}
                        </>
                }
        </>
    )
}
function HomeStandings(props) {
    const standings = [props.data.standings.filter(obj => obj.TourID === '1').slice(0,15),props.data.standings.filter(obj => obj.TourID === '2').slice(0,15)]
    return (
        <div className='grid grid-flow-col grid-cols-2 text-center mx-auto'>
            <div className='border-r border-black pr-2'>
                <div className='text-lg font-bold mb-2'>PGC Tour</div>
                <div className='grid grid-flow-row grid-cols-8 text-center'>
                    <div className="font-varela place-self-center font-bold text-xs sm:text-sm">Rank</div>
                    <div className="font-varela place-self-center font-bold text-base sm:text-lg col-span-5">Name</div>
                    <div className="font-varela place-self-center font-bold text-xs col-span-2 xs:text-sm sm:text-base">Points</div>
                </div>
                {
                    standings[0].map(obj => {
                        return (
                            <div className='grid grid-flow-row grid-cols-8 text-center py-1 md:py-2 border-t border-dashed border-t-gray-400 whitespace-nowrap'>
                                <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm md:text-md lg:text-lg">{obj.ShowRk}</div>
                                <div className="font-varela place-self-center text-sm sm:text-base md:text-lg lg:text-xl col-span-5 [&>:nth-child(1)]:ml-1.5">
                                    {obj.TeamName}
                                    {obj.Tourney6Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.data.allTourneys[5].Logo} alt={props.data.allTourneys[5].Tourney + " Logo"} /> : <></>}
                                    {obj.Tourney10Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.data.allTourneys[9].Logo} alt={props.data.allTourneys[9].Tourney + " Logo"} /> : <></>}
                                    {obj.Tourney13Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.data.allTourneys[12].Logo} alt={props.data.allTourneys[12].Tourney + " Logo"} /> : <></>}
                                    {obj.Tourney16Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.data.allTourneys[15].Logo} alt={props.data.allTourneys[15].Tourney + " Logo"} /> : <></>}
                                </div>
                                <div className="font-varela place-self-center text-xs col-span-2 2xs:text-sm sm:text-base md:text-lg lg:text-xl">{obj.Points}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pl-2">
                <div className='text-lg font-bold mb-2'>DbyD Tour</div>
                <div className='grid grid-flow-row grid-cols-8 text-center'>
                    <div className="font-varela place-self-center font-bold text-xs sm:text-sm">Rank</div>
                    <div className="font-varela place-self-center font-bold text-base sm:text-lg col-span-5">Name</div>
                    <div className="font-varela place-self-center font-bold text-xs col-span-2 xs:text-sm sm:text-base">Points</div>
                </div>
                {
                    standings[1].map(obj => {
                        return (
                            <div className='grid grid-flow-row grid-cols-8 text-center py-1 md:py-2 border-t border-dashed border-t-gray-400 whitespace-nowrap'>
                                <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm md:text-md lg:text-lg">{obj.ShowRk}</div>
                                <div className="font-varela place-self-center text-sm sm:text-base md:text-lg lg:text-xl col-span-5 [&>:nth-child(1)]:ml-1.5">
                                    {obj.TeamName}
                                    {obj.Tourney6Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.data.allTourneys[5].Logo} alt={props.data.allTourneys[5].Tourney + " Logo"} /> : <></>}
                                    {obj.Tourney10Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.data.allTourneys[9].Logo} alt={props.data.allTourneys[9].Tourney + " Logo"} /> : <></>}
                                    {obj.Tourney13Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.data.allTourneys[12].Logo} alt={props.data.allTourneys[12].Tourney + " Logo"} /> : <></>}
                                    {obj.Tourney16Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.data.allTourneys[15].Logo} alt={props.data.allTourneys[15].Tourney + " Logo"} /> : <></>}
                                </div>
                                <div className="font-varela place-self-center text-xs col-span-2 2xs:text-sm sm:text-base md:text-lg lg:text-xl">{obj.Points}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
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
function ProjectedPlayoffs(props) {
    var { width } = useWindowDimensions()
    let distributions = useDistributions()
    distributions = distributions.distributions?.filter(obj => obj.key === 'PlayoffStart')[0]
    if (!distributions) return <LoadingSpinner />
    const playoffStandings = [
        props.data.standings.filter(obj => +(obj.ShowRk[0] === "T" ? obj.ShowRk.slice(1) : obj.ShowRk) <= 15),
        props.data.standings.filter(obj => +(obj.ShowRk[0] === "T" ? obj.ShowRk.slice(1) : obj.ShowRk) > 15 && +(obj.ShowRk[0] === "T" ? obj.ShowRk.slice(1) : obj.ShowRk) <= 30),
    ].map(obj => {
        return obj.map(a => {
            a.DistRk = [obj.filter((b) => +b.Points > +a.Points).length + 1, obj.filter((b) => +b.Points === +a.Points).length]
            return a
        })
    })
    return (
        <>
            <div className="my-4">
                <div className='flex'>
                    <div className='mx-auto my-3 text-6xl font-yellowtail text-yellow-700'>Gold Playoff</div>
                </div>
                <div className='grid grid-flow-row grid-cols-9 text-center'>
                    <div className="font-varela place-self-center font-bold text-xs sm:text-sm">Rank</div>
                    <div className="font-varela place-self-center font-bold text-base sm:text-lg  col-span-4">Name</div>
                    <div className="font-varela place-self-center font-bold text-xs xs:text-sm sm:text-base">Tour</div>
                    <div className="font-varela place-self-center font-bold text-xs col-span-2 xs:text-sm sm:text-base">{width < 400 ? 'Points' : 'Cup Points'}</div>
                    <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm">Starting Strokes</div>
                </div>
                {playoffStandings[0].map(obj => <PlayoffItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} distribution={distributions} />)}
            </div>
            <div className="mt-8 mb-4">
                <div className='flex'>
                    <div className='mx-auto my-3 text-6xl font-yellowtail text-zinc-700'>Silver Playoff</div>
                </div>
                <div className='grid grid-flow-row grid-cols-9 text-center'>
                    <div className="font-varela place-self-center font-bold text-xs sm:text-sm">Rank</div>
                    <div className="font-varela place-self-center font-bold text-base sm:text-lg  col-span-4">Name</div>
                    <div className="font-varela place-self-center font-bold text-xs xs:text-sm sm:text-base">Tour</div>
                    <div className="font-varela place-self-center font-bold text-xs col-span-2 xs:text-sm sm:text-base">{width < 400 ? 'Points' : 'Cup Points'}</div>
                    <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm">Starting Strokes</div>
                </div>
                {playoffStandings[1].map(obj => <PlayoffItem info={obj} key={obj.RawRk} tourneys={props.data.allTourneys} distribution={distributions} />)}
            </div>
        </>
    )
}


function StandingsItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        // <div className="" onClick={() => setShowInfo(!showInfo)}>
        <div className="[&:nth-child(17)]:border-t-2 [&:nth-child(17)]:border-yellow-600 [&:nth-child(32)]:border-t-2 [&:nth-child(32)]:border-zinc-600" onClick={() => setShowInfo(!showInfo)}>
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
function PlayoffItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div onClick={() => setShowInfo(!showInfo)}>
            <div className='grid grid-flow-row grid-cols-9 text-center py-1 md:py-2 border-t border-dashed border-t-gray-400'>
                <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm md:text-md lg:text-lg">{props.info.DistRk[0]}  {getRkChange(props.info.FullRkChange)}</div>
                <div className="font-varela place-self-center text-base sm:text-lg md:text:xl lg:text-2xl col-span-4 [&>:nth-child(1)]:ml-1.5">
                    {props.info.TeamName}
                    {props.info.Tourney6Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.tourneys[5].Logo} alt={props.tourneys[5].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney10Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.tourneys[9].Logo} alt={props.tourneys[9].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney13Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.tourneys[12].Logo} alt={props.tourneys[12].Tourney + " Logo"} /> : <></>}
                    {props.info.Tourney16Rk === '1' ? <img className="inline-block mx-0.5 w-7" src={props.tourneys[15].Logo} alt={props.tourneys[15].Tourney + " Logo"} /> : <></>}
                </div>
                <div className="font-varela place-self-center text-xs 2xs:text-xs sm:text-sm md:text-base lg:text-xl">{props.info.TourID === '1' ? 'PGC' : 'DbyD'}</div>
                <div className="font-varela place-self-center text-xs col-span-2 2xs:text-sm sm:text-base md:text-lg lg:text-xl">{props.info.Points}</div>
                <div className="font-varela place-self-center text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg">{calcDistribution(props.distribution,props.info.DistRk[0],props.info.DistRk[1])}</div>
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


function calcDistribution(distribution, place, tiedTotal) {
    if (tiedTotal === 1) {
        return distribution[place]
    }
    let total = 0
    for (let i=0; i < tiedTotal; i++) {
        total += +distribution[place+i]
    }
    return Math.round((total / tiedTotal)*10)/10
}