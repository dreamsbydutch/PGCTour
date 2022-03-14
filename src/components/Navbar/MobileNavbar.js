import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';


function NavBar() {
    return (
        <Navbar bg="light" fixed="bottom">
            <Container className='navbar-container'>
                <Navbar.Brand as={Link} to="">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/PGCsmall.png" />
                </Navbar.Brand>
                <span className='nav-border-line' />
                <Navbar.Brand as={Link} to="/leaderboard">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/leaderboardIcon.png" />
                </Navbar.Brand>
                <span className='nav-border-line' />
                <Navbar.Brand as={Link} to="/standings">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/standingsIcon.png" />
                </Navbar.Brand>
                <span className='nav-border-line' />
                <Navbar.Brand as={Link} to="/golferstats">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/golferstatsIcon.png" />
                </Navbar.Brand>
                <span className='nav-border-line' />
                <Navbar.Brand as={Link} to="/rulebook">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/rulebookIcon.png" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;