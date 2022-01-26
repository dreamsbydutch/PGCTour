import React, { useState } from 'react'
import './StandingsItem.css'
import StandingsItemInfo from './Info/StandingsItemInfo'

function StandingsItem(props) {
    const [showInfo, setShowInfo] = useState(false)
    const onClick = () => setShowInfo(!showInfo)
    var style = {}
    var arrow = ''

    if (+(props.info.RkChange) > 0) {
        arrow = 'up'
        style = {
            color: 'green'
        }
    } else if (+(props.info.RkChange) < 0) {
        arrow = 'down'
        style = {
            color: 'red'
        }
    }

    return (
        <div className="standings-slot" onClick={onClick}>
            <div className="standings-rank">{props.info.ShowRk}</div>
            <div className="standings-rankchange" style={style}>
                {arrow === 'up' ?
                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i> :
                    arrow === 'down' ?
                        <i className="fa fa-long-arrow-down" aria-hidden="true"></i> :
                        <i className="fa fa-arrows-h" aria-hidden="true"></i>}
                {Math.abs(props.info.RkChange) === 0 ?
                    "" : Math.abs(props.info.RkChange)}
            </div>
            <div className="standings-teamname">{props.info.TeamName}</div>
            <div className="standings-points">{props.info.Points}</div>
            <div className="standings-earnings">{props.info.Earnings}</div>
            {showInfo ? <StandingsItemInfo info={props.info} /> : <></>}
        </div>
    )
}

export default StandingsItem
