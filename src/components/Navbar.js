import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';


function NavBar() {
    return (
        <Navbar bg="light" expand="md">
            <Container className='navbar-container'>
                <Navbar.Brand>
                    <img alt="PGC logo" src="https://raw.githubusercontent.com/dreamsbydutch/pgctour/main/public/assets/PGCsmall.png" height="50" width="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                        <Nav.Link href="/standings">Standings</Nav.Link>
                        <Nav.Link href="/">Golfer Stats</Nav.Link>
                        <NavDropdown title="Tournaments" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tournament/6">The Masters</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/9">PGA Championship</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/11">U.S. Open</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/14">The Open Championship</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/tournament/2">Genesis Invitational</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/3">Arnold Palmer Invitational</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/4">The Players Championship</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/10">The Memorial Tournament</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/tournament/1">Waste Management Open</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/5">Valero Texas Open</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/7">Zurich Classic</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/8">Wells Fargo Championship</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/12">Travelers Championship</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/13">Genesis Scottish Open</NavDropdown.Item>
                            <NavDropdown.Item href="/tournament/15">Rocket Mortgage Classic</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/tournament/16">Playoffs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/history">Tour History</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
