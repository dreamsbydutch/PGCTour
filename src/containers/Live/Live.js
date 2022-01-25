import React from 'react'
import { Container } from 'react-bootstrap';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { useCurrentTourney } from '../../context/TournamentContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import './Live.css'

function Live() {
    const currentTourney = useCurrentTourney();

    return (
        <Container>
            {currentTourney.isLoading ? <LoadingSpinner /> : <Leaderboard tourneyId={currentTourney.state.id} live={true} />}
        </Container>
    )
}

export default Live
