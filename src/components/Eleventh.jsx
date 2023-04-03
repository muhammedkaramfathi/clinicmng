import React from 'react';
import { Form, Button, Card, Alert ,Row ,Col, Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Second from './Second';
const Eleventh = () => {
  return (
        <>
        <Container 
        className="d-flex align-items-center justify-content-center"
        style={{  width: "1000px" }}
        >
        
        <Card style={{ width: "1000px" }}>
            <Card.Body>
                <h2 className='text-center mb-4'>Medications Text</h2>
                <Form>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='HB * numbers 12'>HB * numbers 12</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='lc * numbers 12'>tlc * numbers 12</Form.Label>
                                <Form.Check type="radio" aria-label="radio 1" label="Option 1"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='plt Numbers 250'>plt Numbers 250</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='Crp Numbers'>Crp Numbers </Form.Label>
                                <Form.Control/>
                             </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='AST Numbers'>AST Numbers </Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='ALT Numbers'>ALT Numbers </Form.Label>
                                <Form.Control/>
                             </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='Urea Numbers'>Urea Numbers </Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='CREAT Numbers'>CREAT Numbers </Form.Label>
                                <Form.Control/>
                             </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='Na Numbers'>Na Numbers </Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='k Numbers'>k Numbers </Form.Label>
                                <Form.Control/>
                             </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                                <Form.Label htmlFor='HBA1C  numbers '>HBA1C  numbers  </Form.Label>
                                <Form.Control/>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </Container>
        </>
  );
};

export default Eleventh