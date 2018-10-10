import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../App.css'
const Home = () => {
  return (
    <Jumbotron id="jumbotron" fluid>
    <Container fluid="fluid">
      <div className="home">
          <h1 id="home-display">TUTEUR</h1>
          <Link id="login" to="/login">LOGIN</Link>
        </div>
  </Container>
</Jumbotron>
)
}

export default Home;
