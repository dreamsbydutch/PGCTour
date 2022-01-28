import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';


function NavBar() {
    return (
        <Navbar bg="light" fixed="bottom">
            <Container className='navbar-container'>
                <Navbar.Brand as={Link} to="">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/PGCsmall.png" />
                </Navbar.Brand>
                <span className='nav-border-line' />
                <Navbar.Brand as={Link} to="/leaderboard">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/leaderboardIcon.png" />
                </Navbar.Brand>
                <span className='nav-border-line' />
                <Navbar.Brand as={Link} to="/standings">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/standingsIcon.png" />
                </Navbar.Brand>
                <span className='nav-border-line' />
                <Navbar.Brand as={Link} to="/golferstats">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/golferstatsIcon.png" />
                </Navbar.Brand>
                <span className='nav-border-line' />
                <Navbar.Brand as={Link} to="/rulebook">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/rulebookIcon.png" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;
