import React from 'react';
import { useQuery } from 'react-query'
import StandingsComponent from '../../components/Standings/StandingsComponent';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { fetchStandingsData, fetchTournamentsInfo } from '../../utils/fetchData';
import ErrorPage from '../ErrorPage/ErrorPage';

function Standings(props) {
    var standingsQuery = useQuery('StandingsData', fetchStandingsData)
    var tourneys = useQuery('TournamentTourney', fetchTournamentsInfo)
    var standingsData = null

    if (standingsQuery.isError || tourneys.isError) { console.log(standingsQuery.error);console.log(tourneys.error); return <ErrorPage /> }
    if (standingsQuery.isLoading || tourneys.isLoading) { return <LoadingSpinner /> }
    standingsData = standingsQuery.data
    standingsData = props.limit ? standingsData.slice(0, props.limit) : standingsData

    return (
        <StandingsComponent data={standingsData} tourneys={tourneys} />
    )
}

export default Standings
