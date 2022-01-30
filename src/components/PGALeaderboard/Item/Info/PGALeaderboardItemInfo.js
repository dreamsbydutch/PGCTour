import React from 'react'
import './PGALeaderboardItemInfo.css'

function PGALeaderboardItemInfo(props) {
    return (
        <div className="pga-leaderboarditem-info-container">
            <div className="pga-leaderboarditem-info-roundone-label">Rd 1</div>
            <div className="pga-leaderboarditem-info-roundtwo-label">Rd 2</div>
            <div className="pga-leaderboarditem-info-roundthree-label">Rd 3</div>
            <div className="pga-leaderboarditem-info-roundfour-label">Rd 4</div>
            <div className="pga-leaderboarditem-info-total-label">Total</div>
            <div className="pga-leaderboarditem-info-roundone">{props.info.R1}</div>
            <div className="pga-leaderboarditem-info-roundtwo">{props.info.R2}</div>
            <div className="pga-leaderboarditem-info-roundthree">{props.info.R3}</div>
            <div className="pga-leaderboarditem-info-roundfour">{props.info.R4}</div>
            <div className="pga-leaderboarditem-info-total">{props.info.Tot}</div></div>
    )
}

export default PGALeaderboardItemInfo
