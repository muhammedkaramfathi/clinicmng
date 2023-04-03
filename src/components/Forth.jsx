import React from 'react';
import { Form, Button, Card, Alert ,Row ,Col, Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Second from './Second';
const Forth = () => {
  return (
        <>
        <Container 
        className="d-flex align-items-center justify-content-center"
        style={{  width: "1000px" }}
        >
        <Card style={{ width: "1000px" }}>
            <Card.Body>
                <h2 className='text-center mb-4'>Symptoms</h2>
                <Form>
                    <Form.Group>
                    <Form.Label htmlFor="disabledSelect">Cough ?</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Yes</option>
                                <option>No</option>
                                <option>Maybe</option>
                            </Form.Select>
                    </Form.Group>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="disabledSelect">EXPECTORATION  ?</Form.Label>
                                        <Form.Select id="disabledSelect">
                                            <option>Yes</option>
                                            <option>No</option>
                                        </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                        <Form.Label htmlFor="disabledSelect">Color</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center"
                        style={{ marginTop: "50px" }}
                    >
                        <Col style={{ marginTop: "35px" , textAlign: "center"}}>
                        <h7 className='text-center mb-4'>1 is LOOSE</h7>
                        </Col>
                        <Col xs={6}>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} style={{ textAlign: "center" }}>
                                    <Form.Check
                                        style={{ marginLeft: "20px" }}
                                        inline
                                        label="1"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        style={{ marginLeft: "20px" }}
                                        inline
                                        label="2"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        style={{ marginLeft: "20px" }}
                                        inline
                                        label="3"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        style={{ marginLeft: "20px" }}
                                        inline
                                        label="4"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        style={{ marginLeft: "20px" }}
                                        inline
                                        label="5"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                        <Col style={{ marginTop: "30px", textAlign: "center"}}>
                            <h7 className='text-center mb-4'>5 is STICKY</h7>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                        <Form>
                            <h7 className='mb-4'>1 is LOOSE</h7>
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3" >
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Yes`}
                                />
                                <Form.Check 
                                    style={{ marginTop: "0px !important"}}
                                    type={type}
                                    id={`default-${type}`}
                                    label={`No`}
                                />
                                </div>
                            ))}
                        </Form>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>HEMOPTYSIS  this new section</Form.Label>
                        <Form.Select>
                        <option>Yes</option>
                        <option>No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>DYSPNEA </Form.Label>
                        <Form.Select>
                        <option>Yes if yes move to grades questions</option>
                        <option>No if no escape grades questions</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>GRADE </Form.Label>
                        <Form.Select>
                        <option>EXERTIONAL if yes , grades (1 or 2 0r 3 ,4 )</option>
                        <option>At Rest</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>WHEEZES </Form.Label>
                        <Form.Select>
                        <option>Yes</option>
                        <option>No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>CHEST PAIN </Form.Label>
                        <Form.Select>
                        <option>Yes if yes move to site , site type and REFERRED questions</option>
                        <option>No if no escape site , site type and REFERRED questions</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='site'>SITE</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='site type'>SITE  TYPES</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='referred'>REFERRED</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Post nasal discharge</Form.Label>
                        <Form.Select>
                        <option>Yes</option>
                        <option>No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>GERD</Form.Label>
                        <Form.Select>
                        <option>Yes</option>
                        <option>No</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </Container>
        </>
  );
};

export default Forth