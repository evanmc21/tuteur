import React from 'react';
import {Container, Row, Col, Jumbotron} from 'reactstrap';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
import tutor1 from '../images/tutor1.jpg';
import tutor2 from '../images/tutor2.jpg';
import tutor3 from '../images/tutor3.jpg';

import '../App.css'
const Home = () => {
  return (<div className="container-flex">
    <Jumbotron id="jumbotron" fluid="fluid">
      <Container id="container-home" fluid="fluid">
        <Animated animationIn="fadeIn">
          <div className="home">
            <h1 id="home-display">TUTEUR</h1>
            <Link id="login" to="/login">LOGIN</Link>
          </div>
        </Animated>
      </Container>
    </Jumbotron>
    <Animated animationIn="fadeIn">
      <img src={tutor1} alt=""/>
      <img src={tutor2} alt=""/>
      <img src={tutor3} alt=""/>
    </Animated>
  </div>);
}

export default Home;
