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
                <h2 className='text-center mb-4'>LABS</h2>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor='serum IGE total (numbers 22.44)'>serum IGE total (numbers 22.44)</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='SKIN Test ( Numbers 12)'>SKIN Test ( Numbers 12)</Form.Label>
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