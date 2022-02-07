import React from 'react'
import { useQuery } from 'react-query';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import GolferStatsComponent from '../../components/GolferStats/GolferStatsComponent'
import { fetchGolferStatsData } from '../../utils/fetchData';

function GolferStats() {
    var golferStats = useQuery('GolferStatsData', fetchGolferStatsData)
    console.log(golferStats.data)

    if (golferStats.isLoading) return <LoadingSpinner />;

    return (
        <GolferStatsComponent data={golferStats.data} />
    )
}

export default GolferStats
