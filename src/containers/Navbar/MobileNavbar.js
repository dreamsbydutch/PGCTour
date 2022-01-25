import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';


function NavBar() {
    return (
        <Navbar bg="light" expand="md" fixed="bottom">
            <Container className='navbar-container'>
                <Navbar.Brand as={Link} to="">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/PGCsmall.png" height="50" width="50" />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/leaderboard">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/leaderboardIcon.png" height="50" width="50" />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/standings">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/standingsIcon.png" height="50" width="50" />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/golferstats">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/golferstatsIcon.png" height="50" width="50" />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/rulebook">
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/standingsIcon.png" height="50" width="50" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;
