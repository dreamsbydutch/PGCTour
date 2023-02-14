import React from 'react';
import CountdownLogic from '../components/CountdownLogic';
import Standings from './Standings';
import ChampAlert from '../components/ChampAlert/ChampAlert'
import SignUpButton from '../components/SignUpButton'
import Leaderboard from './Leaderboard';

function Home(props) {
    return (
        <>
            {props.data.previousTourney &&
                <ChampAlert tourney={props.data.previousTourney} />
            }
            {props.data.currentTourney &&
                <>
                    <a href="#/leaderboard">
                        <div className="my-8 py-4 px-1 rounded-2xl bg-gray-100 hover:text-gray-800 shadow-md">
                            <Leaderboard data={props.data} limit={10} home={true} live={true} />
                        </div>
                    </a>
                </>
            }
            {props.data.nextTourney &&
                <>
                    <SignUpButton tourney={props.data.nextTourney} />
                    <a href="#/leaderboard">
                        <CountdownLogic tourney={props.data.nextTourney} />
                    </a>
                </>
            }
            <a href="#/standings">
                <div className="my-8 py-4 px-2 rounded-2xl bg-gray-100 hover:text-gray-800 shadow-md">
                    <Standings data={props.data} limit={10} />
                </div>
            </a>
        </>
    )
}

export default Home
