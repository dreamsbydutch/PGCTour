import React from 'react'

import './Ticker.css'


function TickerContainer(props) {
    let data = props.data.pgcLeaderboard ? props.data.pgcLeaderboard : props.data

    return (
        <div className='fixed-top'>
            <div className="marquee">
                <div className="ticker-container">
                    PGC Tour Top 35 {
                        data.slice(0, 35).map(obj => props.data.pgcLeaderboard ? <LeaderboardTickerItem data={obj} key={obj.RawRk} /> : <StandingsTickerItem data={obj} key={obj.RawRk} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default TickerContainer


function StandingsTickerItem(item) {
    var output = ""
    output += item.data.ShowRk
    if ((item.data.ShowRk !== 11 || item.data.ShowRk !== "T11") && item.data.ShowRk.slice(-1) === '1') {
        output += "st"
    } else if ((item.data.ShowRk !== 12 || item.data.ShowRk !== "T12") && item.data.ShowRk.slice(-1) === '2') {
        output += "nd"
    } else if ((item.data.ShowRk !== 13 || item.data.ShowRk !== "T13") && item.data.ShowRk.slice(-1) === '3') {
        output += "rd"
    } else {
        output += "th"

    }
    return (
        <span className="ticker-team-rk">  -----  {output} <span className="ticker-team-name">{item.data.TeamName}</span> {item.data.Points} pts{item.data.Earnings > 0 ? ', ' + Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.data.Earnings) : ''}</span>
    )
}
function LeaderboardTickerItem(item) {
    var output = ""
    output += item.data.ShowRk
    if ((item.data.ShowRk !== 11 || item.data.ShowRk !== "T11") && item.data.ShowRk.slice(-1) === '1') {
        output += "st"
    } else if ((item.data.ShowRk !== 12 || item.data.ShowRk !== "T12") && item.data.ShowRk.slice(-1) === '2') {
        output += "nd"
    } else if ((item.data.ShowRk !== 13 || item.data.ShowRk !== "T13") && item.data.ShowRk.slice(-1) === '3') {
        output += "rd"
    } else {
        output += "th"

    }
    return (
        <span className="ticker-team-rk">  -----  {output} <span className="ticker-team-name">{item.data.Name}</span> {item.data.Score} - {item.Today} &#40;{item.Thru}&#41;</span>
    )
}
