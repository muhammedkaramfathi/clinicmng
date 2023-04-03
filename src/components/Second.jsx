import React from 'react';
import { Form, Button, Card, Alert ,Row ,Col, Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Second = () => {
  return (
        <>

        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Smoking TYPE</h2>
                <Form>
                        <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Select>
                    <Row className="mt-3">
                        <Col>
                            <Form.Label htmlFor='number'>smoking er day ?</Form.Label>
                            <Form.Control type='number' id='number' />
                        </Col>
                        <Col>
                            <Form.Label htmlFor='number'>smoking for how long ?</Form.Label>
                            <Form.Control type='number' id='number' />
                        </Col>
                    </Row>

                </Form>
            </Card.Body>
        </Card>

        
        </>



  );
};

export default Second