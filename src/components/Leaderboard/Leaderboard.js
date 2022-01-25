import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';

import './Leaderboard.css'
import LeaderboardItem from './Item/LeaderboardItem';
import LeaderboardHeader from './Header/LeaderboardHeader';
import { useTourneyById } from '../../context/TournamentContext';

function Leaderboard(props) {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    var tourney = useTourneyById(props.tourneyId)

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
            {tourney.isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : <LeaderboardHeader tourney={tourney.state} />}
            <div id="tournament-leaderboard">
                <div className="tournament-leaderboard-slot-labels">
                    <div className="tournament-leaderboard-rank-label">Rank</div>
                    <div className="tournament-leaderboard-teamname-label">Name</div>
                    <div className="tournament-leaderboard-totaltopar-label">Score</div>
                    <div className="tournament-leaderboard-cuppoints-label">Cup Points</div>
                    <div className="tournament-leaderboard-earnings-label">Earnings</div>
                </div>
                {isLoading ? <div className='loading-spinner'><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div> : filter_data.map(obj => <LeaderboardItem info={obj} key={obj.RawRk} />)}
            </div>
        </Container>
    )
}

export default Leaderboard