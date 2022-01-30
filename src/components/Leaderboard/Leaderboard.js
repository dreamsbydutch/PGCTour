import React from 'react';
import './Leaderboard.css'
import LeaderboardItem from './Item/LeaderboardItem';
import LeaderboardHeader from './Header/LeaderboardHeader';
import CountdownLogic from '../../containers/Countdown/CountdownLogic';

function Leaderboard(props) {
    console.log(props.tourney)
    return (

        <>
            {(new Date() < new Date(props.tourney.StartDate)) ?
                <>
                    <LeaderboardHeader tourney={props.tourney} />
                    <CountdownLogic tourney={props.tourney} />
                </>
                :
                <>
                    <LeaderboardHeader tourney={props.tourney} />
                    <div id="leaderboard-container">
                        <div className="leaderboard-item-labels">
                            <div className="leaderboard-item-labels-rank">Rank</div>
                            <div className="leaderboard-item-labels-teamname">Name</div>
                            <div className="leaderboard-item-labels-totaltopar">Score</div>
                            <div className="leaderboard-item-labels-todaytopar">{props.live ? 'Today' : 'Pts'}</div>
                            <div className="leaderboard-item-labels-todaythru">{props.live ? 'Thru' : '$$'}</div>
                        </div>
                        {props.data.map(obj => <LeaderboardItem data={obj} key={obj.RawRk} live={props.live} />)}
                    </div>
                </>}
        </>
    )
}

export default Leaderboard
