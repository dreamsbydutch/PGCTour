import React from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import LeaderboardHeader from '../../components/Leaderboard/Header/LeaderboardHeader';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { useTourneyById } from '../../context/TournamentContext';

function Tournament() {
    let { tourneyId } = useParams();
    var tourney = useTourneyById(tourneyId);

    return (
        <Container>
            {tourney.isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : <LeaderboardHeader tourney={tourney.state} />}
            <div id="tournament-leaderboard">
                <div className="tournament-leaderboard-slot-labels">
                    <div className="tournament-leaderboard-rank-label">Rank</div>
                    <div className="tournament-leaderboard-teamname-label">Name</div>
                    <div className="tournament-leaderboard-totaltopar-label">Score</div>
                    <div className="tournament-leaderboard-todaytopar-label">Points</div>
                    <div className="tournament-leaderboard-todaythru-label">Earnings</div>
                </div>
                {tourney.isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : <Leaderboard tourneyId={tourney.state.id} />}
            </div>
        </Container>
    )
}

export default Tournament
