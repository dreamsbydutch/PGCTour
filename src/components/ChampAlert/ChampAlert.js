import React from 'react'
import './ChampAlert.css'
import { useQuery } from 'react-query'
import { fetchLeaderboardData, fetchLeaderboardById } from '../../utils/fetchData';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function ChampAlert(props) {
    var leaderboardQuery = useQuery('LiveLeaderboardData', fetchLeaderboardData)
    var leaderboardData = null

    if (leaderboardQuery.isError) { console.log(leaderboardQuery.error); return <div>Error</div> }
    if (leaderboardQuery.isLoading) { return <LoadingSpinner /> }
    leaderboardData = fetchLeaderboardById(leaderboardQuery.data, props.tourney.id)
    leaderboardData = leaderboardData.slice(0, 1)[0]

    return (
        <div className='champion-alert-container'>
            <div className="champion-alert-header">{props.tourney.Tourney} Champion</div>
            <div className="champion-alert-tourneylogo"><img alt={props.tourney.Tourney} src={props.tourney.Logo} /></div>
            <div className="champion-alert-champname">{leaderboardData.Name}</div>
            <div className="champion-alert-teamscore">{leaderboardData.ScoreToPar}</div>
            <div className="champion-alert-golferone">{leaderboardData.Golfer1Name}<br />({leaderboardData.Golfer1Total})</div>
            <div className="champion-alert-golfertwo">{leaderboardData.Golfer2Name}<br />({leaderboardData.Golfer2Total})</div>
            <div className="champion-alert-golferthree">{leaderboardData.Golfer3Name}<br />({leaderboardData.Golfer3Total})</div>
            <div className="champion-alert-golferfour">{leaderboardData.Golfer4Name}<br />({leaderboardData.Golfer4Total})</div>
            <div className="champion-alert-golferfive">{leaderboardData.Golfer5Name}<br />({leaderboardData.Golfer5Total})</div>
            <div className="champion-alert-golfersix">{leaderboardData.Golfer6Name}<br />({leaderboardData.Golfer6Total})</div>
            <div className="champion-alert-golferseven">{leaderboardData.Golfer7Name}<br />({leaderboardData.Golfer7Total})</div>
            <div className="champion-alert-golfereight">{leaderboardData.Golfer8Name}<br />({leaderboardData.Golfer8Total})</div>
            <div className="champion-alert-golfernine">{leaderboardData.Golfer9Name}<br />({leaderboardData.Golfer9Total})</div>
            <div className="champion-alert-golferten">{leaderboardData.Golfer10Name}<br />({leaderboardData.Golfer10Total})</div>
        </div>
    )
}

export default ChampAlert
