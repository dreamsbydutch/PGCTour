import React from 'react'
import { useCurrentStandings } from '../../context/StandingsContext';
import { useCurrentTourney } from '../../context/TournamentContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TickerItem from "./TickerItem";
import './Ticker.css'

const GetTickerData = () => {
    var current = useCurrentTourney();
    var standings = useCurrentStandings();

    if (current.isLoading || standings.isLoading) { return [] }

    if (Object.keys(current.state).length === 0) {
        var info = standings.state.data.slice(0, 15)
    } else {
        console.log(false)
    }

    return info
}

function TickerContainer() {
    var data = GetTickerData()
    console.log(data)
    return (
        <div className='ticker-container fixed-top'>{data === [] ? <LoadingSpinner /> : <div className="marquee"><div>Top 15 Standings {data.map(obj => <TickerItem info={obj} key={obj.RawRk} />)}</div></div>}
        </div>
    )
}

export default TickerContainer
