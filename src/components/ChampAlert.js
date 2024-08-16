import React from 'react'
import { formatScore } from '../utils/utils'
import { littlefucker } from '../containers/Standings'

export default function ChampAlert(props) {
	if (props.tourney.tourneyID > 16) {
		return null
	}
	const leaderboards = [
		props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '2' && (obj.ShowRk === '1' || obj.ShowRk === 'T1')),
		props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '1' && (obj.ShowRk === '1' || obj.ShowRk === 'T1')),
	]
	let golfers = [
		leaderboards[0].map(obj => [
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferOne)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferTwo)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferThree)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferFour)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferFive)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferSix)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferSeven)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferEight)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferNine)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferTen)[0],
		]),
		leaderboards[1].map(obj => [
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferOne)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferTwo)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferThree)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferFour)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferFive)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferSix)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferSeven)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferEight)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferNine)[0],
			props.tourney.pgaLeaderboard.filter(a => a.dgID === obj.golferTen)[0],
		]),
	]
	return (
		<>
			<a href={'#/leaderboard/' + props.tourney.tourneyID + '?tour=dbyd'}>
				<div className="text-center py-3 mb-8 bg-amber-100 rounded-2xl hover:text-amber-900 max-w-screen-md mx-auto shadow-md">
					{leaderboards[0].map((obj, i) => (
						<>
							{i !== 0 && <div className="border-2 rounded-full w-5/6 mx-auto my-3 border-amber-800"></div>}
							<div className="grid grid-flow-row grid-cols-10">
								<div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-3">
									<img alt={props.tourney.Tourney} src={props.tourney.Logo} />
								</div>
								<div className="text-center font-varela place-self-center py-1 px-1 col-span-7 font-bold text-lg text-amber-900 xs:text-xl sm:text-2xl md:text-3xl">
									{props.tourney.Tourney} DbyD Champion
								</div>
								<div className="text-center font-varela place-self-center py-1 px-1 col-span-4 row-span-2 font-bold text-xl text-amber-900 xs:text-2xl sm:text-3xl">
									{obj.Name}
									{littlefucker(props.data.standings.filter(a => a.TeamName === obj.Name)[0], props.data.allTourneys)}
								</div>
								<div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-2 font-bold text-lg text-amber-900 xs:text-xl sm:text:2xl md:text-3xl">
									{formatScore(obj.Score)}
								</div>
								{golfers[0][i].map(obj => (
									<div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">
										{obj.playerName}
										<br />({formatScore(obj.currentScore)})
									</div>
								))}
							</div>
						</>
					))}
				</div>
			</a>
			<a href={'#/leaderboard/' + props.tourney.tourneyID + '?tour=pgc'}>
				<div className="text-center py-3 mb-8 bg-amber-100 rounded-2xl hover:text-amber-900 max-w-screen-md mx-auto shadow-md">
					{leaderboards[1].map((obj, i) => (
						<>
							{i !== 0 && <div className="border-2 rounded-full w-5/6 mx-auto my-3 border-amber-800"></div>}
							<div className="grid grid-flow-row grid-cols-10">
								<div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-3">
									<img alt={props.tourney.Tourney} src={props.tourney.Logo} />
								</div>
								<div className="text-center font-varela place-self-center py-1 px-1 col-span-7 font-bold text-lg text-amber-900 xs:text-xl sm:text-2xl md:text-3xl">
									{props.tourney.Tourney} PGC Champion
								</div>
								<div className="text-center font-varela place-self-center py-1 px-1 col-span-4 row-span-2 font-bold text-xl text-amber-900 xs:text-2xl sm:text-3xl">
									{obj.Name}
									{littlefucker(props.data.standings.filter(a => a.TeamName === obj.Name)[0], props.data.allTourneys)}
								</div>
								<div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-2 font-bold text-lg text-amber-900 xs:text-xl sm:text:2xl md:text-3xl">
									{formatScore(obj.Score)}
								</div>
								{golfers[1][i].map(obj => (
									<div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">
										{obj.playerName}
										<br />({formatScore(obj.currentScore)})
									</div>
								))}
							</div>
						</>
					))}
				</div>
			</a>
		</>
	)
}
