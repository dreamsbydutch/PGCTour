import React from 'react'
import './StandingsItemInfo.css'

function StandingsItemInfo(props) {
    return (
        <div className="slot-extras-wrapper">
            <div className="slot-extras">
                <div className="slot-extras-stats">
                    <div className="extra-stats-labels">
                        <div className="wins-label extra-stats-label">Wins</div>
                        <div className="toptens-label extra-stats-label">Top Tens</div>
                        <div className="cutsmade-label extra-stats-label">Cuts Made</div>
                        <div className="weekdayscoringaverage-label extra-stats-label">Weekday Avg.</div>
                        <div className="weekendscoringaverage-label extra-stats-label">Weekend Avg.</div>
                    </div>
                    <div className="extra-stats">
                        <div className="wins extra-stat">{props.info.TourneyWins}</div>
                        <div className="toptens extra-stat">{props.info.TourneyToptens}</div>
                        <div className="cutsmade extra-stat">{props.info.TourneyCutsmade}</div>
                        <div className="weekdayscoringaverage extra-stat">{props.info.WeekdayScrAvg}</div>
                        <div className="weekendscoringaverage extra-stat">{props.info.WeekendScrAvg}</div>
                    </div>
                </div>
                <div className="slot-extras-tournaments">
                    <div className="tournament-history">
                        <div className="tourney-one tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/WMOpen.png" alt="Waste Management Open" /></div>
                            <div className="tourney-rank">{props.info.Tourney1Rk}</div>
                        </div>
                        <div className="tourney-two tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/WGTMexico.png" alt="WGC Mexico Championship" /></div>
                            <div className="tourney-rank">{props.info.Tourney2Rk}</div>
                        </div>
                        <div className="tourney-three tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/Players.png" alt="The Players Championship" /></div>
                            <div className="tourney-rank">{props.info.Tourney3Rk}</div>
                        </div>
                        <div className="tourney-four tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/Masters.png" alt="The Masters" /></div>
                            <div className="tourney-rank">{props.info.Tourney4Rk}</div>
                        </div>
                        <div className="tourney-five tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/RBCHeritage.png" alt="RBC Heritage" /></div>
                            <div className="tourney-rank">{props.info.Tourney5Rk}</div>
                        </div>
                        <div className="tourney-six tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/PGAChampionship.png" alt="PGA Championship" /></div>
                            <div className="tourney-rank">{props.info.Tourney6Rk}</div>
                        </div>
                        <div className="tourney-seven tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/Memorial.png" alt="The Memorial Tournament" /></div>
                            <div className="tourney-rank">{props.info.Tourney7Rk}</div>
                        </div>
                        <div className="tourney-eight tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/USOpen.png" alt="U.S. Open" /></div>
                            <div className="tourney-rank">{props.info.Tourney8Rk}</div>
                        </div>
                        <div className="tourney-nine tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/TheOpen.png" alt="The Open" /></div>
                            <div className="tourney-rank">{props.info.Tourney9Rk}</div>
                        </div>
                        <div className="tourney-ten tourney-hist">
                            <div className="tourney-logo"><img src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/Tourney_Logos/FedExStJude.png" alt="Fed Ex-St. Jude Invitational" /></div>
                            <div className="tourney-rank">{props.info.Tourney10Rk}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StandingsItemInfo
