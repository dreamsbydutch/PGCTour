import React from 'react'
import './StandingsComponent.css'
import StandingsItem from './Item/StandingsItem'

function StandingsComponent(props) {
    return (
        <>
            <div id="standings-header">PGC Tour Standings</div>
            <div className="standings-helpertext">Tap on a PGC player to view their stats and tournament history.</div>
            <div id="standings-container">
                <div className="standings-labels">
                    <div className="standings-labels-rank">Rank</div>
                    <div className="standings-labels-name">Name</div>
                    <div className="standings-labels-points">Cup Points</div>
                    <div className="standings-labels-earnings">Earnings</div>
                </div>
                {props.data.map(obj => <StandingsItem info={obj} key={obj.RawRk} tourneys={props.tourneys} />)}
            </div>
        </>
    )
}

export default StandingsComponent