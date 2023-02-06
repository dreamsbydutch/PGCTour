import React from 'react'

import './Ticker.css'
import { usePGCStandings } from '../../utils/fetchData';
import ErrorPage from '../../containers/ErrorPage';
import LoadingSpinner from '../LoadingSpinner';


function TickerContainer() {
    var tickerQuery = usePGCStandings()

    if (tickerQuery.isError) { return <ErrorPage /> }
    if (tickerQuery.isLoading) { return <LoadingSpinner /> }

    return (
        <div className='fixed-top'>{<div className="marquee"><div className="ticker-container">PGC Tour Top 35 {tickerQuery.standings.slice(0, 35).map(obj => <TickerItem info={obj} key={obj.RawRk} />)}</div></div>}
        </div>
    )
}

export default TickerContainer


function TickerItem(item) {
    var output = ""
    output += item.info.ShowRk
    if ((item.info.ShowRk !== 11 || item.info.ShowRk !== "T11") && item.info.ShowRk.slice(-1) === '1') {
        output += "st"
    } else if ((item.info.ShowRk !== 12 || item.info.ShowRk !== "T12") && item.info.ShowRk.slice(-1) === '2') {
        output += "nd"
    } else if ((item.info.ShowRk !== 13 || item.info.ShowRk !== "T13") && item.info.ShowRk.slice(-1) === '3') {
        output += "rd"
    } else {
        output += "th"

    }
    return (
        <span className="ticker-team-rk">-----  {output} <span className="ticker-team-name">{item.info.TeamName}</span> {item.info.Points} pts{item.info.Earnings > 0 ? ', '+Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.info.Earnings) : ' '} </span>
    )
}
