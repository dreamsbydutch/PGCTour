import React from 'react'
import StudioVideoDisplay from '../../components/StudioVideoDisplay/StudioVideoDisplay'
import './Rulebook.css'

function Rulebook() {

    return (
        <>
            <div className="rulebook-header">PGC Tour Rulebook</div>
            <StudioVideoDisplay embedId="a3OIGIFn1zk" />
            <div className='rulescontainer'>
                <div className="rulebook-subheader">Schedule</div>
                <div className="rulebook-rules">The fifteen tournaments on the PGC Tour schedule that will be split into 3 tiers.</div>
                <div className="rulebook-subrules">Majors - The Masters, PGA Championship, U.S. Open, The Open Championship</div>
                <div className="rulebook-subrules">Invitationals - Genesis Invitational, Arnold Palmer Inviational, The Players Championship, The Memorial Torunament</div>
                <div className="rulebook-subrules">Standard - Waste Management Open, Valero Texas Open, Zurich Classic of New Orleans, Wells Fargo Championship, Travelers Championship, Genesis Scottish Open, Rocket Mortgage Classic</div>
                <div className="rulebook-rules">Each tier will have a different points and payouts. A full schedule and points/payouts structure is outlined below.</div>

                <div className="rulebook-subheader">Rosters</div>
                <div className="rulebook-rules">The field for each tournament will be split into five groups that will be finalized on the Monday morning prior to each tournament. Groups will be chosen based on the <a href="/pgctour/#/golferstats">PGC Rating</a>.</div>
                <div className="rulebook-rules">Players choose 2 golfers from each of the 5 groupings to create your 10 golfer team for the tournament. You will make new picks and have a new team for each tournament on the schedule.</div>
                <div className="rulebook-rules">Groups are set on Monday morning of tournament week.</div>
                <div className="rulebook-subrules">Golfers that are added to the tournament field after the groups are set will be left out of the PGC field.</div>
                <div className="rulebook-subrules">If a golfer withdraws prior to the tournament teeing off and remains on your roster at tee off, then that golfer will be replaced with the highest world ranked golfer from that group.</div>

                <div className="rulebook-subheader">Scoring</div>
                <div className="rulebook-rules">During Rounds 1 and 2 of the tournament your team’s score will be the average strokes of all 10 golfers on your team.</div>
                <div className="rulebook-rules">Rounds 3 and 4 of the tournament your team’s score will be the average strokes of the 5 lowest golfers on your team that day.</div>
                <div className="rulebook-rules">The leaderboard will look just like a PGA leaderboard and tracked live on the Live Leaderboard page.</div>
                <div className="rulebook-subrules">Teams must have 5 golfers make the weekend cut line or their team will be cut from the PGC tournament. Any golfers that withdraw before cut day will receive a score of 8-over par until cut day.</div>

                <div className="rulebook-subheader">Playoffs</div>
                <div className="rulebook-rules">After every tournament of the season the top 35 finishers will receive playoff points.</div>
                <div className="rulebook-subrules">Winners of Major tournaments will win 1000 points.</div>
                <div className="rulebook-subrules">Winners of WGC tournaments will win 650 points.</div>
                <div className="rulebook-subrules">Winners of other tournaments will win 450 points.</div>
                <div className="rulebook-rules">Points will be distributed to the top 35 finishers similar to how FedEx Cup points are distributed on the PGA Tour. Full distributions can be found below.</div>
                <div className="rulebook-rules">At the end of the season the top 35 teams in the standings will make the PGC Playoff tournament.</div>
                <div className="rulebook-subrules">Each team will start the playoff tournament at a starting score based on the distribution below.</div>
                <div className="rulebook-rules">The playoff tournament will be 12-rounds long throughout all three FedEx Cup Playoff events (FedEx-StJude Championship, BMW Championship, TOUR Championship). Players that qualify for the playoff tournament will pick their team prior to the FedEx-StJude Championship as usual and that will be your team of golfers throughout the entire playoffs.</div>
                <div className="rulebook-subrules">The FedEx-StJude Championship will run just like a normal tournament.</div>
                <div className="rulebook-subrules">The BMW Championship will only count your top 5 golfers in all 4 rounds.</div>
                <div className="rulebook-subrules">The TOUR Championship will only count your top 3 golfers in all 4 rounds.</div>

                <div className="rulebook-subheader">Payouts</div>
                <div className="rulebook-rules">After every tournament the top 15 finishers will win money earnings. Earnings will accumulate during the season and will be paid out at the end of the year.</div>
                <div className="rulebook-subrules">Major Champions will win $75</div>
                <div className="rulebook-subrules">Inviational Champions will win $50</div>
                <div className="rulebook-subrules">Standard Champions will win $25</div>
                <div className="rulebook-subrules">Full distributions can be found below.</div>
                <div className="bottom"></div>

                <img className="distributions-picture" alt="Points and Payout distributions" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/distributions.png" />
            </div >
        </>
    )
}

export default Rulebook
