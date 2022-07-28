import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNavbar.css';


function NavBar() {
    return (
        <div className='mobile-navbar'>
            <div className='mobile-navbar-container'>
                <NavLink to="" activeclassname="active">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/PGCsmall.png" />
                </NavLink>
                <span className='nav-border-line' />
                <NavLink to="/leaderboard" activeclassname="active">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/leaderboardIcon.png" />
                </NavLink>
                <span className='nav-border-line' />
                <NavLink to="/standings" activeclassname="active">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/standingsIcon.png" />
                </NavLink>
                <span className='nav-border-line' />
                <NavLink to="/golferstats" activeclassname="active">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/golferstatsIcon.png" />
                </NavLink>
                <span className='nav-border-line' />
                <NavLink to="/rulebook" activeclassname="active">
                    <img className="mobile-navbar-img" alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/rulebookIcon.png" />
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;
