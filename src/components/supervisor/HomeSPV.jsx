/* eslint-disable jsx-a11y/alt-text */
import {React, useState} from 'react';
import { Navbar, Button, Jumbotron, Container, Row, Modal} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import DataCS from '../images/data-cs.svg';
import AddCS from '../images/add-data-cs.svg';
import His_Comp from '../images/history-complain.svg';
import "../css/styles.css";

import history from '../../history';

const HomeSPV =()=>{  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <Navbar.Brand onClick={() => history.push('./HomeSPV')}> <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">  
    </Navbar.Toggle>
    </Navbar>
  </col-12>
</Row>
  <Button onClick={logout} variant="outline-primary" type="submit" className="mr-5">Sign Out</Button>
</Navbar>
</Container>

<Jumbotron fluid className="Backgroundjumbo" style={{backgroundColor: "#20639b"}}>
  <Container >
    <h1 className="text-center Home-h1">Welcome, Supervisor</h1>
    
  </Container>
</Jumbotron>

<div className="container">
  <div className="row TwoCardHomeCustomer">
    <div className="col-lg-4">
    <div className="card shadow" style={{cursor: 'pointer'}} onClick={() => history.push('./TableDataCS')}>
    <img className="Card-Signin mt-4" src={DataCS}/>
    <h3 className="text-center mt-4 text-card">Data CS</h3>
    </div>
    </div>
    <div className="col-lg-4">
    <div className="card shadow" onClick={handleShow} style={{cursor: 'pointer'}}>
    <img className="Card-Signout mt-4"src={AddCS}/>
    <h3 className="text-center mt-4 text-card">Add Data CS</h3>
    </div>
    </div>
    <div className="col-lg-4">
    <div className="card shadow" style={{cursor: 'pointer'}} onClick={() => history.push('./AllDataComplaint')}>
    <img className="Card-Signout mt-4"src={His_Comp}/>
    <h3 className="text-center mt-4 text-card">All Data Complaint</h3>
    </div>
    </div>
  </div>
</div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Add Data CS</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <div className="form-group">
          <label className="">Real Photo :</label>
          <input type="file" className="form-control" placeholder="Title" required/>
        </div>
        <div className="form-group">
          <label className="">CS Photo :</label>
          <input type="file" className="form-control" placeholder="Title" required/>
          <small > <i className="Text-Format">* File max size 1 MB, File type .jpg, png, jpeg.</i></small>
        </div>
        <div className="form-group">        
          <input type="text" className="form-control" placeholder="Full name" required/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" placeholder="CS name" required/>
        </div>
        <div className="form-group"> 
        <label className="form-label">Status :</label><br/>        
            <input type="checkbox" aria-label="Checkbox for following text input" className="ml-4"/> Active &nbsp;
            <input type="checkbox" aria-label="Checkbox for following text input"/> Non Active
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
    </Modal>
<footer className="page-footer font-small pt-4 footer">
  <div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
  </div>
</footer>

</>

    )
}

export default HomeSPV