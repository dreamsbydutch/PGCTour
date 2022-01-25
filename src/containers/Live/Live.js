import React from 'react'
import { Spinner } from 'react-bootstrap';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { useCurrentTourney } from '../../context/TournamentContext'

function Live() {
    const currentTourney = useCurrentTourney();

    return (
        currentTourney.isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : <Leaderboard tourneyId={currentTourney.state.id} />
    )
}

export default Live
