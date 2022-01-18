import React from 'react';
import { Container } from 'react-bootstrap';
import useFetch from 'react-fetch-hook';
import { Outlet } from 'react-router-dom';
import LeaderboardItem from './LeaderboardItem';
import TournamentHeader from './TournamentHeader';

function Leaderboard(props) {

    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/3")
    if (isLoading) return "Loading....";
    if (error) return "Error!";

    const filter_data = props.limit > 0 ? data.filter(obj => Number(obj.RawRk) <= Number(props.limit)) : data;

    return (
        <>
            <Container>
                <TournamentHeader tourneyId="19" />
                {filter_data.map(obj => <LeaderboardItem info={obj} key={obj.id} />)}
            </Container>
            <Outlet />
        </>
    )
}

export default Leaderboard