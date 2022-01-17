import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function LeaderboardItem(props) {
    return (
        <Container>
            <Row>
                <Col>{props.info.ShowRk}</Col>
                <Col>{props.info.Name}</Col>
                <Col>{props.info.ToPar}</Col>
                <Col>{props.info.Points}</Col>
                <Col>{props.info.Earnings}</Col>
            </Row>
            <Row>
                <Col>{props.info.Golfer1}</Col>
                <Col>{props.info.Golfer2}</Col>
                <Col>{props.info.Golfer3}</Col>
                <Col>{props.info.Golfer4}</Col>
                <Col>{props.info.Golfer5}</Col>
                <Col>{props.info.Golfer6}</Col>
                <Col>{props.info.Golfer7}</Col>
                <Col>{props.info.Golfer8}</Col>
                <Col>{props.info.Golfer9}</Col>
                <Col>{props.info.Golfer10}</Col>
            </Row>
        </Container>
    )
}

export default LeaderboardItem
