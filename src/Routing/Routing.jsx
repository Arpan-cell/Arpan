import React from "react";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import Header from "../Layout/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "../Component/Profile";
import Productcategory from '../Products/Productcategory/Productcategory'
import Protectedroute from '../Routing/Protectedroute';
import Categorydetails from "../Products/Categorydetails/Categorydetails";
import Productdetails from "../Products/Productdetails/Productdetails";
import Cart from "../Products/Cart/Cart";
import Home from "../Component/Home";


export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Switch>
        <Route exact path="/Home" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/Protectedroute" component={Protectedroute} />
          <Route exact path="/Productcategory" component={Productcategory} />
          <Route exact path="/Categorydetails/:cname" component={Categorydetails} />
          <Route exact path="/Productdetails/:pname" component={Productdetails} />
          <Route exact path='/Cart' component={Cart}/>
          <Protectedroute path="/Profile" component={Profile} />
          
        </Switch>
      </BrowserRouter>
    </>
  );
}
