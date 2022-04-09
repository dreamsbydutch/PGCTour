import React, { useState } from 'react'
import './StandingsItem.css'
import StandingsItemInfo from './Info/StandingsItemInfo'
import { getRkChange } from '../../../utils/utils'

function StandingsItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className="standings-item-container" onClick={() => setShowInfo(!showInfo)}>
            <div className='standings-item-maininfo'>
                <div className="standings-item-maininfo-rank">{props.info.ShowRk}  {getRkChange(props.info.RkChange)}</div>
                <div className="standings-item-maininfo-name">
                    {props.info.TeamName}
                    {props.info.Tourney6Rk === '1' ? <span className="little-fucker"><img src={props.tourneys.data[5].Logo} alt={props.tourneys.data[5].Tourney} /></span> : <></> }
                    {props.info.Tourney9Rk === '1' ? <span className="little-fucker"><img src={props.tourneys.data[8].Logo} alt={props.tourneys.data[8].Tourney} /></span> : <></> }
                    {props.info.Tourney11Rk === '1' ? <span className="little-fucker"><img src={props.tourneys.data[10].Logo} alt={props.tourneys.data[10].Tourney} /></span> : <></> }
                    {props.info.Tourney14Rk === '1' ? <span className="little-fucker"><img src={props.tourneys.data[13].Logo} alt={props.tourneys.data[13].Tourney} /></span> : <></> }
                </div>
                <div className="standings-item-maininfo-points">{props.info.Points}</div>
                <div className="standings-item-maininfo-earnings">{props.info.Earnings}</div>
            </div>
            {showInfo ? <StandingsItemInfo info={props.info} tourneys={props.tourneys} /> : <></>}
        </div>
    )
}

export default StandingsItem
