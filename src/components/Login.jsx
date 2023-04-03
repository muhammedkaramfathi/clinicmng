import React from 'react';
import { Form, Button, Card, Alert ,Row ,Col, Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './stayls/Login.css';
import Logo from "../assets/logo.jpeg";

const Login = () => {
  return (

    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh"}}
    >
        <div className="contact" >
        <div
            className="leftSide"
            style={{ backgroundImage: `url(${Logo})`, borderRadius: `500px` }}
        ></div>
        <div className="rightSide d-flex align-items-center justify-content-center">
        <Card style={{ width: "70%" }}>
            <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <Form>
                <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" type="email" required />
                </Form.Group>
                <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                    id="password"
                    type="password"
                    required
                />
                </Form.Group>
                <Button className="w-100 mt-3" type="submit">
                Log In
                </Button>
            </Form>
            <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            </Card.Body>
        </Card>
        </div>
        </div>
    </Container>


  );
};

export default Login
