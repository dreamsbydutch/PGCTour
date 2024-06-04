import React from 'react';
import CountdownLogic from '../components/CountdownLogic';
import Standings from './Standings';
import ChampAlert from '../components/ChampAlert'
import SignUpButton from '../components/SignUpButton'
import Leaderboard from './Leaderboard';

import ReactGA from 'react-ga4';
ReactGA.send({ hitType: "pageview", page: "/home" });

function Home(props) {
    return (
        <>
            {props.data.previousTourney &&
                <ChampAlert tourney={props.data.previousTourney} data={props.data} />
            }
            {props.data.currentTourney &&
                <>
                    <a href="#/leaderboard">
                        <div className="my-0 mx-1 rounded-2xl bg-gray-100 hover:text-gray-800 shadow-md">
                            <Leaderboard data={props.data} limit={10} home={true} live={true} />
                        </div>
                    </a>
                </>
            }
            {props.data.nextTourney &&
                <>
                    {props.data.nextTourney.FormLink && <SignUpButton tourney={props.data.nextTourney} />}
                    <a href="#/leaderboard">
                        <CountdownLogic tourney={props.data.nextTourney} />
                    </a>
                </>
            }
            {!props.data.nextTourney && props.data.futureTourney &&
                <>
                    <a href="#/leaderboard">
                        <CountdownLogic tourney={props.data.futureTourney} />
                    </a>
                </>
            }
                <Standings data={props.data} limit={15} home={true} />
        </>
    )
}

export default Home
