import React, { useState } from 'react';
import { Container,Card ,Row} from "react-bootstrap";
import First from './First';
import Navbar from './Navbar';
import Second from './Second';
import Therd from './Therd';
import './stayls/Addnewpatient.css';
import Forth from './Forth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import Seventh from './Seventh';
import Eightth from './Eightth';
import Ninth from './Ninth';
import Tenth from './Tenth';
import Eleventh from './Eleventh';
import { Link } from 'react-router-dom'

const Addnewpatient = () => {
  const [showSmoking,setShowSmoking] = useState(true);
  // function handleShow() {
  //   setShowSmoking(false);
  // }
  return (
    <>
      <Navbar />
      <Container
        className="align-items-center justify-content-center"
        style={{  width: "1000px" }}
      >
        <First setShowSmoking={setShowSmoking}/>
        {showSmoking ? <Second /> : null}
        <Therd />
        <Forth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eightth />
        <Ninth />
        <Tenth />
        <Eleventh />
      </Container>
      <div className="open-search">
            <Link className="opn-search" to={'/search'}></Link>
    </div>
    </>
  );
};

export default Addnewpatient