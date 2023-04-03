import React from 'react';
import { Form, Button, Card, Alert ,Row ,Col, Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Second from './Second';
const Fifth = () => {
  return (
        <>
        <Container 
        className="d-flex align-items-center justify-content-center"
        style={{  width: "1000px" }}
        >
        
        <Card style={{ width: "1000px" }}>
            <Card.Body>
                <h2 className='text-center mb-4'>Signs</h2>
                <Form>
                    <Row className="mt-3">
                        <Col>
                        <Form.Label htmlFor="disabledSelect">VESICULAR BREATHING</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                        </Col>
                        <Col>
                        <Form.Label htmlFor="disabledSelect">HARSH VB</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                        <Form.Label htmlFor="disabledSelect">CREPITATIONS</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                        </Col>
                        <Col>
                        <Form.Label htmlFor="disabledSelect">WHEEZES</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Form.Label htmlFor="disabledSelect">BRONCHIAL  BREATHING</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                </Form>
            </Card.Body>
        </Card>
        </Container>
        </>
  );
};

export default Fifth