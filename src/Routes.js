import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./components/customer/Login";
import Registration from "./components/customer/Registration";
//Page Customer 
import Home from "./components/customer/Home";
import DataCustomer from "./components/customer/DataCustomer";
import HomeCustomer from "./components/customer/HomeCustomer";
import createComplaint from "./components/customer/createComplaint";
import HistoryComplain from "./components/customer/HistoryComplain";
import detailComplaintCustomer from "./components/customer/detailComplaintCustomer";
//Page customer service
import LoginCS from "./components/customer-service/LoginCS";
import HomeCS from "./components/customer-service/HomeCS";
import ProfileCS from "./components/customer-service/ProfileCS";
import PageComplaintCS from "./components/customer-service/pageComplaintCS";
import PageAcceptComplaintCS from "./components/customer-service/PageAcceptComplaintCS";
import DataComplaintAssignCS from "./components/customer-service/DataComplaintAssignCS";
import DetailComplaintCS from "./components/customer-service/DetailComplaintCS";
//Page SPV
import LoginSPV from "./components/supervisor/LoginSPV";
import HomeSPV from "./components/supervisor/HomeSPV";
import TableDataCS from "./components/supervisor/TableDataCS";
import PageEditCS from "./components/supervisor/PageEditCS";
import AllDataComplaint from "./components/supervisor/AllDataComplaint";
import DataComplaintSort from "./components/supervisor/DataComplaintSort";
import DetailComplaintSPV from "./components/supervisor/DetailComplaintSPV";
// Routing
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                   <Route path="/" exact component={Home}/>
                    <Route path="/Home"  component={Home}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/LoginCS" component={LoginCS}/>
                    <Route path="/LoginSPV" component={LoginSPV}/>
                    <Route path="/Registration" component={Registration}/>
                    <Route path="/DataCustomer" component={DataCustomer}/>
                    <Route path="/HomeCustomer" component={HomeCustomer}/>
                    <Route path="/HomeCS" component={HomeCS}/>
                    <Route path="/HomeSPV" component={HomeSPV}/>
                    <Route path="/ProfileCS" component={ProfileCS}/>
                    <Route path="/PageEditCS" component={PageEditCS}/>
                    <Route path="/pageComplaintCS" component={PageComplaintCS}/>
                    <Route path="/PageAcceptComplaintCS" component={PageAcceptComplaintCS}/>
                    <Route path="/DataComplaintAssignCS" component={DataComplaintAssignCS}/>
                    <Route path="/DetailComplaintCS" component={DetailComplaintCS}/>
                    <Route path="/createComplaint" component={createComplaint}/>
                    <Route path="/HistoryComplain" component={HistoryComplain}/>
                    <Route path="/detailComplaintCustomer" component={detailComplaintCustomer}/>
                    <Route path="/TableDataCS" component={TableDataCS}/>
                    <Route path="/AllDataComplaint" component={AllDataComplaint}/>
                    <Route path="/DataComplaintSort" component={DataComplaintSort}/> 
                    <Route path="/DetailComplaintSPV" component={DetailComplaintSPV}/>             
                </Switch>
            </Router>
        )
    }
}