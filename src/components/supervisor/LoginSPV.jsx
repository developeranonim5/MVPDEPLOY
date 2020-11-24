/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { Navbar, Jumbotron, Container,Row, Button} from 'react-bootstrap';
import Signin2 from '../images/signin.svg';
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";
import history from '../../history';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const token = localStorage.getItem('token');

    useEffect(() => {
      if(token) {
        history.push("/HomeSPV");
      }
    }, [history, token]);
     // login the user
    const loginHandle = (e) => {
      e.preventDefault();
      const loginData = { 
        username: username, 
        password: password,
       };
       axios.post("http://13.212.31.237/spv/login", loginData)
       .then(res => {
         if(res.status === 200 ) {
           localStorage.setItem('token', JSON.stringify(res.data.token));
           history.push("/HomeSPV")
         } else {
           alert(res.data.status)
         }
       }, [history])
       .catch(err => {
         console.log(err)
         alert("Missing Password");
       })
    }
    return (
<>
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
  <Button variant="outline-dark" className="mr-5" onClick={() => history.push('./Home')}>Back to Home</Button>
</Navbar>
</Container>
<Jumbotron fluid className="patternSPV">
</Jumbotron>
<div className="container">
  <div className="row TwoCardContainer">
    <div className="col-lg-4 col-md-5 mr-auto">  
    <img className="Image-Signin" src={Signin2}/>   
    </div>
  <div className="col-lg-5 col-md-5 ">  
    <div className="card shadow">
    <div className="card-header py-3">
    <h2 className="m-0 font-weight-bold text-dark text-center"><i className="fa fa-pen-alt"></i> Form Sign In</h2>
    </div>
    <div className="card-body">
      <form className="" action="POST">
        <div className="form-group">
          <label className="">Username :</label>
          <input type="text" className="form-control" autoComplete="off" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
        </div>
        <div className="form-group">
          <label className="">Password :</label>
          <input type="password" className="form-control" value={password} name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        </div>        
        <div className="form-group ml-auto">
            <button onClick={loginHandle} type="submit" name="signIn" className="btn btn-dark btn-block"><i className="fa fa-upload fa-fw"></i>Sign In</button>
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

export default Login