import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';


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
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="">Home</Nav.Link>
                        <Nav.Link as={Link} aria-controls="basic-navbar-nav" to="/leaderboard">Leaderboard</Nav.Link>
                        <Nav.Link as={Link} aria-controls="basic-navbar-nav" to="/standings">Standings</Nav.Link>
                        <Nav.Link as={Link} aria-controls="basic-navbar-nav" to="/golferstats">Golfer Stats</Nav.Link>
                        <NavDropdown title="Tournaments" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/tournament/6">The Masters</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/9">PGA Championship</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/11">U.S. Open</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/14">The Open Championship</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/tournament/2">Genesis Invitational</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/3">Arnold Palmer Invitational</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/4">The Players Championship</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/10">The Memorial Tournament</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/tournament/1">Waste Management Open</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/5">Valero Texas Open</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/7">Zurich Classic</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/8">Wells Fargo Championship</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/12">Travelers Championship</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/13">Genesis Scottish Open</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tournament/15">Rocket Mortgage Classic</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/tournament/16">Playoffs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/rulebook">Rulebook</Nav.Link>
                        <Nav.Link as={Link} to="/history">Tour History</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
}

export default NavBar;
