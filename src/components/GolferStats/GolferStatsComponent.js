import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './GolferStatsComponent.css'
import GolferStatsItem from './GolferStatsItem';

function GolferStats(props) {
    const [statType, setStatType] = useState("PGC");

    return (
        <Container>
            <div className="rating-page-header">
                <div className="rating-header">PGC Golfer Ratings</div>
                <div className="rating-explanation">The PGC Rating uses 10 of the top PGA Tour statistics from the past two seasons to create a more comprehensive rating than any other golf metric out there. 85% of a golfer’s rating is made up of the four most prominent and significant stats in golf, World Ranking (35%), Total Strokes Gained (23%), Scoring Average (15%), and FedEx Cup Points (12%). The final 15% of a golfers rating is made of 6 more secondary golf stats, Birdie or Better % (6%), Yearly Earnings (3.5%), Birdie Average (3%), Top Tens (1%), Birdie to Bogey Ratio (1%), and All Around Ranking (0.5%).</div>
            </div>
            <div className="clr"></div>
            <div className="grid-container">
                <div id="ratings-header">
                    <div className="bar-grid">
                        <div id="pgcrank-tab" className="button-tabs tab-on" onClick={() => setStatType("PGC")}>PGC Rtg</div>
                        <div id="owgr-tab" className="button-tabs tab-off" onClick={() => setStatType("OWGR")}>OWGR</div>
                        <div id="fedex-tab" className="button-tabs tab-off" onClick={() => setStatType("FedEx")}>FedEx</div>
                        <div id="strokesgain-tab" className="button-tabs tab-off" onClick={() => setStatType("SG")}>SG</div>
                        <div id="field-tab" className="button-tabs tab-off" onClick={() => setStatType("Field")}>Field</div>
                    </div>
                </div>

                <div id="ratings-rank" className="ratings-listing tab-listing">
                    <div className="labels">
                        <div className="rank-label">PGC Rk</div>
                        <div className="name-label">Golfer</div>
                        <div className="pgcrating-label">PGC Rating</div>
                    </div>
                    {props.info.map(obj => <GolferStatsItem info={obj} type={statType} key={obj.PGCRk} />)}
                </div>
            </div>
        </Container>
    )
}

export default GolferStats
