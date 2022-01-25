import React from 'react'
import './Rulebook.css'

function Rulebook() {

    return (
        <div className='rulescontainer'>
            <div className="rulebook-subheader">Schedule</div>
            <div className="rulebook-rules">The ten tournaments on the PGC Tour schedule will be split into 3 tiers.</div>
            <div className="rulebook-subrules">Top tier/Majors - The Masters, PGA Championship, U.S. Open, The Open</div>
            <div className="rulebook-subrules">Middle Tier/WGC - WGC-Mexico Championship, Players Championship, FedEx-St Jude Invitational</div>
            <div className="rulebook-subrules">Bottom Tier/Other - Waste Management Open, RBC Heritage, The Memorial</div>
            <div className="rulebook-rules">Each tier will have a different points and payout structure outlined below.</div>

            <div className="rulebook-subheader">Rosters</div>
            <div className="rulebook-rules">The field for each tournament will be split into five groups that will be finalized on the Monday morning prior to each tournament. Groups will be chosen based on the <a href="/pgctour/#/golferstats">PGC Rating</a>.</div>
            <div className="rulebook-rules">Each member chooses 2 golfers from each of the 5 groupings to create your 10 golfer team for the tournament. You will make new picks and have a new team for each tournament on the schedule.</div>
            <div className="rulebook-subrules">If a golfer withdraws prior to the tournament teeing off and you do not edit your team prior to tee of then he will be replaced with the highest world ranked golfer in that group.</div>

            <div className="rulebook-subheader">Scoring</div>
            <div className="rulebook-rules">During Rounds 1 and 2 of the tournament your team’s score will be the average strokes of all 10 golfers on your team.</div>
            <div className="rulebook-rules">Rounds 3 and 4 of the tournament your team’s score will be the average strokes of the 5 lowest golfers on your team that day.</div>
            <div className="rulebook-rules">The leaderboard will look just like a PGA leaderboard and tracked live on the Live Leaderboard page.</div>
            <div className="rulebook-subrules">Tournaments with no cut line will use all 10 golfers for scoring during all 4 rounds of the tournament</div>
            <div className="rulebook-subrules">Teams must have 5 golfers make the weekend cut line or their team will be cut from the PGC tournament. Any golfers that withdraw before cut day will receive a score of 8-over par until cut day.</div>

            <div className="rulebook-subheader">Playoffs</div>
            <div className="rulebook-rules">After every tournament of the season the top 30 finishers will receive playoff points.</div>
            <div className="rulebook-subrules">Winners of Major tournaments will win 700 points.</div>
            <div className="rulebook-subrules">Winners of WGC tournaments will win 550 points.</div>
            <div className="rulebook-subrules">Winners of other tournaments will win 450 points.</div>
            <div className="rulebook-rules">Points will be distributed to the top 30 finishers similar to how FedEx Cup points are distributed on the PGA Tour. Full distributions can be found below.</div>
            <div className="rulebook-rules">At the end of the season the top 35 teams in the standings will make the PGC Playoff tournament.</div>
            <div className="rulebook-subrules">Each team will start the playoff tournament under par based on the distribution below.</div>
            <div className="rulebook-rules">The playoff tournament will be 12-rounds long throughout all three FedEx Cup Playoff events (Northern Trust, BMW Championship, TOUR Championship). Members that qualify for the playoff tournament will pick their team prior to the Northern Trust as usual and this will be your team of golfers through the entire playoffs.</div>
            <div className="rulebook-subrules">The Northern Trust will run just like a normal tournament.</div>
            <div className="rulebook-subrules">The BMW Championship will only count your top 5 golfers in all 4 rounds.</div>
            <div className="rulebook-subrules">The TOUR Championship will only count your top 3 golfers in all 4 rounds.</div>

            <div className="rulebook-subheader">Payouts</div>
            <div className="rulebook-rules">After every tournament the top 20-25 finishers will win money earnings. Earnings will accumulate during the season and will be paid out at the end of the year.</div>
            <div className="rulebook-rules">For Major tournaments, the top 20 finishers will win money ranging from $66.50 for 1st to $1.50 for 20th.</div>
            <div className="rulebook-rules">For WGC tournaments, the top 25 finishers will win money ranging from $48.50 for 1st to $0.50 for 25th.</div>
            <div className="rulebook-rules">For other tournaments, the top 25 finishers will win money ranging from $37.00 for 1st to $0.50 for 25th.</div>
            <div className="rulebook-rules">Full distributions can be found below.</div>
            <div className="bottom"></div>

            <img className="distributions-picture" alt="Points and Payout distributions" src="Images/distributions.png" />
            <div className="bottom"></div>
        </div >
    )
}

export default Rulebook
