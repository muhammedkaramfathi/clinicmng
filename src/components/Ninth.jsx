import React from 'react';
import { Form, Button, Card, Alert ,Row ,Col, Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Ninth = () => {
  return (
        <>
        <Container 
        className="d-flex align-items-center justify-content-center"
        style={{  width: "1000px" }}
        >
        
        <Card style={{ width: "1000px" }}>
            <Card.Body>
                <h2 className='text-center mb-4'>Other Tests</h2>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor='Sonar Text answer'>Sonar Text answer </Form.Label>
                        <Form.Check type="radio" aria-label="radio 1" label="Option 1"/>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label htmlFor='Echo Text answer'>Echo Text answer </Form.Label>
                        <Form.Check type="radio" aria-label="radio 1" label="Option 1"/>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label htmlFor='Dulex Text answer '>Dulex Text answer </Form.Label>
                        <Form.Check type="radio" aria-label="radio 1" label="Option 1"/>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </Container>
        </>
  );
};

export default Ninth