import React from 'react'
import { PGCLeaderboardItem } from './PGCLeaderboard'
import { useWindowDimensions } from '../utils/utils'

export default function DbyDLeaderboard(props) {
	const leaderboardData = props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '2')
	var data = props.limit && leaderboardData ? leaderboardData.slice(0, props.limit) : leaderboardData
	const window = useWindowDimensions()
	function PGCLeaderboardHeaderMini(props) {
		return (
			<div className="grid grid-flow-row grid-cols-10 text-center max-w-xl mx-auto">
				<div className="col-span-2 text-sm font-bold font-varela place-self-center">Rank</div>
				<div className="col-span-4 text-base font-bold font-varela place-self-center">Name</div>
				<div className="col-span-2 text-sm font-bold font-varela place-self-center">Score</div>
				<div className="col-span-1 text-2xs font-varela place-self-center">{props.live ? 'Today' : 'Pts'}</div>
				<div className="col-span-1 text-2xs font-varela place-self-center">{props.live ? 'Thru' : '$$'}</div>
			</div>
		)
	}
	function PGCLeaderboardHeaderPhone(props) {
		return (
			<div className="grid grid-flow-row grid-cols-10 text-center max-w-xl mx-auto">
				<div className="col-span-2 text-sm font-bold font-varela place-self-center">Rank</div>
				<div className="col-span-4 text-base font-bold font-varela place-self-center">Name</div>
				<div className="col-span-2 text-sm font-bold font-varela place-self-center">Score</div>
				<div className="col-span-1 text-xs font-varela place-self-center">{props.live ? 'Today' : 'Pts'}</div>
				<div className="col-span-1 text-xs font-varela place-self-center">{props.live ? 'Thru' : '$$'}</div>
			</div>
		)
	}
	function PGCLeaderboardHeaderTablet(props) {
		return (
			<div className="grid grid-flow-row grid-cols-10 text-center max-w-xl mx-auto">
				<div className="col-span-2 text-base font-bold font-varela place-self-center">Rank</div>
				<div className="col-span-4 text-lg font-bold font-varela place-self-center">Name</div>
				<div className="col-span-2 text-base font-bold font-varela place-self-center">Score</div>
				<div className="col-span-1 text-sm font-varela place-self-center">{props.live ? 'Today' : 'Points'}</div>
				<div className="col-span-1 text-sm font-varela place-self-center">{props.live ? 'Thru' : '$$'}</div>
			</div>
		)
	}
	function PGCLeaderboardHeaderDesktop(props) {
		return (
			<div className="grid grid-flow-row grid-cols-12 text-center max-w-xl mx-auto">
				<div className="col-span-1 text-base font-bold font-varela place-self-center">Rank</div>
				<div className="col-span-4 text-lg font-bold font-varela place-self-center">Name</div>
				<div className="col-span-2 text-base font-bold font-varela place-self-center">Score</div>
				<div className="col-span-1 text-sm font-varela place-self-center">{props.live ? 'Today' : 'Pts'}</div>
				<div className="col-span-1 text-sm font-varela place-self-center">{props.live ? 'Thru' : '$$'}</div>
				{/* <div className="col-span-2 text-sm font-varela place-self-center">Rounds</div> */}
				<div className="col-span-2 text-xs font-varela place-self-center">Proj $$</div>
				<div className="col-span-1 text-xs font-varela place-self-center">Starting Position</div>
				{/* <div className="col-span-1 text-xs font-varela place-self-center">Make Cut</div> */}
			</div>
		)
	}
	return (
		<>
			{window.width < 400 ? (
				<PGCLeaderboardHeaderMini {...props} />
			) : window.width < 550 ? (
				<PGCLeaderboardHeaderPhone {...props} />
			) : window.width < 925 ? (
				<PGCLeaderboardHeaderTablet {...props} />
			) : (
				<PGCLeaderboardHeaderDesktop {...props} />
			)}
			{data?.map(obj => (
				<PGCLeaderboardItem
					{...{
						info: obj,
						key: obj.Name,
						live: props.live,
						pgaLeaderboard: props.tourney.pgaLeaderboard,
						standings: props.standings?.filter(a => a.TeamName === obj.Name)[0],
						data: props,
					}}
				/>
			))}
		</>
	)
}
