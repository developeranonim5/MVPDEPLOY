import React, { useEffect, useState }  from 'react';
import { Navbar,Container, Row, Button} from 'react-bootstrap'; 
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";
import axios from 'axios'

import history from '../../history';

const History =()=>{  
  const url = 'http://13.212.31.237/get-all-data';

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url,
      { headers:{"authorization":JSON.parse(localStorage.getItem("token"))}}).then(json=> setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(cs => {
      return (
        <tr>
          <td>{cs.nama_asli}</td>
          <td>{cs.cs_name}</td>
          <td>{cs.id_status}</td>
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
    <Navbar.Brand onClick={() => history.push('./HomeCS')}> <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">  
    </Navbar.Toggle>
    </Navbar>
  </col-12>
</Row>
  <Button onClick={() => history.push('./HomeCS')} variant="outline-primary" type="submit" className="mr-5">Home</Button>
</Navbar>
</Container>
<div className="container">
<div className="row CardTable">
  <div className="col-xl-12 col-md-5 mt-5">  
    <div class="card shadow ">
    <div class="card-header py-3">
    <h3 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> Data Complaint Unassigne</h3>
    </div>
    <div class="card-body">
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Status Tag</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button onClick={() => history.push('./PageAcceptComplaintCS')} type="submit" class="btn btn-dark">Accept</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button onClick={() => history.push('./PageAcceptComplaintCS')} type="submit" class="btn btn-dark">Accept</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button onClick={() => history.push('./PageAcceptComplaintCS')} type="submit" class="btn btn-dark">Accept</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button onClick={() => history.push('./PageAcceptComplaintCS')} type="submit" class="btn btn-dark">Accept</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button onClick={() => history.push('./PageAcceptComplaintCS')} type="submit" class="btn btn-dark">Accept</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button onClick={() => history.push('./PageAcceptComplaintCS')} type="submit" class="btn btn-dark">Accept</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button onClick={() => history.push('./PageAcceptComplaintCS')} type="submit" class="btn btn-dark">Accept</button></td>
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