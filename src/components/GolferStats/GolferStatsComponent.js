import React from 'react'
import './GolferStatsComponent.css'
import GolferStatsItem from './GolferStatsItem/GolferStatsItem';

function GolferStats(props) {
    console.log(props.data)

    return (
        <>
            <div className="rating-page-header">
                <div className="rating-header">PGC Golfer Ratings</div>
                <div className="rating-explanation">The PGC Rating uses 21 different PGA Tour statistics from the past three seasons to create a single comprehensive rating for each golfer on the PGA Tour.</div>
            </div>
            <div className="grid-container">
                <div className="labels">
                    <div className="rank-label">PGC Rk</div>
                    <div className="name-label">Golfer</div>
                    <div className="pgcrating-label">PGC Rating</div>
                </div>
                {props.data.map(obj => <GolferStatsItem data={obj} key={obj.Rank} />)}
            </div>
        </>
    )
}

export default GolferStats
