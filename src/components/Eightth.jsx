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
                <h2 className='text-center mb-4'>Pulmonary function tests</h2>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor='FVC Numbers'>FVC Numbers </Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='FEV1 Numbers'>FEV1 Numbers </Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='FEV1/FVC percentage'>FEV1/FVC percentage</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='FEF25-75 percentage'>FEF25-75 percentage</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </Container>
        </>
  );
};

export default Fifth