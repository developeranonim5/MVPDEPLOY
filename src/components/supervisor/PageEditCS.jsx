
/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Container, Row, Button, Jumbotron} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import Profile from '../images/40614.jpg';
import "../css/styles.css";

import history from '../../history';

const DataCustomer =()=>{
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
  <Button onClick={() => history.push('./TableDataCS')} variant="outline-primary" type="submit" className="mr-5">Back to Table</Button>
</Navbar>
</Container>
<Jumbotron fluid className="pattern"></Jumbotron>
<div className="container">
<div className="row CardProfile">
  <div className="col-xl-10 col-md-5 mt-5">  
    <div class="card shadow ">
    <div class="card-header py-3">
    <h3 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> Data Profile CS</h3>
    </div>
    <div class="card-body">
      <form class="" action="POST">
        <div class="row">
        <div class="col-lg-3">
            <div class="mb-3">
                <img src={Profile} width="150" height="170" class="img-thumbnail rounded mx-auto d-block"/>
            </div>
            <div class="form-group text-center">
          <p>Real Photo</p>
        </div>
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"/>
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
          </div>
        </div>
        </div>
        <div class="col-lg-3">
            <div class="mb-3">
                <img src={Profile} width="150" height="170" class="img-thumbnail rounded mx-auto d-block"/>
            </div>
            <div class="form-group text-center">
          <p>CS Photo</p>
        </div>
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"/>
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
          </div>
        </div>
        </div>
        <div class="col-lg-6">
        <div class="form-group">
        <label class="form-label">Full name :</label>       
          <input type="text" class="form-control" placeholder="Full name" required/>
        </div>
        <div class="form-group"> 
        <label class="form-label">CS name :</label>
          <input type="password" class="form-control" placeholder="CS name" required/>
        </div>
        <div class="form-group"> 
        <label class="form-label">Status :</label><br/>        
            <input type="checkbox" aria-label="Checkbox for following text input" class="ml-4"/> Active &nbsp;
            <input type="checkbox" aria-label="Checkbox for following text input"/> Non Active
        </div>
        <div class="form-group mr-auto">
            <button type="submit" id="btnUpload" name="update" class="btn btn-dark btn-block"><i class="fa fa-upload fa-fw"></i>Update</button>
        </div> 
        </div>
        <div class="form-group ml-3">
        <small > <i className="Text-Format">* File max size 1 MB, File type .jpg, png, jpeg.</i></small> 
        </div>
        </div>       
      </form>
    </div>
  </div>
  </div> 
</div>
</div>
<footer class="sticky-footer bg-white mt-5 footer">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; 2020 by UGM FE BE 05 </span>
          </div>
        </div>
  </footer>  
</>
    )
}

export default DataCustomer