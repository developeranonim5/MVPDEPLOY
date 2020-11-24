import { React }  from 'react';
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
    <Navbar.Brand onClick={() => history.push('./HomeCS')}> <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">  
    </Navbar.Toggle>
    </Navbar>
  </col-12>
</Row>
  <Button onClick={() => history.push('./DataComplaintAssignCS')} variant="outline-primary" type="submit" className="mr-5">Back to Table</Button>
</Navbar>
</Container>
<div className="container">
<div className="row CardTable">
  <div className="col-xl-10 col-md-5 mt-5">  
    <div class="card shadow ">
    <div class="card-header py-3">
    <h4 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> Detail Complaint</h4>
    </div>
    <div class="card-body">
    <div class="row">
        <div class="col-lg-6">
        <div class="mb-5">
            <div class="row">
            <div class="form-group col-md-7">        
                <input type="text" class="form-control" placeholder="Full name" required/>
            </div>
            <div class="form-group col-md-5">        
                <input type="text" class="form-control" placeholder="Rek No" required/>
            </div>
            </div>
            <div class="form-group">        
                <input type="text" class="form-control" placeholder="Title" required/>
            </div>
            <div class="form-group">
                <textarea type="text" rows="7" class="form-control" placeholder="Description" required></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">File Attach :</label>&nbsp;
                    <button type="button" class="btn btn-outline-primary">View File</button>
            </div>   
            </div>
        </div>
        <div class="col-lg-6">
        <div class="form-group"> 
        <label class="form-label">Status :</label><br/>       
            <input type="checkbox" aria-label="Checkbox for following text input" class="ml-4"/> Critical &nbsp;&nbsp;&nbsp;
            <input type="checkbox" aria-label="Checkbox for following text input"/> Non Critical
        </div>
        <div class="form-group">        
        <select class="custom-select" >
            <option selected>-- Select Tag --</option>
            <option value="Review">Review</option>
            <option value="Proccess">Proccess</option>
            <option value="Verification">Verification</option>
            <option value="Closed">Closed</option>
        </select>
        </div>
        <div class="form-group">        
            <textarea type="text" rows="6" class="form-control" placeholder="Description" required></textarea>
        </div>
        <div class="form-group">
        <label class="form-label">Feedback Rate :</label><br/>       
            
        </div>
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