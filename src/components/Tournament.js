import React from 'react';
import { Container } from 'react-bootstrap';
import useFetch from 'react-fetch-hook';
import { useParams } from 'react-router-dom';
import LeaderboardItem from './LeaderboardItem';

function Tournament() {
    let { id } = useParams();
    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/3")
    if (isLoading) return "Loading....";
    if (error) return "Error!";

    const new_data = data.filter(obj => obj.Tournament === Number(id))

    return (
        <Container>
            {new_data.map(obj => <LeaderboardItem info={obj} key={obj.id} />)}
        </Container>
    )
}

export default Tournament