import React, { Component } from 'react';
import { Col, Row, CardDeck, Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h3 className="text-center text-primary">LC International is a leading European textile industry group with a complete, traceable, vertical production system.</h3>
                <br />
                <CardDeck>
                    <Row>
                        <Col sm="4">
                            <Card body>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body inverse color="primary">
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body inverse color="success">
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm="4">
                            <Card body inverse color="info">
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm="4">
                            <Card body>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body inverse color="primary">
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </div>
        );
    }
}
