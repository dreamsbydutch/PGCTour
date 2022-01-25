import React from 'react'
import './Standings.css'
import { Container } from 'react-bootstrap'
import StandingsItem from './StandingsItem'

function Standings() {
    return (
        <Container>
            <div className="refresh-note">Tap on a PGC player to view their stats and tournament history.</div>
            <div className="w3-panel grid-container">
                <div className="grid-standings standings-grid">

                    <div id="standings-header">
                        <div className="standings-header-rank">Rank</div>
                        <div className="standings-header-name">Name</div>
                        <div className="standings-header-points">Cup Points</div>
                        <div className="standings-header-earnings">Earnings</div>
                    </div>

                    <div id="standings-list">
                        <StandingsItem />
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Standings