import React from 'react';
import { Container } from 'react-bootstrap';
import useFetch from 'react-fetch-hook';
import { Outlet } from 'react-router-dom';
import LeaderboardItem from './LeaderboardItem';

function Leaderboard() {

    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/3")
    if (isLoading) return "Loading....";
    if (error) return "Error!";

    return (
        <>
            <Container>
                {data.map(obj => <LeaderboardItem info={obj} key={obj.id} />)}
            </Container>
            <Outlet />
        </>
    )
}

export default Leaderboard