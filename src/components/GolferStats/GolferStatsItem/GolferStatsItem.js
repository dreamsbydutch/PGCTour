import React from 'react'
import './GolferStatsItem.css'

function GolferStatsItem(props) {
    return (
        <div className="rating-slot">
            <div className="ratings-rank">{props.data.Rank}</div>
            <div className="ratings-name">{props.data.GolferName}</div>
            <div className="ratings-pgcrank">{props.data.PGCRtg}</div>
        </div>
    )
}

export default GolferStatsItem
