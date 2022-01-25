import React from 'react'
import './StandingsItem.css'

function StandingsItem() {
    const ShowRk = "";
    const RkChange = "";
    const TeamName = "";
    const Points = "";
    const Earnings = "";
    const TourneyWins = "";
    const TourneyTopTens = "";
    const TourneyCutsMade = "";
    const WeekdayScrAvg = "";
    const WeekendScrAvg = "";
    const WMORk = "";
    const MexicoRk = "";
    const PlayersRk = "";
    const MastersRk = "";
    const RBCRk = "";
    const PGARk = "";
    const MemorialRk = "";
    const USOpenRk = "";
    const OpenRk = "";
    const StJudeRk = "";


    return (
        <div className="standings-slot slot-{{cellsArray.[1]}}" onclick="showTeam({{cellsArray.[0]}})">
            <div className="standings-rank">{ShowRk}</div>
            <div className="standings-rankchange">{RkChange}</div>
            <div className="standings-teamname">{TeamName}</div>
            <div className="standings-points">{Points}</div>
            <div className="standings-earnings">{Earnings}</div>
            <div id="slot-{{cellsArray.[0]}}-extras" className="slot-extras-wrapper">
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
                            <div className="wins extra-stat">{TourneyWins}</div>
                            <div className="toptens extra-stat">{TourneyTopTens}</div>
                            <div className="cutsmade extra-stat">{TourneyCutsMade}</div>
                            <div className="weekdayscoringaverage extra-stat">{WeekdayScrAvg}</div>
                            <div className="weekendscoringaverage extra-stat">{WeekendScrAvg}</div>
                        </div>
                    </div>
                    <div className="slot-extras-tournaments">
                        <div className="tournament-history">
                            <div className="tourney-one tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/WMOpen.png" alt="Waste Management Open" /></div>
                                <div className="tourney-rank">{WMORk}</div>
                            </div>
                            <div className="tourney-two tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/WGTMexico.png" alt="WGC Mexico Championship" /></div>
                                <div className="tourney-rank">{MexicoRk}</div>
                            </div>
                            <div className="tourney-three tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/Players.png" alt="The Players Championship" /></div>
                                <div className="tourney-rank">{PlayersRk}</div>
                            </div>
                            <div className="tourney-four tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/Masters.png" alt="The Masters" /></div>
                                <div className="tourney-rank">{MastersRk}</div>
                            </div>
                            <div className="tourney-five tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/RBCHeritage.png" alt="RBC Heritage" /></div>
                                <div className="tourney-rank">{RBCRk}</div>
                            </div>
                            <div className="tourney-six tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/PGAChampionship.png" alt="PGA Championship" /></div>
                                <div className="tourney-rank">{PGARk}</div>
                            </div>
                            <div className="tourney-seven tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/Memorial.png" alt="The Memorial Tournament" /></div>
                                <div className="tourney-rank">{MemorialRk}</div>
                            </div>
                            <div className="tourney-eight tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/USOpen.png" alt="U.S. Open" /></div>
                                <div className="tourney-rank">{USOpenRk}</div>
                            </div>
                            <div className="tourney-nine tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/TheOpen.png" alt="The Open" /></div>
                                <div className="tourney-rank">{OpenRk}</div>
                            </div>
                            <div className="tourney-ten tourney-hist">
                                <div className="tourney-logo"><img src="./Images/Tourney_Logos/FedExStJude.png" alt="Fed Ex-St. Jude Invitational" /></div>
                                <div className="tourney-rank">{StJudeRk}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StandingsItem
