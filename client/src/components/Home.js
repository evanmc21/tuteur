import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
const Home = () => {
  return (<Container fluid="fluid">
    <h1 style={{
        textAlign: "center",
        color: "#1d1145"
      }}>TUTEUR</h1>
    <Row id="homeRow">
      <Col style={{
          textAlign: "center"
        }}>
        <Link id="login" to="/login">LOGIN</Link>
        <Link id="signup" to="/signup">SIGNUP</Link>
      </Col>
    </Row>
  </Container>)
}

export default Home;
