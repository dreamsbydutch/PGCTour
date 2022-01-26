import React from 'react';
import { Container } from 'react-bootstrap';

import CountdownLogic from '../../containers/Countdown/CountdownLogic';
import './Home.css';

function Home() {

    return (
        <Container>
            <div className="countdown-timer">
                <CountdownLogic />
            </div>
        </Container>
    )
}

export default Home
