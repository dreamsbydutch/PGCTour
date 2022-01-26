import React from 'react'
import './GolferStatsItem.css'

function GolferStatsItem(props) {
    var golferRk, golferRtg

    if (props.type === "PGC") {
        golferRk = props.info.PGCRk
        golferRtg = props.info.PGCRtg
    } else if (props.type === "OWGR") {
        golferRk = props.info.OWGRRk
        golferRtg = props.info.OWGRRtg
    } else if (props.type === "FedEx") {
        golferRk = props.info.FedExRk
        golferRtg = props.info.FedExRtg
    } else if (props.type === "SG") {
        golferRk = props.info.SGRk
        golferRtg = props.info.SGRtg
    } else if (props.type === "ScrAvg") {
        golferRk = props.info.ScrAvgRk
        golferRtg = props.info.ScrAvgRtg
    }


    return (
        <div className="rating-slot">
            <div className="ratings-rank">{golferRk}</div>
            <div className="ratings-name">{props.info.Golfer}</div>
            <div className="ratings-pgcrank">{golferRtg}</div>
        </div>
    )
}

export default GolferStatsItem
