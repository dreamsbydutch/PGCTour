import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { useTourneyById } from '../../context/TournamentContext';

function Tournament() {
    let { tourneyId } = useParams();
    var tourney = useTourneyById(tourneyId);

    return (
        tourney.isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : <Leaderboard tourneyId={tourney.state.id} />
    )
}

export default Tournament
