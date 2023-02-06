import React from 'react'
import './ChampAlert.css'
// import { useQuery } from 'react-query'
// import { fetchLeaderboardData, fetchLeaderboardById } from '../../utils/fetchData';
// import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function ChampAlert(props) {
    // var leaderboardQuery = useQuery('LiveLeaderboardData', fetchLeaderboardData)
    // var leaderboardData = null

    // if (leaderboardQuery.isError) { console.log(leaderboardQuery.error); return <div>Error</div> }
    // if (leaderboardQuery.isLoading) { return <LoadingSpinner /> }
    // leaderboardData = fetchLeaderboardById(leaderboardQuery.data, props.tourney.id)
    // leaderboardData = leaderboardData.slice(0, 1)[0]

    return (
        <a href={"#/tournament/" + props.tourney.id}>
            <div className='champion-alert-container'>
                <div className="champion-alert-header">{props.tourney.Tourney} Champion</div>
                <div className="champion-alert-tourneylogo"><img alt={props.tourney.Tourney} src={props.tourney.Logo} /></div>
                {/* <div className="champion-alert-champname">{leaderboardData.Name}</div> */}
                {/* <div className="champion-alert-teamscore">{leaderboardData.Score}</div> */}
                {/* <div className="champion-alert-golferone">{leaderboardData.G1Name}<br />({leaderboardData.G1Total})</div> */}
                {/* <div className="champion-alert-golfertwo">{leaderboardData.G2Name}<br />({leaderboardData.G2Total})</div> */}
                {/* <div className="champion-alert-golferthree">{leaderboardData.G3Name}<br />({leaderboardData.G3Total})</div> */}
                {/* <div className="champion-alert-golferfour">{leaderboardData.G4Name}<br />({leaderboardData.G4Total})</div> */}
                {/* <div className="champion-alert-golferfive">{leaderboardData.G5Name}<br />({leaderboardData.G5Total})</div> */}
                {/* <div className="champion-alert-golfersix">{leaderboardData.G6Name}<br />({leaderboardData.G6Total})</div> */}
                {/* <div className="champion-alert-golferseven">{leaderboardData.G7Name}<br />({leaderboardData.G7Total})</div> */}
                {/* <div className="champion-alert-golfereight">{leaderboardData.G8Name}<br />({leaderboardData.G8Total})</div> */}
                {/* <div className="champion-alert-golfernine">{leaderboardData.G9Name}<br />({leaderboardData.G9Total})</div> */}
                {/* <div className="champion-alert-golferten">{leaderboardData.G10Name}<br />({leaderboardData.G10Total})</div> */}
            </div>
        </a>
    )
}

export default ChampAlert
