import React from 'react';
import { PGCLeaderboardItem } from './PGCLeaderboard';

export default function DbyDLeaderboard(props) {
    const leaderboardData = props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '2')
    var data = (props.limit && leaderboardData) ? leaderboardData.slice(0, props.limit) : leaderboardData
    return (
        <>
            <div className="grid grid-flow-row grid-cols-10 text-center max-w-xl mx-auto">
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Rank</div>
                <div className="col-span-4 text-base font-bold font-varela place-self-center">Name</div>
                <div className="col-span-2 text-sm font-bold font-varela place-self-center">Score</div>
                <div className="col-span-1 text-2xs font-varela place-self-center sm:text-xs">{props.live ? 'Today' : 'Pts'}</div>
                <div className="col-span-1 text-2xs font-varela place-self-center sm:text-xs">{props.live ? 'Thru' : '$$'}</div>
            </div>
            {data?.map(obj => <PGCLeaderboardItem {...{'info':obj,'key':obj.Name,'live':props.live,'pgaLeaderboard':props.tourney.pgaLeaderboard,'standings':props.standings?.filter(a => a.TeamName === obj.Name)[0]}} />)}
        </>
    )
}
