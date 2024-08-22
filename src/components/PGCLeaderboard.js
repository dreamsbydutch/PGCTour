import React, { useState } from 'react'
import { addRankingSuffix, formatMoney, getRkChange, formatScore, formatThru, useWindowDimensions } from '../utils/utils'
import { littlefucker } from '../containers/Standings'

export default function PGCLeaderboard(props) {
	const leaderboardData = props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '1')
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
			<div className="grid grid-flow-row grid-cols-9 text-center max-w-xl mx-auto">
				<div className="col-span-1 text-base font-bold font-varela place-self-center">Rank</div>
				<div className="col-span-3 text-lg font-bold font-varela place-self-center">Name</div>
				<div className="col-span-1 text-base font-bold font-varela place-self-center">Score</div>
				<div className="col-span-1 text-sm font-varela place-self-center">{props.live ? 'Today' : 'Pts'}</div>
				<div className="col-span-1 text-sm font-varela place-self-center">{props.live ? 'Thru' : '$$'}</div>
				{/* <div className="col-span-2 text-sm font-varela place-self-center">Rounds</div> */}
				<div className="col-span-1 text-xs font-varela place-self-center">Projected Earnings</div>
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

export function PGCLeaderboardItem(props) {
	const [showInfo, setShowInfo] = useState(false)
	const window = useWindowDimensions()
	function PGCLeaderboardItemMini(props) {
		return (
			<div className="grid grid-flow-row grid-cols-10 text-center py-1">
				<div className="font-varela place-self-center text-sm col-span-2">
					{props.info.Score === '+100' ? 'CUT' : props.info.ShowRk}&nbsp;&nbsp;&nbsp;{getRkChange(props.info.RkChange)}
				</div>
				<div className="font-varela place-self-center text-base col-span-4">
					{props.info.Name}
					{littlefucker(props.info.Name, props.data)}
				</div>
				<div className="font-varela place-self-center text-sm col-span-2">{formatScore(props.info.Score)}</div>
				<div className="font-varela place-self-center text-2xs col-span-1">
					{props.live ? formatScore(props.info.Today) : +props.info.Points === 0 ? '-' : props.info.Points}
				</div>
				<div className="font-varela place-self-center text-2xs col-span-1 whitespace-nowrap">
					{props.live ? props.info.Thru : formatMoney(props.info.Earnings)}
				</div>
			</div>
		)
	}
	function PGCLeaderboardItemPhone(props) {
		return (
			<div className="grid grid-flow-row grid-cols-10 text-center py-1">
				<div className="font-varela place-self-center text-sm col-span-2">
					{props.info.Score === '+100' ? 'CUT' : props.info.ShowRk}&nbsp;&nbsp;&nbsp;{getRkChange(props.info.RkChange)}
				</div>
				<div className="font-varela place-self-center text-lg col-span-4">
					{props.info.Name}
					{littlefucker(props.info.Name, props.data)}
				</div>
				<div className="font-varela place-self-center text-sm col-span-2">{formatScore(props.info.Score)}</div>
				<div className="font-varela place-self-center text-xs col-span-1">
					{props.live ? formatScore(props.info.Today) : +props.info.Points === 0 ? '-' : props.info.Points}
				</div>
				<div className="font-varela place-self-center text-xs col-span-1 whitespace-nowrap">
					{props.live ? props.info.Thru : formatMoney(props.info.Earnings)}
				</div>
			</div>
		)
	}
	function PGCLeaderboardItemTablet(props) {
		return (
			<div className="grid grid-flow-row grid-cols-10 text-center py-1">
				<div className="font-varela place-self-center text-base col-span-2">
					{props.info.Score === '+100' ? 'CUT' : props.info.ShowRk}&nbsp;&nbsp;&nbsp;{getRkChange(props.info.RkChange)}
				</div>
				<div className="font-varela place-self-center text-lg col-span-4">
					{props.info.Name}
					{littlefucker(props.info.Name, props.data)}
				</div>
				<div className="font-varela place-self-center text-base col-span-2">{formatScore(props.info.Score)}</div>
				<div className="font-varela place-self-center text-sm col-span-1">
					{props.live ? formatScore(props.info.Today) : +props.info.Points === 0 ? '-' : props.info.Points}
				</div>
				<div className="font-varela place-self-center text-sm col-span-1 whitespace-nowrap">
					{props.live ? props.info.Thru : formatMoney(props.info.Earnings)}
				</div>
			</div>
		)
	}
	function PGCLeaderboardItemDesktop(props) {
		console.log(+props.standings.FullRk.replace('T', '') - +props.info.ShowRk.replace('T', '') - (props.info.TourID === '2' && 30))
		return (
			<div className="grid grid-flow-row grid-cols-9 text-center py-1">
				<div className="font-varela place-self-center text-sm col-span-1">
					{props.info.Score === '+100' ? 'CUT' : props.info.ShowRk}&nbsp;&nbsp;{getRkChange(props.info.RkChange)}
				</div>
				<div className="font-varela place-self-center text-xl col-span-3">
					{props.info.Name}
					{littlefucker(props.info.Name, props.data)}
				</div>
				<div className="font-varela place-self-center text-lg col-span-1">{formatScore(props.info.Score)}</div>
				<div className="font-varela place-self-center text-sm col-span-1">
					{props.live ? formatScore(props.info.Today) : +props.info.Points === 0 ? '-' : props.info.Points}
				</div>
				<div className="font-varela place-self-center text-xs col-span-1 whitespace-nowrap">
					{props.live ? props.info.Thru : formatMoney(props.info.Earnings)}
				</div>
				{/* <div className="font-varela place-self-center text-xs col-span-2">{`${props.info.R1}${props.info.R2 === '' ? '' : ' - '}${props.info.R2}${
					props.info.R3
				}${props.info.R4 === '' ? '' : ' - '}${props.info.R4}`}</div> */}
				{/* <div className="font-varela place-self-center text-xs col-span-1 whitespace-nowrap">{Math.round(props.info.makeCut * 1000) / 10}%</div> */}
				<div className="font-varela py-1 text-sm text-center place-self-center col-span-1">
					{formatMoney(+props.standings.Earnings + +props.info.Earnings)}
				</div>
				<div className="font-varela py-1 text-sm text-center place-self-center col-span-1">
					{addRankingSuffix(props.standings.FullRk - (props.info.TourID === '2' && 30))}{' '}
					{getRkChange(+props.standings.FullRk.replace('T', '') - +props.info.ShowRk.replace('T', '') - (props.info.TourID === '2' && 30))}
				</div>
			</div>
		)
	}
	return (
		<div className="border-b border-dashed border-gray-200 max-w-xl mx-auto" onClick={() => setShowInfo(!showInfo)}>
			<>
				{window.width < 400 ? (
					<PGCLeaderboardItemMini {...props} />
				) : window.width < 550 ? (
					<PGCLeaderboardItemPhone {...props} />
				) : window.width < 925 ? (
					<PGCLeaderboardItemTablet {...props} />
				) : (
					<PGCLeaderboardItemDesktop {...props} />
				)}
			</>
			{showInfo ? <PGCLeaderboardItemInfo {...props} /> : <></>}
		</div>
	)
}
function PGCLeaderboardItemInfo(props) {
	return (
		<div className="mt-1 mb-6 mx-auto">
			<TeamRounds {...props} />
			<PGCTeamTable {...props} />
			{props.info.tourneyID > 1 && props.info.tourneyID <= 16 && props.info.R4 === '' && <ProjStandings {...props} />}
		</div>
	)
}

function TeamRounds(props) {
	const window = useWindowDimensions()
	function TeamRoundsPhone(props) {
		return (
			<>
				{props.info.R2 === '' ? (
					<>
						<div className="mx-auto grid grid-cols-6">
							<div className="font-varela font-bold text-xs text-center place-self-center col-span-3">Rounds</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
							{/* <div className="font-varela font-bold text-xs text-center place-self-center">Make Cut</div> */}
							<div className="font-varela font-bold text-xs text-center place-self-center">Projected Earnings</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Starting Position</div>
						</div>
						<div className="mx-auto grid grid-cols-6 mb-1">
							<div className="font-varela py-1 text-sm text-center place-self-center col-span-3">
								{props.info.R1}
								{props.info.R2 && ' - ' + props.info.R2}
								{props.info.R3 && ' - ' + props.info.R3}
								{props.info.R4 && ' - ' + props.info.R4}
							</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">{props.info.Total}</div>
							{/* <div className="font-varela py-1 text-sm text-center place-self-center">{Math.round(props.info.makeCut * 1000) / 10}%</div> */}
							<div className="font-varela py-1 text-sm text-center place-self-center">
								{formatMoney(+props.standings.Earnings + +props.info.Earnings)}
							</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">
								{addRankingSuffix(props.standings.FullRk - (props.info.TourID === '2' && 30))}{' '}
								{getRkChange(+props.standings.FullRk.replace('T', '') - +props.info.ShowRk.replace('T', '') - (props.info.TourID === '2' && 30))}
							</div>
						</div>
					</>
				) : (
					<>
						<div className="mx-auto grid grid-cols-6">
							<div className="font-varela font-bold text-xs text-center place-self-center col-span-3">Rounds</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Projected Earnings</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Starting Position</div>
						</div>
						<div className="mx-auto grid grid-cols-6 mb-1">
							<div className="font-varela py-1 text-sm text-center place-self-center col-span-3">
								{props.info.R1}
								{props.info.R2 && ' - ' + props.info.R2}
								{props.info.R3 && ' - ' + props.info.R3}
								{props.info.R4 && ' - ' + props.info.R4}
							</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">{props.info.Total}</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">
								{formatMoney(+props.standings.Earnings + +props.info.Earnings)}
							</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">
								{addRankingSuffix(props.standings.FullRk - (props.info.TourID === '2' && 30))}{' '}
								{getRkChange(+props.standings.FullRk.replace('T', '') - +props.info.ShowRk.replace('T', '') - (props.info.TourID === '2' && 30))}
							</div>
						</div>
					</>
				)}
			</>
		)
	}
	function TeamRoundsTablet(props) {
		return (
			<>
				{props.info.R2 === '' ? (
					<>
						<div className="mx-auto grid grid-cols-6">
							<div className="font-varela font-bold text-xs text-center place-self-center col-span-3">Rounds</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
							{/* <div className="font-varela font-bold text-xs text-center place-self-center">Make Cut</div> */}
							<div className="font-varela font-bold text-xs text-center place-self-center">Projected Earnings</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Starting Position</div>
						</div>
						<div className="mx-auto grid grid-cols-6 mb-1">
							<div className="font-varela py-1 text-sm text-center place-self-center col-span-3">
								{props.info.R1}
								{props.info.R2 && ' - ' + props.info.R2}
								{props.info.R3 && ' - ' + props.info.R3}
								{props.info.R4 && ' - ' + props.info.R4}
							</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">{props.info.Total}</div>
							{/* <div className="font-varela py-1 text-sm text-center place-self-center">{Math.round(props.info.makeCut * 1000) / 10}%</div> */}
							<div className="font-varela py-1 text-sm text-center place-self-center">
								{formatMoney(+props.standings.Earnings + +props.info.Earnings)}
							</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">
								{addRankingSuffix(props.standings.FullRk - (props.info.TourID === '2' && 30))}{' '}
								{getRkChange(+props.standings.FullRk.replace('T', '') - +props.info.ShowRk.replace('T', '') - (props.info.TourID === '2' && 30))}
							</div>
						</div>
					</>
				) : (
					<>
						<div className="mx-auto grid grid-cols-6">
							<div className="font-varela font-bold text-xs text-center place-self-center col-span-3">Rounds</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Total</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Projected Earnings</div>
							<div className="font-varela font-bold text-xs text-center place-self-center">Starting Position</div>
						</div>
						<div className="mx-auto grid grid-cols-6 mb-1">
							<div className="font-varela py-1 text-sm text-center place-self-center col-span-3">
								{props.info.R1}
								{props.info.R2 && ' - ' + props.info.R2}
								{props.info.R3 && ' - ' + props.info.R3}
								{props.info.R4 && ' - ' + props.info.R4}
							</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">{props.info.Total}</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">
								{formatMoney(+props.standings.Earnings + +props.info.Earnings)}
							</div>
							<div className="font-varela py-1 text-sm text-center place-self-center">
								{addRankingSuffix(props.standings.FullRk - (props.info.TourID === '2' && 30))}{' '}
								{getRkChange(+props.standings.FullRk.replace('T', '') - +props.info.ShowRk.replace('T', '') - (props.info.TourID === '2' && 30))}
							</div>
						</div>
					</>
				)}
			</>
		)
	}
	return <>{window.width < 550 ? <TeamRoundsPhone {...props} /> : window.width < 925 ? <TeamRoundsTablet {...props} /> : <></>}</>
}
function PGCTeamTable(props) {
	const window = useWindowDimensions()
	function PGCTeamTableMini(props) {
		let golfers = [
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferOne)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferTwo)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferThree)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferFour)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferFive)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferSix)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferSeven)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferEight)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferNine)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferTen)[0],
		]
		return (
			<table className="text-center w-11/12 mx-auto mb-2 table-auto">
				<thead className="bg-gray-600 text-gray-100">
					<tr>
						<td className="text-xs font-bold">Rk</td>
						<td className="text-xs font-bold col=span-2">Golfer</td>
						<td className="text-xs font-bold">Score</td>
						<td className="text-xs font-bold">Today</td>
					</tr>
				</thead>
				<tbody className={`bg-gray-50 ${props.tourneyID === 19 ? '[&>*:nth-child(3)]:border-b [&>*:nth-child(3)]:border-gray-400' : props.info.R2 !== '' || props.tourneyID === 18 ? '[&>*:nth-child(5)]:border-b [&>*:nth-child(5)]:border-gray-400' : ''}`}>
					{golfers?.map(obj => {
						return (
							<tr
								className={`${
									(props.info.R1 !== '-' &&
										(props.info.R2 === '-' || props.info.Today === '-') &&
										props.info.R3 === '-' &&
										(+props.info.Thru >= 9 || props.info.Thru === 'F') &&
										+obj.currentPos.replace('T', '') > 65) ||
									obj.currentPos === 'CUT' ||
									obj.currentPos === 'WD' ||
									obj.currentPos === 'DQ'
										? 'text-gray-400'
										: 'text-gray-800'
								}`}>
								<td className="text-xs">{obj.currentPos}</td>
								<td className="text-xs">{obj.playerName}</td>
								<td className="text-xs">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ' ? '-' : formatScore(obj.currentScore)}
								</td>
								<td className="text-xs">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ'
										? '-'
										: `${formatScore(obj.today)} (${formatThru(
												obj.thru,
												props.info.R1 === ''
													? obj.r1TeeTime
													: props.info.R2 === ''
													? obj.r2TeeTime
													: props.info.R3 === ''
													? obj.r3TeeTime
													: props.info.R4 === ''
													? obj.r4TeeTime
													: ''
										  )})`}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}
	function PGCTeamTablePhone(props) {
		let golfers = [
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferOne)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferTwo)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferThree)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferFour)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferFive)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferSix)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferSeven)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferEight)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferNine)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferTen)[0],
		]
		return (
			<table className="text-center w-5/6 mx-auto mb-2 table-auto">
				<thead className="bg-gray-600 text-gray-100">
					<tr>
						<td className="text-xs font-bold">Rk</td>
						<td className="text-xs font-bold col=span-2">Golfer</td>
						<td className="text-xs font-bold">Score</td>
						<td className="text-xs font-bold">Today</td>
					</tr>
				</thead>
				<tbody className={`bg-gray-50 ${props.tourneyID === 19 ? '[&>*:nth-child(3)]:border-b [&>*:nth-child(3)]:border-gray-400' : props.info.R2 !== '' || props.tourneyID === 18 ? '[&>*:nth-child(5)]:border-b [&>*:nth-child(5)]:border-gray-400' : ''}`}>
					{golfers?.map(obj => {
						return (
							<tr
								className={`${
									(props.info.R1 !== '-' &&
										(props.info.R2 === '-' || props.info.Today === '-') &&
										props.info.R3 === '-' &&
										(+props.info.Thru >= 9 || props.info.Thru === 'F') &&
										+obj.currentPos.replace('T', '') > 65) ||
									obj.currentPos === 'CUT' ||
									obj.currentPos === 'WD' ||
									obj.currentPos === 'DQ'
										? 'text-gray-400'
										: 'text-gray-800'
								}`}>
								<td className="text-sm">{obj.currentPos}</td>
								<td className="text-sm">{obj.playerName}</td>
								<td className="text-sm">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ' ? '-' : formatScore(obj.currentScore)}
								</td>
								<td className="text-sm">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ'
										? '-'
										: `${formatScore(obj.today)} (${formatThru(
												obj.thru,
												props.info.R1 === ''
													? obj.r1TeeTime
													: props.info.R2 === ''
													? obj.r2TeeTime
													: props.info.R3 === ''
													? obj.r3TeeTime
													: props.info.R4 === ''
													? obj.r4TeeTime
													: ''
										  )})`}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}
	function PGCTeamTableTablet(props) {
		let golfers = [
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferOne)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferTwo)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferThree)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferFour)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferFive)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferSix)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferSeven)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferEight)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferNine)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferTen)[0],
		]
		return (
			<table className="text-center w-11/12 mx-auto mb-2 table-auto">
				<thead className="bg-gray-600 text-gray-100">
					<tr>
						<td className="text-xs font-bold">Rk</td>
						<td className="text-xs font-bold col=span-2">Golfer</td>
						<td className="text-xs font-bold">Score</td>
						<td className="text-xs font-bold">Today</td>
						<td className="text-xs font-bold">{props.info.R2 === '' ? 'Make Cut' : 'Top Ten'}</td>
						<td className="text-xs font-bold">{props.info.R2 === '' ? 'Top Ten' : 'Win'}</td>
					</tr>
				</thead>
				<tbody className={`bg-gray-50 ${props.tourneyID === 19 ? '[&>*:nth-child(3)]:border-b [&>*:nth-child(3)]:border-gray-400' : props.info.R2 !== '' || props.tourneyID === 18 ? '[&>*:nth-child(5)]:border-b [&>*:nth-child(5)]:border-gray-400' : ''}`}>
					{golfers?.map(obj => {
						return (
							<tr
								className={`${
									(props.info.R1 !== '-' &&
										(props.info.R2 === '-' || props.info.Today === '-') &&
										props.info.R3 === '-' &&
										(+props.info.Thru >= 9 || props.info.Thru === 'F') &&
										+obj.currentPos.replace('T', '') > 65) ||
									obj.currentPos === 'CUT' ||
									obj.currentPos === 'WD' ||
									obj.currentPos === 'DQ'
										? 'text-gray-400'
										: 'text-gray-800'
								}`}>
								<td className="text-sm">{obj.currentPos}</td>
								<td className="text-sm">{obj.playerName}</td>
								<td className="text-sm">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ' ? '-' : formatScore(obj.currentScore)}
								</td>
								<td className="text-sm">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ'
										? '-'
										: `${formatScore(obj.today)} (${formatThru(
												obj.thru,
												props.info.R1 === ''
													? obj.r1TeeTime
													: props.info.R2 === ''
													? obj.r2TeeTime
													: props.info.R3 === ''
													? obj.r3TeeTime
													: props.info.R4 === ''
													? obj.r4TeeTime
													: ''
										  )})`}
								</td>
								<td className="text-sm">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ'
										? '-'
										: `${Math.round((props.info.R2 === '' ? obj.makeCut : obj.topTen) * 1000) / 10}%`}
								</td>
								<td className="text-sm">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ'
										? '-'
										: `${Math.round((props.info.R2 === '' ? obj.topTen : obj.win) * 1000) / 10}%`}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}
	function PGCTeamTableDesktop(props) {
		let golfers = [
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferOne)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferTwo)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferThree)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferFour)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferFive)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferSix)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferSeven)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferEight)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferNine)[0],
			props.pgaLeaderboard.filter(obj => obj.dgID === props.info.golferTen)[0],
		]
		return (
			<table className="text-center w-11/12 mx-auto mb-2 table-auto">
				<thead className="bg-gray-600 text-gray-100">
					<tr>
						<td className="text-sm font-bold">Rk</td>
						<td className="text-sm font-bold col=span-2">Golfer</td>
						<td className="text-sm font-bold">Score</td>
						<td className="text-sm font-bold">Today</td>
						<td className="text-sm font-bold">{props.info.R2 === '' ? 'Make Cut' : 'Top Ten'}</td>
						<td className="text-sm font-bold">{props.info.R2 === '' ? 'Top Ten' : 'Win'}</td>
					</tr>
				</thead>
				<tbody className={`bg-gray-50 ${props.tourneyID === 19 ? '[&>*:nth-child(3)]:border-b [&>*:nth-child(3)]:border-gray-400' : props.info.R2 !== '' || props.tourneyID === 18 ? '[&>*:nth-child(5)]:border-b [&>*:nth-child(5)]:border-gray-400' : ''}`}>
					{golfers?.map(obj => {
						return (
							<tr
								className={`${
									(props.info.R1 !== '-' &&
										(props.info.R2 === '-' || props.info.Today === '-') &&
										props.info.R3 === '-' &&
										(+props.info.Thru >= 9 || props.info.Thru === 'F') &&
										+obj.currentPos.replace('T', '') > 65) ||
									obj.currentPos === 'CUT' ||
									obj.currentPos === 'WD' ||
									obj.currentPos === 'DQ'
										? 'text-gray-400'
										: 'text-gray-800'
								}`}>
								<td className="text-base">{obj.currentPos}</td>
								<td className="text-base">{obj.playerName}</td>
								<td className="text-base">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ' ? '-' : formatScore(obj.currentScore)}
								</td>
								<td className="text-base">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ'
										? '-'
										: `${formatScore(obj.today)} (${formatThru(
												obj.thru,
												props.info.R1 === ''
													? obj.r1TeeTime
													: props.info.R2 === ''
													? obj.r2TeeTime
													: props.info.R3 === ''
													? obj.r3TeeTime
													: props.info.R4 === ''
													? obj.r4TeeTime
													: ''
										  )})`}
								</td>
								<td className="text-base">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ'
										? '-'
										: `${Math.round((props.info.R2 === '' ? obj.makeCut : obj.topTen) * 1000) / 10}%`}
								</td>
								<td className="text-base">
									{obj.currentPos === 'CUT' || obj.currentPos === 'WD' || obj.currentPos === 'DQ'
										? '-'
										: `${Math.round((props.info.R2 === '' ? obj.topTen : obj.win) * 1000) / 10}%`}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}
	return (
		<>
			{window.width < 400 ? (
				<PGCTeamTableMini {...props} />
			) : window.width < 550 ? (
				<PGCTeamTablePhone {...props} />
			) : window.width < 925 ? (
				<PGCTeamTableTablet {...props} />
			) : (
				<PGCTeamTableDesktop {...props} />
			)}
		</>
	)
}
function ProjStandings(props) {
	const window = useWindowDimensions()
	function ProjStandingsPhone(props) {
		return (
			<div className="w-3/6 mx-auto bg-gray-50 rounded-lg">
				<div className="text-center py-1 font-varela text-gray-800 font-bold text-base">Standings</div>
				<div className="mx-auto grid grid-cols-2">
					<div className="font-varela font-bold text-xs text-center place-self-center">Current</div>
					<div className="font-varela font-bold text-xs text-center place-self-center">Projected</div>
				</div>
				<div className="mx-auto grid grid-cols-2 mb-1">
					<div
						className={`font-varela py-1 text-sm text-center place-self-center ${
							+(props.standings.ShowRk[0] === 'T' ? props.standings.ShowRk.slice(1) : props.standings.ShowRk) <= 15
								? 'text-yellow-700 font-bold'
								: +(props.standings.ShowRk[0] === 'T' ? props.standings.ShowRk.slice(1) : props.standings.ShowRk) <= 30
								? 'text-zinc-700 font-semibold'
								: 'text-rose-800'
						}`}>
						{props.standings.ShowRk[0] === 'T' ? 'T' + addRankingSuffix(props.standings.ShowRk.slice(1)) : addRankingSuffix(props.standings.ShowRk)}
					</div>
					<div
						className={`font-varela py-1 text-sm text-center place-self-center ${
							+(props.standings.ProjRk[0] === 'T' ? props.standings.ProjRk.slice(1) : props.standings.ProjRk) <= 15
								? 'text-yellow-700 font-bold'
								: +(props.standings.ProjRk[0] === 'T' ? props.standings.ProjRk.slice(1) : props.standings.ProjRk) <= 30
								? 'text-zinc-700 font-semibold'
								: 'text-rose-800'
						}`}>
						{props.standings.ProjRk[0] === 'T' ? 'T' + addRankingSuffix(props.standings.ProjRk.slice(1)) : addRankingSuffix(props.standings.ProjRk)}
					</div>
				</div>
			</div>
		)
	}
	function ProjStandingsTablet(props) {
		return (
			<div className="w-4/6 mx-auto bg-gray-50 rounded-lg">
				<div className="text-center py-1 font-varela text-gray-800 font-bold text-lg">Standings</div>
				<div className="mx-auto grid grid-cols-2">
					<div className="font-varela font-bold text-sm text-center place-self-center">Current</div>
					<div className="font-varela font-bold text-sm text-center place-self-center">Projected</div>
				</div>
				<div className="mx-auto grid grid-cols-2 mb-1">
					<div
						className={`font-varela py-1 text-base text-center place-self-center ${
							+(props.standings.ShowRk[0] === 'T' ? props.standings.ShowRk.slice(1) : props.standings.ShowRk) <= 15
								? 'text-yellow-700 font-bold'
								: +(props.standings.ShowRk[0] === 'T' ? props.standings.ShowRk.slice(1) : props.standings.ShowRk) <= 30
								? 'text-zinc-700 font-semibold'
								: 'text-rose-800'
						}`}>
						{`${
							props.standings.ShowRk[0] === 'T' ? 'T' + addRankingSuffix(props.standings.ShowRk.slice(1)) : addRankingSuffix(props.standings.ShowRk)
						} - ${props.standings.Points} pts`}
					</div>
					<div
						className={`font-varela py-1 text-base text-center place-self-center ${
							+(props.standings.ProjRk[0] === 'T' ? props.standings.ProjRk.slice(1) : props.standings.ProjRk) <= 15
								? 'text-yellow-700 font-bold'
								: +(props.standings.ProjRk[0] === 'T' ? props.standings.ProjRk.slice(1) : props.standings.ProjRk) <= 30
								? 'text-zinc-700 font-semibold'
								: 'text-rose-800'
						}`}>
						{`${
							props.standings.ProjRk[0] === 'T' ? 'T' + addRankingSuffix(props.standings.ProjRk.slice(1)) : addRankingSuffix(props.standings.ProjRk)
						} - ${props.standings.ProjPoints} pts`}
					</div>
				</div>
			</div>
		)
	}
	function ProjStandingsDesktop(props) {
		return (
			<div className="w-4/6 mx-auto bg-gray-50 rounded-lg">
				<div className="text-lg text-center py-1 font-varela text-gray-800 font-bold">Standings</div>
				<div className="mx-auto grid grid-cols-2">
					<div className="font-varela font-bold text-base text-center place-self-center">Current</div>
					<div className="font-varela font-bold text-base text-center place-self-center">Projected</div>
				</div>
				<div className="mx-auto grid grid-cols-2 mb-1">
					<div
						className={`font-varela py-1 text-lg text-center place-self-center ${
							+(props.standings.ShowRk[0] === 'T' ? props.standings.ShowRk.slice(1) : props.standings.ShowRk) <= 15
								? 'text-yellow-700 font-bold'
								: +(props.standings.ShowRk[0] === 'T' ? props.standings.ShowRk.slice(1) : props.standings.ShowRk) <= 30
								? 'text-zinc-700 font-semibold'
								: 'text-rose-800'
						}`}>
						{`${
							props.standings.ShowRk[0] === 'T' ? 'T' + addRankingSuffix(props.standings.ShowRk.slice(1)) : addRankingSuffix(props.standings.ShowRk)
						} - ${props.standings.Points} pts`}
					</div>
					<div
						className={`font-varela py-1 text-lg text-center place-self-center ${
							+(props.standings.ProjRk[0] === 'T' ? props.standings.ProjRk.slice(1) : props.standings.ProjRk) <= 15
								? 'text-yellow-700 font-bold'
								: +(props.standings.ProjRk[0] === 'T' ? props.standings.ProjRk.slice(1) : props.standings.ProjRk) <= 30
								? 'text-zinc-700 font-semibold'
								: 'text-rose-800'
						}`}>
						{`${
							props.standings.ProjRk[0] === 'T' ? 'T' + addRankingSuffix(props.standings.ProjRk.slice(1)) : addRankingSuffix(props.standings.ProjRk)
						} - ${props.standings.ProjPoints} pts`}
					</div>
				</div>
			</div>
		)
	}
	return (
		<>
			{window.width < 550 ? (
				<ProjStandingsPhone {...props} />
			) : window.width < 925 ? (
				<ProjStandingsTablet {...props} />
			) : (
				<ProjStandingsDesktop {...props} />
			)}
		</>
	)
}
