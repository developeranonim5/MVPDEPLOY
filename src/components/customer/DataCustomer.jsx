
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Navbar, Container, Row, Button, Jumbotron} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import Profile from '../images/40614.jpg';
import "../css/styles.css";
import history from '../../history';

import axios from 'axios';

const DataCustomer =()=>{
    const [filephoto, setFilephoto] = useState("");
    const [nama_lengkap, setFullname] = useState("");
    const [no_ktp, setIdktp] = useState("");
    const [no_rekening, setNorek] = useState("");

    const SubmitProfile = (e) => {
      e.preventDefault();

    const Profile = {
      filephoto:filephoto,
      nama_lengkap:nama_lengkap,
      no_ktp:no_ktp,
      no_rekening:no_rekening,
    };

    axios.put("http://13.212.31.237/customer/detail", Profile, 
    {headers:{"authorization":JSON.parse(localStorage.getItem("token"))}})
      .then(res => {
        console.log(res);
        console.log(res.data);
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
  <Button variant="outline-primary" onClick={() => history.push('./HomeCustomer')} className="mr-5">Home</Button>
</Navbar>
</Container>
<Jumbotron fluid className="pattern"></Jumbotron>
<div className="container">
<div className="row CardProfile">
  <div className="col-xl-8 col-md-5 mt-5">  
    <div className="card shadow ">
    <div className="card-header py-3">
    <h2 className="m-0 font-weight-bold text-dark text-center"><i className="fa fa-pen-alt"></i> Data Profile</h2>
    </div>
    <div className="card-body">
      <form className="" action="POST">
        <div className="row">
        <div className="col-lg-5">
            <div className="mb-3 text-center">
                <img src={Profile} width="150" height="170" className="rounded"/>
            </div>
            <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" name="filephoto" value={filephoto} onChange={(e) => setFilephoto(e.target.value)} className="custom-file-input" id="inputGroupFile01"/>
            <label className="custom-file-label" for="inputGroupFile01">Choose file</label>           
          </div>
        </div>
        <small > <i className="Text-Format">* File max size 1 MB, File type .jpg, png, jpeg.</i></small>
        </div>
        <div className="col-lg-7">
        <div className="form-group">        
          <input type="text" name="nama_lengkap" value={nama_lengkap} onChange={(e) => setFullname(e.target.value)} className="form-control" autoComplete="off" placeholder="Full name" required/>
        </div>
        <div className="form-group">      
          <input type="number" name="no_ktp" value={no_ktp} onChange={(e) => setIdktp(e.target.value)} className="form-control" autoComplete="off" placeholder="ID KTP" required/>
        </div>
        <div className="form-group">     
          <input type="number" name="no_rekening" value={no_rekening} onChange={(e) => setNorek(e.target.value)} className="form-control" autoComplete="off" placeholder="No Rek" required/>
        </div> 
        <div className="form-group mr-auto">
            <button type="submit" onClick={SubmitProfile} name="profile" className="btn btn-dark btn-block"><i className="fa fa-upload fa-fw"></i>Save</button>
        </div> 
        </div>
        </div>      
      </form>
    </div>
  </div>
  </div> 
</div>
</div>
<footer className="sticky-footer bg-white mt-5 footer">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; 2020 by UGM FE BE 05 </span>
          </div>
        </div>
  </footer>  
</>
    )
}

export default DataCustomer