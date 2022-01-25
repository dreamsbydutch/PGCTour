import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import GolferStatsComponent from '../../components/GolferStats/GolferStatsComponent'

function GolferStats() {
    const [isLoading, setIsLoading] = useState(true);
    const [statsData, setStatsData] = useState();

    useEffect(() => {
        axios
            .get('https://opensheet.elk.sh/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/7')
            .then((res) => {
                setStatsData(res.data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) return <LoadingSpinner />;

    return (
        <GolferStatsComponent info={statsData} />
    )
}

export default GolferStats
