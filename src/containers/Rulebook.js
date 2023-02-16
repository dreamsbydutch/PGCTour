import React from 'react'

function Rulebook() {

    return (
        <>
            <div className="text-5xl sm:text-6xl md:text-7xl pb-4 mb-6 font-yellowtail text-center border-b-2 border-gray-500">PGC Tour Rulebook</div>
            <div className='text-center'>
                <div className="font-varela place-self-center text-3xl font-bold mt-12">Schedule</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">The sixteen tournaments on the PGC Tour schedule that will be split into 3 tiers.</div>
                <div className="font-varela place-self-center text-sm my-2">Majors - The Masters, PGA Championship, U.S. Open, The Open Championship</div>
                <div className="font-varela place-self-center text-sm my-2">Mid Tier - Waste Management Open, Arnold Palmer Inviational, The Players Championship, RBC Heritage, Wells Fargo Championship, The Memorial Torunament</div>
                <div className="font-varela place-self-center text-sm my-2">Bottom Tier - The Genesis Invitational, Valero Texas Open, AT&T Byron Nelson, RBC Canadian Open, Travelers Championship, Genesis Scottish Open</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">Each tier will have a different points and payouts. A full schedule and points/payouts structure is outlined below.</div>

                <div className="font-varela place-self-center text-3xl font-bold mt-12">Rosters</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">The field for each tournament will be split into five groups that will be finalized on the Monday morning prior to each tournament. Groups will be chosen based on the <a href="/pgctour/#/golferstats">PGC Rating</a>.</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">Players choose 2 golfers from each of the 5 groupings to create your 10 golfer team for the tournament. You will make new picks and have a new team for each tournament on the schedule.</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">Groups are set on Monday morning of tournament week.</div>
                <div className="font-varela place-self-center text-sm my-2">Golfers that are added to the tournament field after the groups are set will be left out of the PGC field.</div>
                <div className="font-varela place-self-center text-sm my-2">If a golfer withdraws prior to the tournament teeing off and remains on your roster at tee off, then that golfer will be replaced with the highest world ranked golfer from that group.</div>

                <div className="font-varela place-self-center text-3xl font-bold mt-12">Scoring</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">During Rounds 1 and 2 of the tournament your team’s score will be the average strokes of all 10 golfers on your team.</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">Rounds 3 and 4 of the tournament your team’s score will be the average strokes of the 5 lowest golfers on your team that day.</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">The leaderboard will look just like a PGA leaderboard and tracked live on the Live Leaderboard page.</div>
                <div className="font-varela place-self-center text-sm my-2">Teams must have 5 golfers make the weekend cut line or their team will be cut from the PGC tournament. Any golfers that withdraw before cut day will receive a score of 8-over par until cut day. Any golfer that withdraws after cut day receives a score of 8-over par on the day they participated but did not finish and then CUT on the days they do not participate at all.</div>

                <div className="font-varela place-self-center text-3xl font-bold mt-12">Playoffs</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">After every tournament of the season the top 35 finishers will receive playoff points.</div>
                <div className="font-varela place-self-center text-sm my-2">Major tournaments have a total points purse of 4325 points with the winner taking 1000 points.</div>
                <div className="font-varela place-self-center text-sm my-2">WGC tournaments have a total points purse of 3150 points with the winner taking 750 points.</div>
                <div className="font-varela place-self-center text-sm my-2">other tournaments have a total points purse of 1925 points with the winner taking 450 points.</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">At the end of the regular season the top 35 players in the standings will make the PGC Playoff tournament.</div>
                <div className="font-varela place-self-center text-sm my-2">Each team will start the playoff tournament at a starting score based on the distribution below.</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">The playoff tournament will be 12-rounds long throughout all three FedEx Cup Playoff events (FedEx-StJude Championship, BMW Championship, TOUR Championship).</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">Players that qualify for the playoff tournament will pick their team prior to the FedEx-StJude Championship as usual and that will be your team of golfers throughout the entire playoffs.</div>
                <div className="font-varela place-self-center text-sm my-2">The FedEx-StJude Championship will run just like a normal tournament.</div>
                <div className="font-varela place-self-center text-sm my-2">The BMW Championship will only count your top 5 golfers in all 4 rounds.</div>
                <div className="font-varela place-self-center text-sm my-2">The TOUR Championship will only count your top 3 golfers in all 4 rounds.</div>
                <div className="font-varela place-self-center text-sm my-2">The TOUR Championship will only count the golfer's actual score and not their starting strokes awarded by the PGA</div>

                <div className="font-varela place-self-center text-3xl font-bold mt-12">Payouts</div>
                <div className="font-varela place-self-center mt-6 mb-2 text-lg">After every tournament the top 7-15 finishers will win money earnings. Earnings will accumulate during the season and will be paid out at the end of the year.</div>
                <div className="font-varela place-self-center text-sm my-2">Major Champions will win $150</div>
                <div className="font-varela place-self-center text-sm my-2">Mid Tier Champions will win $100</div>
                <div className="font-varela place-self-center text-sm my-2">Bottom Tier Champions will win $50</div>
                <div className="font-varela place-self-center text-sm my-2">Full distributions can be found below.</div>
                <div className="bottom"></div>

                <img className="w-full mb-6 mt-2 max-w-3xl" alt="Points and Payout distributions" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/distributions.png" />
            </div >
        </>
    )
}

export default Rulebook
