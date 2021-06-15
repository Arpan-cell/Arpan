import React from "react";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Component/Home";
import Protectedroute from "../Routing/Protectedroute";
export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>

          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />

          <Route path="/Protectedroute" component={Protectedroute} />
          <Protectedroute path="/Home" component={Home} />

          <Route path="/" render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
