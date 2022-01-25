import React from 'react'
import { Container, Spinner } from 'react-bootstrap';
import LeaderboardHeader from '../../components/Leaderboard/Header/LeaderboardHeader';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { useCurrentTourney, useTourneyById } from '../../context/TournamentContext';
import './Live.css'

function Live() {
    const currentTourney = useCurrentTourney();
    var tourney = useTourneyById(currentTourney.state.id)

    return (
        <Container>
            {tourney.isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : <LeaderboardHeader tourney={tourney.state} />}
            <div id="tournament-leaderboard">
                <div className="tournament-leaderboard-slot-labels">
                    <div className="tournament-leaderboard-rank-label">Rank</div>
                    <div className="tournament-leaderboard-teamname-label">Name</div>
                    <div className="tournament-leaderboard-totaltopar-label">Score</div>
                    <div className="tournament-leaderboard-todaytopar-label">Today</div>
                    <div className="tournament-leaderboard-todaythru-label">Thru</div>
                </div>
                {currentTourney.isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : <Leaderboard tourneyId={currentTourney.state.id} />}
            </div>
        </Container>
    )
}

export default Live
