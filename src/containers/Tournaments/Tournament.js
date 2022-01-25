import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Leaderboard from '../../components/Leaderboard/Leaderboard';

function Tournament() {
    let { tourneyId } = useParams();

    return (
        <Container>
            <Leaderboard tourneyId={tourneyId} live={false} />
        </Container>
    )
}

export default Tournament
