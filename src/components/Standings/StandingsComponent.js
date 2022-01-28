import React from 'react'
import './StandingsComponent.css'
import StandingsItem from './Item/StandingsItem'

function StandingsComponent(props) {
    return (
        <>
            <div id="standings-header">PGC Tour Standings</div>
            <div className="standings-helpertext">Tap on a PGC player to view their stats and tournament history.</div>
            <div id="standings-container">
                <div className="standings-item-labels">
                    <div className="standings-item-labels-rank">Rank</div>
                    <div className="standings-item-labels-name">Name</div>
                    <div className="standings-item-labels-points">Cup Points</div>
                    <div className="standings-item-labels-earnings">Earnings</div>
                </div>
                {props.data.map(obj => <StandingsItem info={obj} key={obj.RawRk} />)}
            </div>
        </>
    )
}

export default StandingsComponent