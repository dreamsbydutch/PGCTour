import React from 'react';
import { Container } from 'react-bootstrap';
import useFetch from 'react-fetch-hook';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import LeaderboardItem from './leaderboard/LeaderboardItem';
import TournamentHeader from './tournament/TournamentHeader';

function Tournament(props) {
    let { id } = useParams();
    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/3")
    if (isLoading) return <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>;
    if (error) return "Error!";

    const new_data = data.filter(obj => Number(obj.Tournament) === Number(id))
    const filter_data = props.limit > 0 ? new_data.filter(obj => Number(obj.RawRk) <= Number(props.limit)) : new_data;

    return (
        <Container>
            <TournamentHeader tourneyId={id} />
            {filter_data.map(obj => <LeaderboardItem info={obj} key={obj.id} />)}
        </Container>
    )
}

export default Tournament