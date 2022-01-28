import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import CountdownLogic from '../Countdown/CountdownLogic';

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
