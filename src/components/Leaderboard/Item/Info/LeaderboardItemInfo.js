import React from 'react'
import './LeaderboardItemInfo.css'

function LeaderboardItemInfo(props) {
    return (
        <div className="tournament-leaderboard-slot-extras">
            <div className="tournament-leaderboard-roundone-label">Rd 1</div>
            <div className="tournament-leaderboard-roundtwo-label">Rd 2</div>
            <div className="tournament-leaderboard-roundthree-label">Rd 3</div>
            <div className="tournament-leaderboard-roundfour-label">Rd 4</div>
            <div className="tournament-leaderboard-total-label">Total</div>
            <div className="tournament-leaderboard-roundone">{props.info.R1Score}</div>
            <div className="tournament-leaderboard-roundtwo">{props.info.R2Score}</div>
            <div className="tournament-leaderboard-roundthree">{props.info.R3Score}</div>
            <div className="tournament-leaderboard-roundfour">{props.info.R4Score}</div>
            <div className="tournament-leaderboard-total">{props.info.TotalScore}</div>
            <div className="tournament-leaderboard-golferone">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golfertwo">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golferthree">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golferfour">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golferfive">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golfersix">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golferseven">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golfereight">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golfernine">{props.info.Golfer10Name}</div>
            <div className="tournament-leaderboard-golferten">{props.info.Golfer10Name}</div>
        </div>
    )
}

export default LeaderboardItemInfo
