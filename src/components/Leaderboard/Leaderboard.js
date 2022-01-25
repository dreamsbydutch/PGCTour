import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';

import './Leaderboard.css'
import LeaderboardItem from './Item/LeaderboardItem';

function Leaderboard(props) {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://opensheet.elk.sh/1TYcMVDftohm9MqfgKDv2DHMTSbFE6JCfCzcYKB8IA1Y/' + props.tourneyId)
            .then((res) => {
                setLeaderboardData(res.data)
                setIsLoading(false)
            })
    }, [props.tourneyId])


    const filter_data = props.limit > 0 ? leaderboardData.filter(obj => Number(obj.RawRk) <= Number(props.limit)) : leaderboardData;

    return (
        <Container>
            {isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : filter_data.map(obj => <LeaderboardItem info={obj} key={obj.RawRk} />)}
        </Container>
    )
}

export default Leaderboard