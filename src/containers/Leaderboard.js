import React, { useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CountdownLogic from '../components/CountdownLogic'
import PGALeaderboard from '../components/PGALeaderboard';
import PGCLeaderboard from '../components/PGCLeaderboard';
import ErrorPage from './ErrorPage';

import ReactGA from 'react-ga4';
import DbyDLeaderboard from '../components/DbyDLeaderboard'
ReactGA.send({ hitType: "pageview", page: "/leaderboard" });

export default function Leaderboard(props) {
    let { tourneyId } = useParams();

    if (tourneyId) {
        let tourney = props.data.allTourneys?.filter(obj => obj.tourneyID === tourneyId)[0]
        if (new Date(tourney['StartDate']) > new Date()) {
            return (
                <>
                    <LeaderboardHeader tourney={tourney} allTourneys={props.data.allTourneys} />
                    <CountdownLogic tourney={tourney} />
                </>
            )
        } else {
            return (
                <TourneyLeaderboard
                    tourney={tourney}
                    allTourneys={props.data.allTourneys}
                    standings={props.data.standings}
                    live={false}
                    limit={props.limit ?? null}
                    home={props.home ?? null}
                />
            )
        }
    } else if (props.data.currentTourney) {
        return (
            <TourneyLeaderboard
                tourney={props.data.currentTourney}
                allTourneys={props.data.allTourneys}
                standings={props.data.standings}
                live={true}
                limit={props.limit ?? null}
                home={props.home ?? null}
            />
        )
    } else if (props.data.nextTourney) {
        return (
            <>
                <LeaderboardHeader tourney={props.data.nextTourney} allTourneys={props.data.allTourneys} />
                <CountdownLogic tourney={props.data.nextTourney} />
            </>
        )
    } else if (props.data.previousTourney) {
        return (
            <TourneyLeaderboard
                tourney={props.data.previousTourney}
                allTourneys={props.data.allTourneys}
                standings={props.data.standings}
                live={false}
                limit={props.limit ?? null}
                home={props.home ?? null}
            />
        )
    } else if (props.data.futureTourney) {
        return (
            <>
                <LeaderboardHeader tourney={props.data.futureTourney} allTourneys={props.data.allTourneys} />
                <CountdownLogic tourney={props.data.futureTourney} />
            </>
        )
    } else {
        return (
            <ErrorPage />
        )
    }
}


function TourneyLeaderboard(props) {
    const [pgcEffect, setPGCEffect] = useState(false);
    const [dbydEffect, setDbyDEffect] = useState(false);
    // const [pgaEffect, setPGAEffect] = useState(false);
    const [leaderboardToggle, setLeaderboardToggle] = useState("PGC")
    return (
        <div className='py-4'>
            <LeaderboardHeader {...props} />
            {props.home ?
                <>
                    <HomeLeaderboard {...props} />
                </>
                :
                <div className="mt-8">
                    {props.home ?
                        <></> :
                        <div className="my-4 mx-auto text-center">
                            <button onClick={() => { setLeaderboardToggle("PGC"); setPGCEffect(true); }} className={`${pgcEffect && "animate-toggleClick"} my-2 mx-3 py-1 px-6 rounded-lg text-lg md:text-xl sm:px-8 md:px-10 font-bold ${leaderboardToggle === "PGC" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setPGCEffect(false)}>PGC</button>
                            <button onClick={() => { setLeaderboardToggle("DbyD"); setDbyDEffect(true); }} className={`${dbydEffect && "animate-toggleClick"} my-2 mx-3 py-1 px-6 rounded-lg text-lg md:text-xl sm:px-8 md:px-10 font-bold ${leaderboardToggle === "DbyD" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setDbyDEffect(false)}>DbyD</button>
                            {/* <button onClick={() => { setLeaderboardToggle("PGA"); setPGAEffect(true); }} className={`${pgaEffect && "animate-toggleClick"} my-2 mx-3 py-1 px-6 rounded-lg text-lg md:text-xl sm:px-8 md:px-10 font-bold ${leaderboardToggle === "PGA" ? "bg-gray-600 text-gray-300 shadow-btn" : "bg-gray-300 text-gray-800 shadow-btn"}`} onAnimationEnd={() => setPGAEffect(false)}>PGA</button> */}
                        </div>
                    }
                    {leaderboardToggle === "PGC" ?
                        <>
                            <PGCLeaderboard {...props} />
                        </>
                        :
                        leaderboardToggle === "DbyD" ?
                        <>
                            <DbyDLeaderboard {...props} />
                        </>
                        :
                        <>
                            <PGALeaderboard {...props} />
                        </>
                    }
                </div>
            }
        </div>
    )
}
function HomeLeaderboard(props) {
    const pgcLeaderboardData = props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '1').slice(0, 12)
    const dbdLeaderboardData = props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '2').slice(0, 12)
    return (
        <div className='grid grid-flow-col grid-cols-2 text-center mx-auto mt-4'>
        <div className='border-r border-black pr-1'>
            <div className='text-lg font-bold mb-2'>PGC Tour</div>
            <div className="grid grid-flow-row grid-cols-8 text-center max-w-xl mx-auto">
                <div className="col-span-2 text-xs font-semibold font-varela place-self-center">Rank</div>
                <div className="col-span-4 text-sm font-semibold font-varela place-self-center">Name</div>
                <div className="col-span-2 text-xs font-semibold font-varela place-self-center">Score</div>
            </div>
            {pgcLeaderboardData?.map(obj => <HomeLeaderboardItem info={obj} key={obj.Name} live={props.live} standings={props.standings?.filter(a => a.TeamName === obj.Name)[0]} />)}
        </div>
        <div className='pl-1'>
            <div className='text-lg font-bold mb-2'>DbyD Tour</div>
            <div className="grid grid-flow-row grid-cols-8 text-center max-w-xl mx-auto">
                <div className="col-span-2 text-xs font-semibold font-varela place-self-center">Rank</div>
                <div className="col-span-4 text-sm font-semibold font-varela place-self-center">Name</div>
                <div className="col-span-2 text-xs font-semibold font-varela place-self-center">Score</div>
            </div>
            {dbdLeaderboardData?.map(obj => <HomeLeaderboardItem info={obj} key={obj.Name} live={props.live} standings={props.standings?.filter(a => a.TeamName === obj.Name)[0]} />)}
        </div>
        </div>
    )
}



function LeaderboardHeader(props) {
    return (
        <div id="leaderboard-header">
            <div className="grid grid-flow-row grid-cols-10 border-b-2 border-gray-800 max-w-2xl mx-auto">
                <div className="text-center font-varela place-self-center py-2 px-1 col-span-3 row-span-4 max-h-40"><img className="max-h-36" alt="Tournament logo" src={props.tourney.Logo}></img></div>
                <div className="col-span-5 row-span-2 font-varela text-center place-self-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">{props.tourney.Tourney}</div>

                <div className="row-span-1 col-span-2 font-varela text-xs text-center place-self-center xs:text-sm md:text-lg lg:text-xl"><DropdownComponent allTourneys={props.allTourneys} /></div>
                <div className="row-span-1 col-span-2 font-varela text-xs text-center place-self-center xs:text-sm md:text-lg lg:text-xl">{props.tourney.Dates}</div>
                <div className="row-span-1 col-span-3 font-varela text-2xs text-center place-self-center xs:text-xs md:text-sm lg:text-base">{props.tourney.Course}</div>
                <div className="row-span-1 col-span-2 font-varela text-2xs text-center place-self-center xs:text-xs md:text-sm lg:text-base">{props.tourney.Location}</div>
                <div className="row-span-1 col-span-2 font-varela text-2xs text-center place-self-center xs:text-xs md:text-sm lg:text-base">{props.tourney.ShowPar}</div>
                <div className="mt-2 row-span-1 col-span-3 font-varela text-2xs text-center place-self-center xs:text-xs md:text-sm lg:text-base">Tournament Purse:</div>
                <div className="mt-2 row-span-1 col-span-2 font-varela text-2xs text-center place-self-center xs:text-xs md:text-sm lg:text-base">{props.tourney.PointsPurse} points</div>
                <div className="mt-2 row-span-1 col-span-2 font-varela text-2xs text-center place-self-center xs:text-xs md:text-sm lg:text-base">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.tourney.MoneyPurse)}</div>
            </div>
        </div >
    )
};
function HomeLeaderboardItem(props) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div className='border-b border-dashed border-gray-200 max-w-xl mx-auto' onClick={() => setShowInfo(!showInfo)}>
            <div className='grid grid-flow-row grid-cols-8 text-center py-1'>
                <div className='font-varela place-self-center text-xs col-span-2 sm:text-base'>{props.info.ShowRk}</div>
                <div className='font-varela place-self-center text-sm col-span-4 sm:text-lg whitespace-nowrap'>{props.info.Name}</div>
                <div className='font-varela place-self-center text-xs col-span-2 sm:text-base'>{props.info.Score}</div>
            </div>
        </div>
    )
}


function DropdownComponent(props) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center rounded-lg bg-gray-500 px-2 py-1 text-sm font-medium text-white shadow-md">
                    <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 md:w-64 xl:w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <div className="font-extrabold font-varela text-sm text-left mx-6 my-2">Majors</div>
                        {props.allTourneys.filter(obj => obj.Class === 'Major').map(obj => {
                            return (
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className='mx-3 my-2 grid grid-flow-rows grid-cols-8'>
                                            <img className='w-full place-self-center text-center' src={obj.Logo} alt={obj.Tourney} />
                                            <a
                                                href={"#/leaderboard/" + obj.tourneyID}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'col-span-7 p-1 text-xs md:text-sm xl:text-base'
                                                )}
                                            >
                                                {obj.Tourney}
                                            </a>
                                        </div>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                    <div className="py-1">
                        <div className="font-extrabold font-varela text-sm text-left mx-6 my-2">Mid Tier</div>
                        {props.allTourneys.filter(obj => obj.Class === 'Mid').map(obj => {
                            return (
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className='mx-3 my-2 grid grid-flow-rows grid-cols-8'>
                                            <img className='w-full place-self-center text-center' src={obj.Logo} alt={obj.Tourney} />
                                            <a
                                                href={"#/leaderboard/" + obj.tourneyID}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'col-span-7 p-1 text-xs md:text-sm xl:text-base'
                                                )}
                                            >
                                                {obj.Tourney}
                                            </a>
                                        </div>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                    <div className="py-1">
                        <div className="font-extrabold font-varela text-sm text-left mx-6 my-2">Bottom Tier</div>
                        {props.allTourneys.filter(obj => obj.Class === 'Bottom').map(obj => {
                            return (
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className='mx-3 my-2 grid grid-flow-rows grid-cols-8'>
                                            <img className='w-full place-self-center text-center' src={obj.Logo} alt={obj.Tourney} />
                                            <a
                                                href={"#/leaderboard/" + obj.tourneyID}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'col-span-7 p-1 text-xs md:text-sm xl:text-base'
                                                )}
                                            >
                                                {obj.Tourney}
                                            </a>
                                        </div>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}