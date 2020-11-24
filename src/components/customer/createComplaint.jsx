/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import { Navbar, Jumbotron, Container,Row, Button} from 'react-bootstrap';
import createComplain from '../images/create-complain.svg';
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";
import history from '../../history';

import axios from 'axios';

const CreateComplaint = () =>{
    const [filephoto, setFilephoto] = useState("");
    const [judul, setTitle] = useState("");
    const [detail_komplain, setDescription] = useState("");

    const SubmitTicket = (e) => {
      e.preventDefault();

    const Ticket = {
      filephoto:filephoto,
      judul:judul,
      detail_komplain:detail_komplain,
    };

    axios.post("http://3db02ffddd61.ngrok.io/complaint/create", Ticket, 
    {headers:{"authorization":JSON.parse(localStorage.getItem("token"))}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

    return (
<>
<Container fluid >
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
  <Button variant="outline-primary" type="submit" className="mr-5" onClick={() => history.push('./HomeCustomer')}>Home</Button>
</Navbar>
</Container>
<Jumbotron fluid className="pattern">
</Jumbotron>
<div className="container">
  <div className="row TwoCardContainer">
    <div className="col-xl-4 col-md-5 mr-auto">  
    <img src={createComplain} width="400" height="400"/>   
    </div>
  <div className="col-xl-6 col-md-6 mr-4 mt-2">  
    <div className="card shadow">
    <div className="card-header py-3">
    <h3 className="m-0 font-weight-bold text-dark text-center"><i className="fa fa-pen-alt"></i> Add New Complaint</h3>
    </div>
    <div className="card-body">
      <form className="" action="POST">
        <div className="form-group">
          <label className="">Title :</label>
          <input type="text" autoComplete="off" className="form-control" name="judul" value={judul} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required/>
        </div>
        <div className="form-group">
          <label className="">Description :</label>
          <textarea type="text" autoComplete="off" className="form-control" name="detail_komplain" value={detail_komplain} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
        </div>
        <div className="input-group mb-1">
          <div className="custom-file">
            <input type="file" name="filephoto" value={filephoto} onChange={(e) => setFilephoto(e.target.value)} className="custom-file-input" id="inputGroupFile01"/>
            <label className="custom-file-label" for="inputGroupFile01">Choose file</label>           
          </div>
        </div>
        <div className="mb-2">
        <small> <i className="Text-Format">* File max size 1 MB, File type .jpg, png, jpeg.</i></small>
        </div>
        <div className="form-group ml-auto">
            <button type="submit" onClick={SubmitTicket} id="btnUpload" name="ticket" className="btn btn-dark btn-block"><i className="fa fa-upload fa-fw"></i>Submit Ticket</button>
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

export default CreateComplaint