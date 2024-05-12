import React from 'react'
import { formatScore } from '../utils/utils';

export default function ChampAlert(props) {
    const leaderboards = [props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '1'),props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '2')]
    let golfers = [
        [
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferOne)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferTwo)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferThree)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferFour)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferFive)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferSix)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferSeven)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferEight)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferNine)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][0].golferTen)[0],
        ],[
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferOne)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferTwo)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferThree)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferFour)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferFive)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferSix)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferSeven)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferEight)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferNine)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[1][1].golferTen)[0],
        ],[
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferOne)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferTwo)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferThree)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferFour)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferFive)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferSix)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferSeven)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferEight)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferNine)[0],
            props.tourney.pgaLeaderboard.filter(obj => obj.dgID === leaderboards[0][0].golferTen)[0],
        ]
    ]
    console.log(golfers)
    return (
        <>
            <a href={"#/leaderboard/" + props.tourney.tourneyID + "?tour=dbyd"}>
                <div className='grid grid-flow-row grid-cols-10 text-center py-3 mb-8 bg-amber-100 rounded-2xl hover:text-amber-900 max-w-screen-md mx-auto shadow-md'>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-3"><img alt={props.tourney.Tourney} src={props.tourney.Logo} /></div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-7 font-bold text-lg text-amber-900 xs:text-xl sm:text-2xl md:text-3xl">{props.tourney.Tourney} DbyD Champion</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-4 row-span-2 font-bold text-xl text-amber-900 xs:text-2xl sm:text-3xl">{leaderboards[1][0].Name}</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-2 font-bold text-lg text-amber-900 xs:text-xl sm:text:2xl md:text-3xl">{leaderboards[1][0].Score}</div>
                    {golfers[0].map(obj => <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{obj.playerName}<br />({formatScore(obj.currentScore)})</div>)}
                    <div className='border border-amber-800 col-span-10'></div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-3"><img alt={props.tourney.Tourney} src={props.tourney.Logo} /></div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-7 font-bold text-lg text-amber-900 xs:text-xl sm:text-2xl md:text-3xl">{props.tourney.Tourney} DbyD Champion</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-4 row-span-2 font-bold text-xl text-amber-900 xs:text-2xl sm:text-3xl">{leaderboards[1][1].Name}</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-2 font-bold text-lg text-amber-900 xs:text-xl sm:text:2xl md:text-3xl">{leaderboards[1][1].Score}</div>
                    {golfers[1].map(obj => <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{obj.playerName}<br />({formatScore(obj.currentScore)})</div>)}
                </div>
            </a>
            <a href={"#/leaderboard/" + props.tourney.tourneyID + "?tour=pgc"}>
                <div className='grid grid-flow-row grid-cols-10 text-center py-3 mb-8 bg-amber-100 rounded-2xl hover:text-amber-900 max-w-screen-md mx-auto shadow-md'>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-3"><img alt={props.tourney.Tourney} src={props.tourney.Logo} /></div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-7 font-bold text-lg text-amber-900 xs:text-xl sm:text-2xl md:text-3xl">{props.tourney.Tourney} PGC Champion</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-4 row-span-2 font-bold text-xl text-amber-900 xs:text-2xl sm:text-3xl">{leaderboards[0][0].Name}</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-2 font-bold text-lg text-amber-900 xs:text-xl sm:text:2xl md:text-3xl">{leaderboards[0][0].Score}</div>
                    {golfers[2].map(obj => <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{obj.playerName}<br />({formatScore(obj.currentScore)})</div>)}
                </div>
            </a>
        </>
    )
}