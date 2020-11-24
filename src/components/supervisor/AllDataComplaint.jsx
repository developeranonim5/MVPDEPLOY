import React  from 'react';
import { Navbar,Container, Row, Button} from 'react-bootstrap'; 
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";

import history from '../../history';

const History =()=>{  
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
  <Button variant="outline-primary" onClick={() => history.push('./HomeSPV')} type="submit" className="mr-5">Home</Button>
</Navbar>
</Container>
<div className="container">
<div className="row CardTable">
  <div className="col-xl-12 col-md-5 mt-5">  
    <div class="card shadow ">
    <div class="card-header py-3">
    <h4 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> Data Complaint</h4>
    </div>
    <div class="card-body">
    <div class="row">
    <div class="form-group col-md-4">
    <select class="custom-select">
            <option selected>-- Select Tag --</option>
            <option value="Review">Review</option>
            <option value="Proccess">Proccess</option>
            <option value="Verification">Verification</option>
            <option value="Closed">Closed</option>
        </select>
    </div>
    <div class="form-group col-md-3">
    <button type="submit" onClick={() => history.push('./DataComplaintSort')} name="import" class="btn btn-dark">View Data</button>
    </div>
    </div>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">Status Tag</th>
      <th scope="col">Status Complaint</th>
      <th scope="col">Assign by</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>ATM Broken</td>
      <td>Review</td>
      <td>Review</td>
      <td>CS-01</td>
      <td>
        <button onClick={() => history.push('./DetailComplaintSPV')} type="submit" name="import" class="btn btn-warning">Detail</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>ATM Broken</td>
      <td>Review</td>
      <td>Review</td>
      <td>CS-01</td>
      <td> <button type="submit" name="import" class="btn btn-warning">Detail</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ATM Broken</td>
      <td>Review</td>
      <td>Review</td>
      <td>CS-01</td>
      <td> <button type="submit" name="import" class="btn btn-warning">Detail</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ATM Broken</td>
      <td>Review</td>
      <td>Review</td>
      <td>CS-01</td>
      <td> <button type="submit" name="import" class="btn btn-warning">Detail</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ATM Broken</td>
      <td>Review</td>
      <td>Review</td>
      <td>CS-01</td>
      <td> <button type="submit" name="import" class="btn btn-warning">Detail</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ATM Broken</td>
      <td>Review</td>
      <td>Review</td>
      <td>CS-01</td>
      <td> <button type="submit" name="import" class="btn btn-warning">Detail</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ATM Broken</td>
      <td>Review</td>
      <td>Review</td>
      <td>CS-01</td>
      <td> <button type="submit" name="import" class="btn btn-warning">Detail</button></td>
    </tr>
  </tbody>
</table>
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