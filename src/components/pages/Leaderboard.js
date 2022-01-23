import React from 'react';
import { Container } from 'react-bootstrap';
import useFetch from 'react-fetch-hook';
import { Outlet } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import LeaderboardItem from './leaderboard/LeaderboardItem';
import TournamentHeader from './tournament/TournamentHeader';

function Leaderboard(props) {

    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1TYcMVDftohm9MqfgKDv2DHMTSbFE6JCfCzcYKB8IA1Y/1")
    if (isLoading) return <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>;
    if (error) return "Error!";

    const filter_data = props.limit > 0 ? data.filter(obj => Number(obj.RawRk) <= Number(props.limit)) : data;

    return (
        <>
            <Container>
                <TournamentHeader tourneyId="C" />
                {filter_data.map(obj => <LeaderboardItem info={obj} key={obj.RawRk} />)}
            </Container>
            <Outlet />
        </>
    )
}

export default Leaderboard