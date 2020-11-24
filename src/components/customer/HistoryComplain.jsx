import React, { useState, useEffect }  from 'react';
import { Navbar,Container, Row, Table, Button, Modal, Col, Form, Badge} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';  
import axios from 'axios';  
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";

import history from '../../history';

const History = () => { 

  const url = 'https://jsonplaceholder.typicode.com/users'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.street}</td>
          <td>{user.company.name}</td>
          <td><button type="submit" class="btn btn-dark">Detail</button></td>
        </tr>
      )
    })
  }
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
  <Button onClick={() => history.push('./HomeCustomer')} variant="outline-primary" type="submit" className="mr-5">Home</Button>
</Navbar>
</Container>
<div className="container">
<div className="row CardTable">
  <div className="col-xl-12 col-md-5 mt-5">  
    <div class="card shadow ">
    <div class="card-header py-3">
    <h3 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> History Complaint</h3>
    </div>
  <div class="card-body">
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>{renderTable()}</tbody>
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