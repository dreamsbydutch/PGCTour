import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CountdownLogic from '../components/CountdownLogic'
import PGALeaderboard from '../components/PGALeaderboard';
import PGCLeaderboard from '../components/PGCLeaderboard';
import ErrorPage from './ErrorPage';
// import { useWindowDimensions } from '../utils/utils'

export default function Leaderboard(props) {
    let { tourneyId } = useParams();

    if (tourneyId) {
        return (
            <TourneyLeaderboard
                tourney={props.data.allTourneys.filter(obj => obj.tourneyID === tourneyId)[0]}
                standings={props.data.standings}
                live={false}
                limit={props.limit ?? null}
                home={props.home ?? null}
            />
        )
    } else if (props.data.currentTourney) {
        return (
            <TourneyLeaderboard
                tourney={props.data.currentTourney}
                standings={props.data.standings}
                live={true}
                limit={props.limit ?? null}
                home={props.home ?? null}
            />
        )
    } else if (props.data.nextTourney) {
        return (
            <>
                <LeaderboardHeader tourney={props.tourney} />
                <CountdownLogic tourney={props.tourney} />
            </>
        )
    } else if (props.data.prevTourney) {
        return (
            <TourneyLeaderboard
                tourney={props.data.prevTourney}
                standings={props.data.standings}
                live={false}
                limit={props.limit ?? null}
                home={props.home ?? null}
            />
        )
    } else {
        return (
            <ErrorPage />
        )
    }
}


function TourneyLeaderboard(props) {
    const [pgcEffect, setPGCEffect] = useState(false);
    const [pgaEffect, setPGAEffect] = useState(false);
    const [leaderboardToggle, setLeaderboardToggle] = useState("PGC")
    return (
        <>
            <LeaderboardHeader {...props} />
            <div className="mt-8">
                {props.home ?
                    <></> :
                    <div className="my-4 mx-auto text-center">
                        <button onClick={() => {setLeaderboardToggle("PGC");setPGCEffect(true);}} className={`${pgcEffect && "animate-toggleClick"} my-2 mx-3 py-1 px-6 rounded-lg text-lg font-bold ${leaderboardToggle === "PGC" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setPGCEffect(false)}>PGC</button>
                        <button onClick={() => {setLeaderboardToggle("PGA");setPGAEffect(true);}} className={`${pgaEffect && "animate-toggleClick"} my-2 mx-3 py-1 px-6 rounded-lg text-lg font-bold ${leaderboardToggle === "PGA" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setPGAEffect(false)}>PGA</button>
                    </div>
                }
                {leaderboardToggle === "PGC" ?
                    <>
                        <PGCLeaderboard {...props} />
                    </>
                    :
                    <>
                        <PGALeaderboard {...props} />
                    </>
                }
            </div>
        </>
    )
}



function LeaderboardHeader(props) {
    // var show = props.home ? false : true
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
