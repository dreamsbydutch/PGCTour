import React from 'react'
import { useQuery } from 'react-query'
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { fetchCurrentTournamentInfo, fetchLeaderboardData, fetchNextTournamentInfo, fetchLeaderboardById, fetchPGALeaderboardData } from '../../utils/fetchData';

function Live(props) {
    var leaderboardQuery = useQuery('LiveLeaderboardData', fetchLeaderboardData)
    var PGAleaderboardQuery = useQuery('LivePGALeaderboardData', fetchPGALeaderboardData)
    var currentTourney = useQuery('LiveCurrentTourney', fetchCurrentTournamentInfo)
    var nextTourney = useQuery('LiveNextTourney', fetchNextTournamentInfo)
    var leaderboardData = null
    var PGAleaderboardData = null
    var tourney = null

    if (leaderboardQuery.isError || PGAleaderboardQuery.isError || currentTourney.isError || nextTourney.isError) { console.log(leaderboardQuery.error, PGAleaderboardQuery.error, currentTourney.error, nextTourney.error); return <div>Error</div> }
    if (leaderboardQuery.isLoading || PGAleaderboardQuery.isLoading || currentTourney.isLoading || nextTourney.isLoading) { return <LoadingSpinner /> }
    tourney = currentTourney.data ? currentTourney.data : nextTourney.data

    leaderboardData = fetchLeaderboardById(leaderboardQuery.data, tourney.id)
    PGAleaderboardData = fetchLeaderboardById(PGAleaderboardQuery.data, tourney.id)
    leaderboardData = props.limit ? leaderboardData.slice(0, props.limit) : leaderboardData
    PGAleaderboardData = props.limit ? PGAleaderboardData.slice(0, props.limit) : PGAleaderboardData

    return (
        <Leaderboard tourney={tourney} data={leaderboardData} PGAdata={PGAleaderboardData} live={true} link={props.link} />
    )
}

export default Live;