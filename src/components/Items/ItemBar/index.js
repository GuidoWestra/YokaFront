import React from 'react'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import item from '../../../images/Bowl.webp';

export default function index() {



    return (
        <div className='InfoBox2'>
            <h3>
                NEW IN <br />
            </h3>

            <br />


            <Container className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <Col>
                        <Card style={{ width: '21rem' }}>
                            <Card.Img variant="top" src={item} />
                            <Card.Body >
                                <Card.Title>Bakje S</Card.Title>
                                <Card.Text>
                                    Een unieke Hondenbak voor de kleine viervoeter met naam of tekst bedrukt. Door jou ontworpen. Snel in huis.
                                </Card.Text>
                                <Button variant="outline-dark" href='/product'>
                                    View Product
                                </Button>
                                <br />
                                <br />
                                <Button variant="outline-dark" href='/Cart'>
                                    Add to cart
                                </Button>                            </Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '21rem' }}>
                            <Card.Img variant="top" src={item} />
                            <Card.Body >
                                <Card.Title>Bakje M</Card.Title>
                                <Card.Text>
                                    Een unieke Hondenbak voor de normale hond met naam of tekst bedrukt. Door jou ontworpen. Snel in huis.
                                </Card.Text>
                                <Button variant="outline-dark" href='/product'>
                                    View Product
                                </Button>
                                <br />
                                <br />
                                <Button variant="outline-dark" href='/Dos'>
                                    Add to cart
                                </Button>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '21rem' }}>
                            <Card.Img variant="top" src={item} />
                            <Card.Body>
                                <Card.Title>Bakje L</Card.Title>
                                <Card.Text>
                                    Een unieke Hondenbak voor de dinosauriers met naam of tekst bedrukt. Door jou ontworpen. Snel in huis.
                                </Card.Text>
                                <Button variant="outline-dark" href='/product'>
                                    View Product
                                </Button>
                                <br />
                                <br />
                                <Button variant="outline-dark" href='/Dos'>
                                    Add to cart
                                </Button>
                            </Card.Body>

                        </Card>
                    </Col >
                </Row>
            </Container>





        </div >
    )
}

/*
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={item} />
                            <Card.Body >
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Toegevoegd op 3 Januari</small>
                            </Card.Footer>
                        </Card>
*/