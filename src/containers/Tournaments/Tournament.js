import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { fetchLeaderboardData, fetchLeaderboardById, fetchTournamentInfoById, fetchTournamentsInfo } from '../../utils/fetchData';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorPage from '../ErrorPage/ErrorPage';

function Tournament(props) {
    let { tourneyId } = useParams();
    var leaderboardQuery = useQuery('TournamentLeaderboardData', fetchLeaderboardData)
    var tourneys = useQuery('TournamentTourney', fetchTournamentsInfo)
    var leaderboardData = null
    var tourney = null

    if (leaderboardQuery.isError || tourneys.isError) { console.log(leaderboardQuery.error, tourneys.error); return <ErrorPage /> }
    if (leaderboardQuery.isLoading || tourneys.isLoading) { return <LoadingSpinner /> }
    tourney = fetchTournamentInfoById(tourneys, tourneyId)
    leaderboardData = fetchLeaderboardById(leaderboardQuery, tourneyId)
    leaderboardData = props.limit ? leaderboardData.slice(0, props.limit) : leaderboardData

    return (
        < Leaderboard tourney={tourney} data={leaderboardData} live={false} />
    )
}

export default Tournament;