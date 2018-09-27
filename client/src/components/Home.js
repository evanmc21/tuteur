import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const Home = () => {
  return(
    <Container fluid>
      <h1 style={{ textAlign: "center", color:"#1d1145"}}>TUTEUR</h1>
      <Row>
        <Col style={{textAlign:"center"}}>
            <Link style={{ color:"#1d1145", margin: "1.5%"}} to="/login">LOGIN</Link>
            <Link style={{ color:"#1d1145", margin: "1.5%"}} to="/signup">SIGNUP</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
