// import React, { useEffect, useState } from 'react';
// import './Leaderboard.css'
// import LeaderboardItem from './Item/LeaderboardItem';
// import LeaderboardHeader from './Header/LeaderboardHeader';
// // import CountdownLogic from '../Countdown/CountdownLogic';
// import PGALeaderboard from '../PGALeaderboard/PGALeaderboard';
// import { useInterval } from '../../utils/countdown';
// import { fetchPlayoffLeaderboardData, fetchLivePGALeaderboardData } from '../../utils/fetchData';

// function Leaderboard(props) {
//     const [leaderboardToggle, setLeaderboardToggle] = useState("PGC")
//     const [pgcData, setPgcData] = useState([]);
//     const [pgaData, setPgaData] = useState(props.PGAdata);

//     useEffect(() => {
//         setPgcData(props.data)
//         setPgaData(props.PGAdata)
//     }, [props]);
//     useInterval(() => {
//         if (props.live === true) {
//             fetchPlayoffLeaderboardData(props.tourney.id).then((res) => setPgcData(res.sort((a,b) => a.RawRk - b.RawRk)))
//             fetchLivePGALeaderboardData(props.tourney.id).then((res) => setPgaData(res))
//         }
//     }, 30000);

//     return (
//         <>
//             {/* {(new Date() < new Date(props.tourney.StartDate)) ?
//                 <>
//                     <LeaderboardHeader tourney={props.tourney} />
//                     <CountdownLogic tourney={props.tourney} />
//                 </>
//                 : */}
//                 <>
//                     <LeaderboardHeader tourney={props.tourney} link={props.link} />
//                     <div id="leaderboard-container">
//                         {props.link === false ?
//                             <></> :
//                             <div className="leaderboard-header-togglebuttons">
//                                 <button onClick={() => setLeaderboardToggle("PGC")} className={`leaderboard-header-PGCtogglebutton ${leaderboardToggle === "PGC" ? "leaderboard-header-activebutton" : "leaderboard-header-inactivebutton"}`}>PGC</button>
//                                 <button onClick={() => setLeaderboardToggle("PGA")} className={`leaderboard-header-PGAtogglebutton ${leaderboardToggle === "PGA" ? "leaderboard-header-activebutton" : "leaderboard-header-inactivebutton"}`}>PGA</button>
//                             </div>
//                         }
//                         {leaderboardToggle === "PGC" ?
//                             <>
//                                 <div className="leaderboard-item-labels">
//                                     <div className="leaderboard-item-labels-rank">Rank</div>
//                                     <div className="leaderboard-item-labels-teamname">Name</div>
//                                     <div className="leaderboard-item-labels-totaltopar">Score</div>
//                                     <div className="leaderboard-item-labels-todaytopar">{props.live ? 'Today' : 'Pts'}</div>
//                                     <div className="leaderboard-item-labels-todaythru">{props.live ? 'Thru' : '$$'}</div>
//                                 </div>
//                                 {pgcData.map(obj => <LeaderboardItem data={obj} key={obj.Name + obj.ScoreToPar} live={props.live} PGCstdg={props.live?props.PGCstdg.filter(team => team.TeamName===obj.Name)[0]:null}/>)}
//                             </>
//                             :
//                             <PGALeaderboard data={pgaData} live={props.live} />
//                         }
//                     </div>
//                 </>
//         </>
//     )
// }

// export default Leaderboard

