import React, { useState } from 'react'

export default function GolferStats(props) {
    return (
        <>
            <div className="text-5xl pb-4 mb-6 font-yellowtail text-center border-b-2 border-gray-500">PGC Golfer Ratings</div>
            <div className="text-sm pb-2 text-gray-400 text-center">The PGC Rating uses 13 different PGA Tour statistics from the past three seasons to create a single comprehensive rating for each golfer on the PGA Tour.</div>
            <div className="">
                <div className="pt-8 pb-1 grid grid-flow-row grid-cols-9 text-center">
                    <div className="font-varela place-self-center font-extrabold text-xs col-span-2">PGC Rk</div>
                    <div className="font-varela place-self-center font-extrabold text-base col-span-5">Golfer</div>
                    <div className="font-varela place-self-center font-extrabold text-xs col-span-2">PGC Rating</div>
                </div>
                {props.data.map(obj => <GolferStatsItem data={obj} key={obj['PGCRK']} />)}
            </div>
        </>
    )
}




function GolferStatsItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='' onClick={() => setShowInfo(!showInfo)}>
            <div className='grid grid-flow-row grid-cols-9 text-center border-t-2 border-dotted border-gray-300 py-1'>
                <div className="font-varela place-self-center col-span-2 text-xs">{props.data['PGCRK']}</div>
                <div className="font-varela place-self-center col-span-5 text-md">{props.data['PLAYER NAME']}</div>
                <div className="font-varela place-self-center col-span-2 text-sm">{parseFloat(props.data['PGCRATING']).toFixed(1)}</div>
            </div>
            {/* {showInfo ? <GolferStatsItemInfo data={props.data} /> : <></>} */}
        </div>
    )
}

// function GolferStatsItemInfo(props) {

//     return (
//         <div className="mt-1 mb-5">
//             <div className="m-auto grid grid-cols-2">
//                 <div className="golferstatsitem-info-label">World Golf Rank</div>
//                 <div className="golferstatsitem-info">{props.data.OWGRRtg} {rankPostfix(props.data.OWGRRk)}</div>
//             </div>
//             <div className="m-auto grid grid-cols-2">
//                 <div className="golferstatsitem-info-label">Total Strokes Gained</div>
//                 <div className="golferstatsitem-info">{props.data.SGRtg} {rankPostfix(props.data.SGRk)}</div>
//             </div>
//             <div className="m-auto grid grid-cols-2">
//                 <div className="golferstatsitem-info-label">FedEx Cup Points</div>
//                 <div className="golferstatsitem-info">{props.data.FedExRtg} {rankPostfix(props.data.FedExRk)}</div>
//             </div>
//             <div className="m-auto grid grid-cols-2">
//                 <div className="golferstatsitem-info-label">Total Earnings</div>
//                 <div className="golferstatsitem-info">{props.data.EarningsRtg} {rankPostfix(props.data.EarningsRk)}</div>
//             </div>
//             <div className="m-auto grid grid-cols-2">
//                 <div className="golferstatsitem-info-label">Scoring Average</div>
//                 <div className="golferstatsitem-info">{props.data.ScrAvgRtg} {rankPostfix(props.data.ScrAvgRk)}</div>
//             </div>
//         </div>
//     )
// }


// function rankPostfix(rank) {
//     var postfix = ""
//     const numberArray = Array.from(String(rank), Number);
//     if (numberArray.length === 0) { return }
//     if (numberArray[numberArray.length - 1] === 1) {
//         if (numberArray[numberArray.length - 2] === 1) { postfix = "th" } else { postfix = "st" }
//     } else if (numberArray[numberArray.length - 1] === 2) {
//         if (numberArray[numberArray.length - 2] === 1) { postfix = "th" } else { postfix = "nd" }
//     } else if (numberArray[numberArray.length - 1] === 3) {
//         if (numberArray[numberArray.length - 2] === 1) { postfix = "th" } else { postfix = "rd" }
//     } else {
//         postfix = "th"
//     }
//     return "(" + String(rank) + postfix + ")"
// }