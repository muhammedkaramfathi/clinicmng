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
                <h2 className='text-center mb-4'>Vital signs</h2>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor='HR * Numbers '>HR * Numbers </Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='BP. ( 120/70 Like this)'>BP. ( 120/70 Like this)</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='TEMP ( Numbers 37.33 )'>TEMP ( Numbers 37.33 ) </Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='Sao2 Numbers 88'>Sao2 Numbers 88</Form.Label>
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