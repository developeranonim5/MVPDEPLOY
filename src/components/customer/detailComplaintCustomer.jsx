import React, { useState }  from 'react';
import { Navbar,Container, Row, Button, Modal} from 'react-bootstrap'; 
import Logo from '../images/Logo-BRI.png';
import Profile from '../images/40614.jpg';
import "../css/styles.css";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import history from '../../history';

const History =()=>{  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

<>
<Container fluid>
<Navbar className="justify-content-between" style={{backgroundColor: "#FEFFFF"}}>
<Row >
  <col-12>
  <Navbar expand="lg" sticky="top" style={{backgroundColor: "#FEFFFF"}}>
    <Navbar.Brand href="#home" > <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">  
    </Navbar.Toggle>
    </Navbar>
  </col-12>
</Row>
  <Button onClick={() => history.push('./HistoryComplain')} variant="outline-primary" type="submit" className="mr-5">Back to History</Button>
</Navbar>
</Container>
<div className="container">
<div className="row CardTable">
  <div className="col-xl-10 col-md-5 mt-5">  
    <div class="card shadow ">
    <div class="card-header py-3">
    <h3 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> Detail Complaint</h3>
    </div>
    <div class="card-body">
    <div class="row">
        <div class="col-lg-6">
            <div class="mb-5">
            <div class="form-group">        
                <input type="text" class="form-control" placeholder="Title" required/>
            </div>
            <div class="form-group">        
                <textarea type="text" rows="5" class="form-control" placeholder="Description" required></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">File Name :</label>
            <button type="button" class="btn btn-outline-primary btn-block">View File</button>
            </div>   
            </div>
        </div>
        <div class="col-lg-6">
        <div class="form-group">        
          <input type="text" class="form-control" placeholder="Status" required/>
        </div>
        <div class="row">
        <div class="form-group col-md-4">        
        <div class="mb-3 text-center">
                <img src={Profile} width="120" height="130" class="rounded"/>
            </div>
        </div>
        <div class="form-group col-md-8">        
          <input type="text" class="form-control" placeholder="Assign by" required/>
        </div>
        </div>
        <div class="form-group">        
            <textarea type="text" rows="4" class="form-control" placeholder="Description" required></textarea>
        </div>
        <Button variant="dark" onClick={handleShow}>
        Rate Respone
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate Respone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Rater total={5} rating={0} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
    </Modal>
    </div> 
</div>
</div>
</div>
</div> 
</div>
</div>
<footer class="sticky-footer bg-white mt-5">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; 2020 by UGM FE BE 05 </span>
          </div>
        </div>
  </footer>
  
</>

  )
}
export default History