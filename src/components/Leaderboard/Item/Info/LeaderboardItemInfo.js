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
            <div className="tournament-leaderboard-golferone">{props.info.Golfer1Name}<br />({props.info.Golfer1Total}{props.info.Golfer1Score ? "/" + props.info.Golfer1Score : ""})</div>
            <div className="tournament-leaderboard-golfertwo">{props.info.Golfer2Name}<br />({props.info.Golfer2Total}{props.info.Golfer2Score ? "/" + props.info.Golfer2Score : ""})</div>
            <div className="tournament-leaderboard-golferthree">{props.info.Golfer3Name}<br />({props.info.Golfer3Total}{props.info.Golfer3Score ? "/" + props.info.Golfer3Score : ""})</div>
            <div className="tournament-leaderboard-golferfour">{props.info.Golfer4Name}<br />({props.info.Golfer4Total}{props.info.Golfer4Score ? "/" + props.info.Golfer4Score : ""})</div>
            <div className="tournament-leaderboard-golferfive">{props.info.Golfer5Name}<br />({props.info.Golfer5Total}{props.info.Golfer5Score ? "/" + props.info.Golfer5Score : ""})</div>
            <div className="tournament-leaderboard-golfersix">{props.info.Golfer6Name}<br />({props.info.Golfer6Total}{props.info.Golfer6Score ? "/" + props.info.Golfer6Score : ""})</div>
            <div className="tournament-leaderboard-golferseven">{props.info.Golfer7Name}<br />({props.info.Golfer7Total}{props.info.Golfer7Score ? "/" + props.info.Golfer7Score : ""})</div>
            <div className="tournament-leaderboard-golfereight">{props.info.Golfer8Name}<br />({props.info.Golfer8Total}{props.info.Golfer8Score ? "/" + props.info.Golfer8Score : ""})</div>
            <div className="tournament-leaderboard-golfernine">{props.info.Golfer9Name}<br />({props.info.Golfer9Total}{props.info.Golfer9Score ? "/" + props.info.Golfer9Score : ""})</div>
            <div className="tournament-leaderboard-golferten">{props.info.Golfer10Name}<br />({props.info.Golfer10Total}{props.info.Golfer10Score ? "/" + props.info.Golfer10Score : ""})</div>
        </div>
    )
}

export default LeaderboardItemInfo
