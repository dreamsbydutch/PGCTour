import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './LeaderboardItem.css';

function LeaderboardItem(props) {
    return (
        <Container className='item-container'>
            <Row className='main-row'>
                <Col className='rank'>{props.info.ShowRk}</Col>
                <Col xs={5} className='name'>{props.info.Name}</Col>
                <Col className='score-to-par'>{props.info.ToPar}</Col>
                <Col className='points'>{props.info.Points}</Col>
                <Col className='earnings'>{props.info.Earnings}</Col>
            </Row>
        </Container>
    )
}

export default LeaderboardItem
