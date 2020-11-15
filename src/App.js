import './App.css';
import React, { Component } from "react"
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Login from "./components/Login/Login"
import Main from "./views/Main/Main"
import Player from "./views/Player/Player"

function App() {


  return (
    <div className="App">

      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Main} />
        <Route path="/player/:id" exact component={Player} />
      </Switch>

    </div>
  );
}

export default App;
