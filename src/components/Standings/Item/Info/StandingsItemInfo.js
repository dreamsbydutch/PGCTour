import React from 'react'
import './StandingsItemInfo.css'

function StandingsItemInfo(props) {

    return (
        <div className="standings-item-info-container">
            <div className="standings-item-info-labels-row">
                <div className="standings-item-info-wins-label">Wins</div>
                <div className="standings-item-info-toptens-label">Top Tens</div>
                <div className="standings-item-info-cutsmade-label">Cuts Made</div>
                <div className="standings-item-info-weekdayscoringaverage-label">Weekday Avg.</div>
                <div className="standings-item-info-weekendscoringaverage-label">Weekend Avg.</div>
            </div>
            <div className="standings-item-info-stats-row">
                <div className="standings-item-info-wins">{props.info.TourneyWins}</div>
                <div className="standings-item-info-toptens">{props.info.TourneyToptens}</div>
                <div className="standings-item-info-cutsmade">{props.info.TourneyCutsmade}</div>
                <div className="standings-item-info-weekdayscoringaverage">{props.info.WeekdayScrAvg}</div>
                <div className="standings-item-info-weekendscoringaverage">{props.info.WeekendScrAvg}</div>
            </div>
            <div className="standings-item-info-tourneyhist-row-one">
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[0].Logo} alt={props.tourneys.data[0].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney1Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[1].Logo} alt={props.tourneys.data[1].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney2Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[2].Logo} alt={props.tourneys.data[2].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney3Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[3].Logo} alt={props.tourneys.data[3].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney4Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[4].Logo} alt={props.tourneys.data[4].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney5Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[5].Logo} alt={props.tourneys.data[5].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney6Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[6].Logo} alt={props.tourneys.data[6].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney7Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[7].Logo} alt={props.tourneys.data[7].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney8Rk}</div>
                </div>
            </div>
            <div className="standings-item-info-tourneyhist-row-two">
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[8].Logo} alt={props.tourneys.data[8].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney9Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[9].Logo} alt={props.tourneys.data[9].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney10Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[10].Logo} alt={props.tourneys.data[10].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney11Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[11].Logo} alt={props.tourneys.data[11].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney12Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[12].Logo} alt={props.tourneys.data[12].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney13Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[13].Logo} alt={props.tourneys.data[13].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney14Rk}</div>
                </div>
                <div className="standings-item-info-tourneyhist-tourney">
                    <div className="standings-item-info-tourneyhist-tourney-logo">
                        <img src={props.tourneys.data[14].Logo} alt={props.tourneys.data[14].Tourney} /></div>
                    <div className="standings-item-info-tourneyhist-tourney-rank">{props.info.Tourney15Rk}</div>
                </div>
            </div>
        </div>
    )
}

export default StandingsItemInfo
