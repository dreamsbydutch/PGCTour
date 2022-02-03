import React from 'react'
import './GolferStatsComponent.css'
import GolferStatsItem from './Item/GolferStatsItem';

function GolferStats(props) {
    return (
        <>
            <div className="golferstats-header">PGC Golfer Ratings</div>
            <div className="golferstats-explanation">The PGC Rating uses 21 different PGA Tour statistics from the past three seasons to create a single comprehensive rating for each golfer on the PGA Tour.</div>
            <div className="golferstats-container">
                <div className="golferstats-labels">
                    <div className="golferstats-rank-label">PGC Rk</div>
                    <div className="golferstats-name-label">Golfer</div>
                    <div className="golferstats-rating-label">PGC Rating</div>
                </div>
                {props.data.map(obj => <GolferStatsItem data={obj} key={obj.Rank} />)}
            </div>
        </>
    )
}

export default GolferStats
