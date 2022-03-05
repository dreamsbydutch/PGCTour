import React from 'react'
import './LeaderboardItemInfo.css'

function LeaderboardItemInfo(props) {
    var style = { borderBottom: "1px dashed #bbb" }

    return (
        <div className="leaderboarditem-info-container">
            <div className="leaderboarditem-info-container-row leaderboarditem-info-labelrow">
                <div className="leaderboarditem-info-roundone-label">Rd 1</div>
                <div className="leaderboarditem-info-roundtwo-label">Rd 2</div>
                <div className="leaderboarditem-info-roundthree-label">Rd 3</div>
                <div className="leaderboarditem-info-roundfour-label">Rd 4</div>
                <div className="leaderboarditem-info-total-label">Total</div>
            </div>
            <div className="leaderboarditem-info-container-row leaderboarditem-info-roundrow">
                <div className="leaderboarditem-info-roundone">{props.info.R1Score}</div>
                <div className="leaderboarditem-info-roundtwo">{props.info.R2Score}</div>
                <div className="leaderboarditem-info-roundthree">{props.info.R3Score}</div>
                <div className="leaderboarditem-info-roundfour">{props.info.R4Score}</div>
                <div className="leaderboarditem-info-total">{props.info.TotalScore}</div>
            </div>
            <div className="leaderboarditem-info-container-row leaderboarditem-info-golferrow" style={props.info.R2Score !== "--" && props.info.R4Score === "--" ? style : {}}>
                <div className="leaderboarditem-info-golferone">{props.info.Golfer1Name}<br />({props.info.Golfer1Total}{(props.info.Golfer1Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer1Score : ""})</div>
                <div className="leaderboarditem-info-golfertwo">{props.info.Golfer2Name}<br />({props.info.Golfer2Total}{(props.info.Golfer2Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer2Score : ""})</div>
                <div className="leaderboarditem-info-golferthree">{props.info.Golfer3Name}<br />({props.info.Golfer3Total}{(props.info.Golfer3Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer3Score : ""})</div>
                <div className="leaderboarditem-info-golferfour">{props.info.Golfer4Name}<br />({props.info.Golfer4Total}{(props.info.Golfer4Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer4Score : ""})</div>
                <div className="leaderboarditem-info-golferfive">{props.info.Golfer5Name}<br />({props.info.Golfer5Total}{(props.info.Golfer5Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer5Score : ""})</div>
            </div>
            <div className="leaderboarditem-info-container-row leaderboarditem-info-golferrow">
                <div className="leaderboarditem-info-golfersix">{props.info.Golfer6Name}<br />({props.info.Golfer6Total}{(props.info.Golfer6Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer6Score : ""})</div>
                <div className="leaderboarditem-info-golferseven">{props.info.Golfer7Name}<br />({props.info.Golfer7Total}{(props.info.Golfer7Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer7Score : ""})</div>
                <div className="leaderboarditem-info-golfereight">{props.info.Golfer8Name}<br />({props.info.Golfer8Total}{(props.info.Golfer8Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer8Score : ""})</div>
                <div className="leaderboarditem-info-golfernine">{props.info.Golfer9Name}<br />({props.info.Golfer9Total}{(props.info.Golfer9Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer9Score : ""})</div>
                <div className="leaderboarditem-info-golferten">{props.info.Golfer10Name}<br />({props.info.Golfer10Total}{(props.info.Golfer10Score && (props.info.Golfer1Total !== "CUT"&&props.info.Golfer1Total !== "WD"&&props.info.Golfer1Total !== "DQ")) ? " / " + props.info.Golfer10Score : ""})</div>
            </div>
        </div>
    )
}

export default LeaderboardItemInfo
