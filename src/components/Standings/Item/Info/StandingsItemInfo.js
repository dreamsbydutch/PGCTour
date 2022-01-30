import React from 'react'
import { useQuery } from 'react-query'
import ErrorPage from '../../../../containers/ErrorPage/ErrorPage'
import { fetchTournamentsInfo } from '../../../../utils/fetchData'
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner'
import './StandingsItemInfo.css'

function StandingsItemInfo(props) {
    var tourneys = useQuery('TournamentTourney', fetchTournamentsInfo)
    if (tourneys.isError) { console.log(tourneys.error); return <ErrorPage /> }
    if (tourneys.isLoading) { return <LoadingSpinner /> }

    return (
        <div className="standings-item-info-extras-container">
            <div className="standings-item-info-extras-labels-row">
                <div className="standings-item-info-extras-wins-label">Wins</div>
                <div className="standings-item-info-extras-toptens-label">Top Tens</div>
                <div className="standings-item-info-extras-cutsmade-label">Cuts Made</div>
                <div className="standings-item-info-extras-weekdayscoringaverage-label">Weekday Avg.</div>
                <div className="standings-item-info-extras-weekendscoringaverage-label">Weekend Avg.</div>
            </div>
            <div className="standings-item-info-extras-stats-row">
                <div className="standings-item-info-extras-wins">{props.info.TourneyWins}</div>
                <div className="standings-item-info-extras-toptens">{props.info.TourneyToptens}</div>
                <div className="standings-item-info-extras-cutsmade">{props.info.TourneyCutsmade}</div>
                <div className="standings-item-info-extras-weekdayscoringaverage">{props.info.WeekdayScrAvg}</div>
                <div className="standings-item-info-extras-weekendscoringaverage">{props.info.WeekendScrAvg}</div>
            </div>
            <div className="standings-item-info-extras-tourneyhist-row-one">
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[0].Logo} alt={tourneys.data[0].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney1Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[1].Logo} alt={tourneys.data[1].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney1Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[2].Logo} alt={tourneys.data[2].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney2Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[3].Logo} alt={tourneys.data[3].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney3Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[4].Logo} alt={tourneys.data[4].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney4Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[5].Logo} alt={tourneys.data[5].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney5Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[6].Logo} alt={tourneys.data[6].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney6Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[7].Logo} alt={tourneys.data[7].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney7Rk}</div>
                </div>
            </div>
            <div className="standings-item-info-extras-tourneyhist-row-two">
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[8].Logo} alt={tourneys.data[8].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney8Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[9].Logo} alt={tourneys.data[9].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney9Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[10].Logo} alt={tourneys.data[10].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney10Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[11].Logo} alt={tourneys.data[11].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney11Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[12].Logo} alt={tourneys.data[12].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney12Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[13].Logo} alt={tourneys.data[13].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney13Rk}</div>
                </div>
                <div className="standings-item-info-extras-tourneyhist-tourney">
                    <div className="standings-item-info-extras-tourneyhist-tourney-logo">
                        <img src={tourneys.data[14].Logo} alt={tourneys.data[14].Tourney} /></div>
                    <div className="standings-item-info-extras-tourneyhist-tourney-rank">{props.info.Tourney14Rk}</div>
                </div>
            </div>
        </div>
    )
}

export default StandingsItemInfo
