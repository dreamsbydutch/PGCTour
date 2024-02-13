import React from 'react'

export default function ChampAlert(props) {
    const leaderboards = [props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '1'),props.tourney.pgcLeaderboard.filter(obj => obj.TourID === '2')]
    return (
        <>
            <a href={"#/leaderboard/" + props.tourney.tourneyID + "?tour=PGC"}>
                <div className='grid grid-flow-row grid-cols-10 text-center py-3 mb-8 bg-amber-100 rounded-2xl hover:text-amber-900 max-w-screen-md mx-auto shadow-md'>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-3"><img alt={props.tourney.Tourney} src={props.tourney.Logo} /></div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-7 font-bold text-lg text-amber-900 xs:text-xl sm:text-2xl md:text-3xl">{props.tourney.Tourney} PGC Champion</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-4 row-span-2 font-bold text-xl text-amber-900 xs:text-2xl sm:text-3xl">{leaderboards[0][0].Name}</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-2 font-bold text-lg text-amber-900 xs:text-xl sm:text:2xl md:text-3xl">{leaderboards[0][0].Score}</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G1Name}<br />({leaderboards[0][0].G1Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G2Name}<br />({leaderboards[0][0].G2Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G3Name}<br />({leaderboards[0][0].G3Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G4Name}<br />({leaderboards[0][0].G4Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G5Name}<br />({leaderboards[0][0].G5Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G6Name}<br />({leaderboards[0][0].G6Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G7Name}<br />({leaderboards[0][0].G7Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G8Name}<br />({leaderboards[0][0].G8Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G9Name}<br />({leaderboards[0][0].G9Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[0][0].G10Name}<br />({leaderboards[0][0].G10Total})</div>
                </div>
            </a>
            <a href={"#/leaderboard/" + props.tourney.tourneyID + "?tour=DbyD"}>
                <div className='grid grid-flow-row grid-cols-10 text-center py-3 mb-8 bg-amber-100 rounded-2xl hover:text-amber-900 max-w-screen-md mx-auto shadow-md'>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-3"><img alt={props.tourney.Tourney} src={props.tourney.Logo} /></div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-7 font-bold text-lg text-amber-900 xs:text-xl sm:text-2xl md:text-3xl">{props.tourney.Tourney} DbyD Champion</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-4 row-span-2 font-bold text-xl text-amber-900 xs:text-2xl sm:text-3xl">{leaderboards[1][0].Name}</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-3 row-span-2 font-bold text-lg text-amber-900 xs:text-xl sm:text:2xl md:text-3xl">{leaderboards[1][0].Score}</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G1Name}<br />({leaderboards[1][0].G1Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G2Name}<br />({leaderboards[1][0].G2Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G3Name}<br />({leaderboards[1][0].G3Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G4Name}<br />({leaderboards[1][0].G4Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G5Name}<br />({leaderboards[1][0].G5Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G6Name}<br />({leaderboards[1][0].G6Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G7Name}<br />({leaderboards[1][0].G7Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G8Name}<br />({leaderboards[1][0].G8Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G9Name}<br />({leaderboards[1][0].G9Total})</div>
                    <div className="text-center font-varela place-self-center py-1 px-1 col-span-2 row-span-1 font-bold text-2xs text-amber-900 2xs:text-xs md:text-sm">{leaderboards[1][0].G10Name}<br />({leaderboards[1][0].G10Total})</div>
                </div>
            </a>
        </>
    )
}