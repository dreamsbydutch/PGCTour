import React from 'react'
import { useQuery } from 'react-query'
import './Ticker.css'

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TickerItem from "./TickerItem";

import { fetchStandingsData } from "../../utils/fetchData";
import ErrorPage from '../../containers/ErrorPage/ErrorPage';


function TickerContainer() {
    var tickerQuery = useQuery('TickerStandingsData', fetchStandingsData)

    if (tickerQuery.isError) { console.log(tickerQuery.error); return <ErrorPage /> }
    if (tickerQuery.isLoading) { return <LoadingSpinner /> }

    return (
        <div className='fixed-top'>{<div className="marquee"><div className="ticker-container">PGC Tour Top 35 {tickerQuery.data.slice(0, 35).map(obj => <TickerItem info={obj} key={obj.RawRk} />)}</div></div>}
        </div>
    )
}

export default TickerContainer
