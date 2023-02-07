import React, { useState } from 'react'
// import React, { useState, useEffect } from 'react'
// import { QueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
// import { Link, useParams } from 'react-router-dom'
import CountdownLogic from '../components/CountdownLogic'
// import { useInterval } from '../utils/countdown'
// import { useWindowDimensions } from '../utils/utils'

export default function Leaderboard(props) {
    let { tourneyId } = useParams();
    var tourney = null

    if (tourneyId) {
        tourney = props.data.allTourneys.filter(obj => obj.tourneyID === tourneyId)[0]
    } else if (props.data.currentTourney) {
        tourney = props.data.currentTourney
    } else if (props.data.prevTourney) {
        tourney = props.data.prevTourney
    } else if (props.data.nextTourney) {
        tourney = props.data.nextTourney
    }

    return (
        <TourneyLeaderboard tourney={tourney} standings={props.data.standings} />
    )
}


function TourneyLeaderboard(props) {
    const [leaderboardToggle, setLeaderboardToggle] = useState("PGC")
    // const [pgcData, setPgcData] = useState([]);
    // const [pgaData, setPgaData] = useState([]);

    console.log(props.tourney)

    // useEffect(() => {
    //     setPgcData(props.tourney)
    //     setPgaData(props.PGAdata)
    // }, [props]);
    // useInterval(() => {
    //     if (props.live === true) {
    //         QueryClient.invalidateQueries({ queryKey: ['pgaLeaderboard'] })
    //         QueryClient.invalidateQueries({ queryKey: ['pgcLeaderboard'] })
    //     }
    // }, 30000);

    return (
        <>
            {(new Date() < new Date(props.tourney.StartDate)) ?
                <>
                    <LeaderboardHeader tourney={props.tourney} />
                    <CountdownLogic tourney={props.tourney} />
                </>
                :
                <>
                    <LeaderboardHeader tourney={props.tourney} link={props.link} />
                    <div id="leaderboard-container">
                        {props.link === false ?
                            <></> :
                            <div className="leaderboard-header-togglebuttons">
                                <button onClick={() => setLeaderboardToggle("PGC")} className={`leaderboard-header-PGCtogglebutton ${leaderboardToggle === "PGC" ? "leaderboard-header-activebutton" : "leaderboard-header-inactivebutton"}`}>PGC</button>
                                <button onClick={() => setLeaderboardToggle("PGA")} className={`leaderboard-header-PGAtogglebutton ${leaderboardToggle === "PGA" ? "leaderboard-header-activebutton" : "leaderboard-header-inactivebutton"}`}>PGA</button>
                            </div>
                        }
                        {leaderboardToggle === "PGC" ?
                            <>
                                <div className="leaderboard-item-labels">
                                    <div className="leaderboard-item-labels-rank">Rank</div>
                                    <div className="leaderboard-item-labels-teamname">Name</div>
                                    <div className="leaderboard-item-labels-totaltopar">Score</div>
                                    <div className="leaderboard-item-labels-todaytopar">{props.live ? 'Today' : 'Pts'}</div>
                                    <div className="leaderboard-item-labels-todaythru">{props.live ? 'Thru' : '$$'}</div>
                                </div>
                                {/* {pgcData.map(obj => <LeaderboardItem data={obj} key={obj.Name + obj.ScoreToPar} live={props.live} PGCstdg={props.live?props.PGCstdg.filter(team => team.TeamName===obj.Name)[0]:null}/>)} */}
                            </>
                            :
                            <></>
                            //  <PGALeaderboard data={pgaData} live={props.live} />
                        }
                    </div>
                </>}
        </>
    )
}



function LeaderboardHeader(props) {
    // var show = props.link === false ? false : true
    return (
        <div id="leaderboard-header">
            <div className="grid grid-flow-row grid-cols-10 border-b-2 border-gray-800">
                <div className="text-center font-varela place-self-center py-2 px-1 col-span-3 row-span-4"><img alt="Tournament logo" src={props.tourney.Logo}></img></div>
                <div className="col-span-5 row-span-2 font-varela text-center place-self-center font-bold text-xl">{props.tourney.Tourney}</div>

                <div className="row-span-1 col-span-2 font-varela text-xs text-center place-self-center"></div>
                <div className="row-span-1 col-span-2 font-varela text-xs text-center place-self-center">{props.tourney.Dates}</div>
                <div className="row-span-1 col-span-2 font-varela text-2xs text-center place-self-center">{props.tourney.Location}</div>
                <div className="row-span-1 col-span-3 font-varela text-2xs text-center place-self-center">{props.tourney.Course}</div>
                <div className="row-span-1 col-span-2 font-varela text-2xs text-center place-self-center">{props.tourney.ShowPar}</div>
                <div className="mt-2 row-span-1 col-span-3 font-varela text-2xs text-center place-self-center">Tournament Purse:</div>
                <div className="mt-2 row-span-1 col-span-2 font-varela text-2xs text-center place-self-center">{props.tourney.PointsPurse} points</div>
                <div className="mt-2 row-span-1 col-span-2 font-varela text-2xs text-center place-self-center">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.tourney.MoneyPurse)}</div>
            </div>
        </div >
    )
};
