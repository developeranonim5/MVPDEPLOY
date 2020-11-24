
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Navbar, Jumbotron, Container, Row, Button, Modal} from 'react-bootstrap';
import Signup2 from '../images/signup.svg';
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";
import history from '../../history';
import axios from 'axios';
import swal from 'sweetalert';

const Registartion = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const RegisterHandle = (e) => {
      e.preventDefault();

    const Registration = {
      username: username,
      email:email,
      password:password,
    };

    axios.post("http://13.212.31.237/customer/registration", Registration)
      .then(res => {
        if (res.data.status === 'success') {
          handleShow();
       } else if (res.data.status === 'fail') {
          alert("Data failed to send, please try again.");
       }
      })
  }

    return (
<>
{showModal ? (
        <Modal.Dialog show={handleShow} onHide={handleClose}>
          <Modal className='modal fade' id='myModal'>
            <Modal.Header className='modal-header'>
              <h5 className='modal-title'>Registration Sent</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </Modal.Header>
            <Modal.Body className='modal-body'>
              <p>A message about your registration has been sent, please check your email and verification. </p>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
              <button className='btn btn-primary' data-dismiss='modal' onClick={handleClose}>Close</button>
            </Modal.Footer>
          </Modal>
         </Modal.Dialog>
       ) : null}
<Container fluid>
<Navbar className="justify-content-between" style={{backgroundColor: "#FEFFFF"}}>
<Row >
  <col-12>
  <Navbar expand="lg" sticky="top" style={{backgroundColor: "#FEFFFF"}}>
    <Navbar.Brand onClick={() => history.push('./Home')}> <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">  
    </Navbar.Toggle>
    </Navbar>
  </col-12>
</Row>
  <Button variant="outline-primary" className="mr-5" onClick={() => history.push('./Login')}>Sign In</Button>
</Navbar>
</Container>
<Jumbotron fluid className="pattern">
</Jumbotron>
<div className="container">
  <div className="row TwoCardContainer">
    <div className="col-xl-4 col-md-5 mt-2 mr-auto">  
    <img className="Image-Signin" src={Signup2}/>   
    </div>
  <div className="col-xl-5 col-md-5 mt-5 mr-4">  
    <div className="card shadow">
    <div className="card-header py-3">
    <h2 className="m-0 font-weight-bold text-dark text-center"><i className="fa fa-pen-alt"></i> Form Sign Up</h2>
    </div>
    <div className="card-body">
      <form className="" action="POST">
        <div className="form-group">
          <label className="">Username :</label>
          <input type="text" className="form-control" autoComplete="off" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
        </div>
        <div className="form-group">
          <label className="">Email :</label>
          <input type="email" className="form-control" autoComplete="off" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        </div>
        <div className="form-group">
          <label className="">Password :</label>
          <input type="password" className="form-control" autoComplete="off" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        </div>        
        <div className="form-group ml-auto">
            <button type="submit" onClick={RegisterHandle} name="signUp" className="btn btn-dark btn-block"><i className="fa fa-upload fa-fw"></i>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  </div> 
  </div>
</div> 
<footer className="sticky-footer bg-white mt-5">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; 2020 by UGM FE BE 05 </span>
          </div>
        </div>
  </footer>
</>
    )
}

export default Registartion