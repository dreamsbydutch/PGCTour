import React from 'react'
import { Container } from 'react-bootstrap'
import './StandingsComponent.css'
import StandingsItem from './Item/StandingsItem'

function StandingsComponent(props) {
    return (
        <Container>
            <div className="refresh-note">Tap on a PGC player to view their stats and tournament history.</div>
            <div className="standings-grid-container">
                <div className="grid-standings standings-grid">

                    <div id="standings-header">
                        <div className="standings-header-rank">Rank</div>
                        <div className="standings-header-name">Name</div>
                        <div className="standings-header-points">Cup Points</div>
                        <div className="standings-header-earnings">Earnings</div>
                    </div>
                    <div id="standings-list">
                        {props.data.map(obj => <StandingsItem info={obj} key={obj.RawRk} />)}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default StandingsComponent