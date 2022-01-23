import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './LeaderboardItem.css';
import LeaderboardItemInfo from './LeaderboardItemInfo';

function LeaderboardItem(props) {


    const [showInfo, setShowInfo] = useState("none")
    const onClick = () => showInfo === "none" ? setShowInfo("block") : setShowInfo("none")
    return (
        <Container className='item-container'>
            <Row className='main-row' onClick={onClick}>
                <Col className='rank'>{props.info.ShowRk}</Col>
                <Col xs={5} className='name'>{props.info.Name}</Col>
                <Col className='score-to-par'>{props.info.ScoreToPar}</Col>
                <Col className='today'>{props.info.LiveScore}</Col>
                <Col className='thru'>{props.info.LiveHoles}</Col>
            </Row>
            <div style={{ display: showInfo }}>
                <LeaderboardItemInfo info={props.info} />
            </div>
        </Container>
    )
}

export default LeaderboardItem
