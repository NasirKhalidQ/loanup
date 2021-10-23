import React from "react";
import Forgot from "./Forgot";
import Login from "./Login";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/forgot">
          <Forgot />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
