import React from 'react'

function TickerItem(item) {
    var output = ""
    output += item.info.ShowRk
    if ((item.info.ShowRk !== '11' || item.info.ShowRk !== "T11") && item.info.ShowRk.slice(-1) === '1') {
        output += "st"
    } else if ((item.info.ShowRk !== '12' || item.info.ShowRk !== "T12") && item.info.ShowRk.slice(-1) === '2') {
        output += "nd"
    } else if ((item.info.ShowRk !== '13' || item.info.ShowRk !== "T13") && item.info.ShowRk.slice(-1) === '3') {
        output += "rd"
    } else {
        output += "th"

    }
    return (
        <span className="ticker-team-rk">-----  {output} <span className="ticker-team-name">{item.info.TeamName}</span> {item.info.Points} pts, {item.info.Earnings} </span>
    )
}

export default TickerItem
