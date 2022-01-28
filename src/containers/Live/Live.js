import React from 'react'
import './Live.css'
import { useQuery } from 'react-query'
import { Container } from 'react-bootstrap';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { fetchCurrentTournamentInfo, fetchLeaderboardData, fetchNextTournamentInfo, fetchLeaderboardById } from '../../utils/fetchData';

function Live(props) {
    var leaderboardQuery = useQuery('LiveLeaderboardData', fetchLeaderboardData)
    var currentTourney = useQuery('LiveCurrentTourney', fetchCurrentTournamentInfo)
    var nextTourney = useQuery('LiveNextTourney', fetchNextTournamentInfo)
    var leaderboardData = null
    var tourney = null

    if (leaderboardQuery.isError || currentTourney.isError || nextTourney.isError) { console.log(leaderboardQuery.error, currentTourney.error, nextTourney.error); return <div>Error</div> }
    if (leaderboardQuery.isLoading || currentTourney.isLoading || nextTourney.isLoading) { return <LoadingSpinner /> }
    if (currentTourney.data.id === "") { tourney = nextTourney.data } else { tourney = currentTourney.data }
    leaderboardData = fetchLeaderboardById(leaderboardQuery, tourney.id)
    leaderboardData = props.limit ? leaderboardData.slice(0, props.limit) : leaderboardData

    return (
        <Container>
            {<Leaderboard tourney={tourney} data={leaderboardData} live={true} />}
        </Container>
    )
}

export default Live;