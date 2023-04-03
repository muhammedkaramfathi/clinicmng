import React from 'react';
import { Form, Button, Card, Alert ,Row ,Col, Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Second from './Second';
const First = ({ setShowSmoking }) => {
    function handleSelect(a) {
        if (a.target.value === 'no') {
            setShowSmoking(false);
        }else{
            setShowSmoking(true);
        }
    }
  return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Dr Hossam Hosney Questionnaire</h2>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='email'>patient NAME</Form.Label>
                                <Form.Control type='email' id='email' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor='phonenumber'>Phone Number</Form.Label>
                                <Form.Control type='phonenumber' id='phonenumber' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Label htmlFor='age'>Age</Form.Label>
                            <Form.Control type='age' id='age' />
                        </Col>
                        <Col>
                        <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Label htmlFor='Residence'>Residence</Form.Label>
                            <Form.Control placeholder="Residence" />
                        </Col>
                        <Col>
                        <Form.Label htmlFor="disabledSelect">SMOKING HISTORY</Form.Label>
                            <Form.Select onChange={handleSelect} id="disabledSelect" >
                                <option value='yes'>Yes</option>
                                <option value='no' >No</option>
                                <option value='ex-smoker'>Ex-Smoker</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        </>
  );
};

export default First