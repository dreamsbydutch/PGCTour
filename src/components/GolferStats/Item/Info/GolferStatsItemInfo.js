import React from 'react';
import './GolferStatsItemInfo.css'

function GolferStatsItemInfo(props) {

  return (
    <div className="golferstatsitem-info-container">
      <div className="golferstatsitem-info-container-row">
        <div className="golferstatsitem-info-label">World Golf Rank</div>
        <div className="golferstatsitem-info">{props.data.OWGRRtg} {rankPostfix(props.data.OWGRRk)}</div>
      </div>
      <div className="golferstatsitem-info-container-row">
        <div className="golferstatsitem-info-label">Total Strokes Gained</div>
        <div className="golferstatsitem-info">{props.data.SGRtg} {rankPostfix(props.data.SGRk)}</div>
      </div>
      <div className="golferstatsitem-info-container-row">
        <div className="golferstatsitem-info-label">FedEx Cup Points</div>
        <div className="golferstatsitem-info">{props.data.FedExRtg} {rankPostfix(props.data.FedExRk)}</div>
      </div>
      <div className="golferstatsitem-info-container-row">
        <div className="golferstatsitem-info-label">Total Earnings</div>
        <div className="golferstatsitem-info">{props.data.EarningsRtg} {rankPostfix(props.data.EarningsRk)}</div>
      </div>
      <div className="golferstatsitem-info-container-row">
        <div className="golferstatsitem-info-label">Scoring Average</div>
        <div className="golferstatsitem-info">{props.data.ScrAvgRtg} {rankPostfix(props.data.ScrAvgRk)}</div>
      </div>
    </div>
  )
}

export default GolferStatsItemInfo;

function rankPostfix(rank) {
  var postfix = ""
  const numberArray = Array.from(String(rank), Number);
  if (numberArray.length === 0) { return }
  if (numberArray[numberArray.length - 1] === 1) {
    if (numberArray[numberArray.length - 2] === 1) { postfix = "th" } else { postfix = "st" }
  } else if (numberArray[numberArray.length - 1] === 2) {
    if (numberArray[numberArray.length - 2] === 1) { postfix = "th" } else { postfix = "nd" }
  } else if (numberArray[numberArray.length - 1] === 3) {
    if (numberArray[numberArray.length - 2] === 1) { postfix = "th" } else { postfix = "rd" }
  } else {
    postfix = "th"
  }
  return "(" + String(rank) + postfix + ")"
}