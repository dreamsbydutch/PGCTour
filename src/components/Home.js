import React from 'react';

import Leaderboard from './Leaderboard';

function Home() {
    return (
        <div>
            <Leaderboard limit="10" />
        </div>
    )
}

export default Home
