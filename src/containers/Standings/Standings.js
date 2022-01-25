import React from 'react';
import { Container } from 'react-bootstrap';
import StandingsComponent from '../../components/Standings/StandingsComponent';
import { useCurrentStandings } from '../../context/StandingsContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function Standings() {
    var standingsState = useCurrentStandings();

    return (
        <Container>
            {standingsState.isLoading ? <LoadingSpinner /> : <StandingsComponent info={standingsState.state} />}
        </Container>
    )
}

export default Standings
