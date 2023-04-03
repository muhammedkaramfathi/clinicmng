import React from 'react';
import { Form, Button, Card, Alert ,Row ,Col, Container ,FloatingLabel} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Second from './Second';
const Therd = () => {
  return (
        <>
        <Container 
        className="d-flex align-items-center justify-content-center"
        style={{  width: "1000px" }}
        >
        
        <Card style={{ width: "1000px" }}>
            <Card.Body>
                <h2 className='text-center mb-4'>COMPLAINT</h2>
                <Form>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="COMPLAINT"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                </Form>
            </Card.Body>
        </Card>
        </Container>
        </>
  );
};

export default Therd