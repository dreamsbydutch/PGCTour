import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { fetchLeaderboardData, fetchLeaderboardById, fetchTournamentInfoById, fetchTournamentsInfo, fetchPGALeaderboardData } from '../../utils/fetchData';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorPage from '../ErrorPage/ErrorPage';

function Tournament(props) {
    let { tourneyId } = useParams();
    var leaderboardQuery = useQuery('TournamentLeaderboardData', fetchLeaderboardData)
    var PGAleaderboardQuery = useQuery('TournamentPGALeaderboardData', fetchPGALeaderboardData)
    var tourneys = useQuery('TournamentTourney', fetchTournamentsInfo)
    var leaderboardData = null
    var PGAleaderboardData = null
    var tourney = null

    if (leaderboardQuery.isError || PGAleaderboardQuery.isError || tourneys.isError) { console.log(leaderboardQuery.error, PGAleaderboardQuery.error, tourneys.error); return <ErrorPage /> }
    if (leaderboardQuery.isLoading || PGAleaderboardQuery.isLoading || tourneys.isLoading) { return <LoadingSpinner /> }
    tourney = fetchTournamentInfoById(tourneys, tourneyId)
    leaderboardData = fetchLeaderboardById(leaderboardQuery.data, tourneyId)
    PGAleaderboardData = fetchLeaderboardById(PGAleaderboardQuery.data, tourneyId)
    leaderboardData = props.limit ? leaderboardData.slice(0, props.limit) : leaderboardData
    PGAleaderboardData = props.limit ? PGAleaderboardData.slice(0, props.limit) : PGAleaderboardData

    return (
        < Leaderboard tourney={tourney} data={leaderboardData} PGAdata={PGAleaderboardData} live={false} />
    )
}

export default Tournament;