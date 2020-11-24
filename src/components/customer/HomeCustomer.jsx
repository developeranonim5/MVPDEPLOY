/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Row, Button, Navbar, Jumbotron, Container} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import profil from '../images/profile.svg';
import createComplain from '../images/create-complain.svg';
import historyComplain from '../images/history-complain.svg';
import "../css/styles.css";
import history from '../../history';

const HomeCustomer =()=>{
 
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/Home")
  };
    return (
<>
<Container fluid>
<Navbar className="justify-content-between" style={{backgroundColor: "#FEFFFF"}}>
<Row >
  <col-12>
  <Navbar expand="lg" sticky="top" style={{backgroundColor: "#FEFFFF"}}>
    <Navbar.Brand onClick={() => history.push('./HomeCustomer')}> <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">  
    </Navbar.Toggle>
    </Navbar>
  </col-12>
</Row>
  <Button variant="outline-primary" type="submit" className="mr-5" onClick={logout}>Sign Out</Button>
</Navbar>
</Container>

<Jumbotron fluid className="Backgroundjumbo" style={{backgroundColor: "#20639b"}}>
  <Container >
    <h1 className="text-center Home-h1">Welcome, "customer name"</h1>
    <p className="text-center Paraf-p"> We love questions and feedback - and we're alwasys  <br></br>
 happy to help! Here are some ways to connect to us. </p>
  </Container>
</Jumbotron>

<div className="container">
  <div className="row TwoCardHomeCustomer">
    <div className="col-lg-4">
    <div className="card shadow" style={{cursor: 'pointer'}} onClick={() => history.push('./DataCustomer')}>
    <img className="Card-Signin mt-4" src={profil}/>
    <h2 className="text-center mt-4 text-card">Data Profile</h2>
    </div>
    </div>
    <div className="col-lg-4">
    <div className="card shadow" style={{cursor: 'pointer'}} onClick={() => history.push('./createComplaint')}>
    <img className="Card-Signout mt-4"src={createComplain}/>
    <h2 className="text-center mt-4 text-card">Create Complaint</h2>
    </div>
    </div>
    <div className="col-lg-4">
    <div className="card shadow" style={{cursor: 'pointer'}} onClick={() => history.push('./HistoryComplain')}>
    <img className="Card-Signout mt-4"src={historyComplain}/>
    <h2 className="text-center mt-4 text-card">History Complaint</h2>
    </div>
    </div>
  </div>
</div>
<footer className="page-footer font-small pt-4 footer">
  <div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
  </div>
</footer>
</>

    )
}

export default HomeCustomer