import './App.css';
import React, {Component} from "react"
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Login from "./components/Login/Login"
import Main from "./components/Main/Main"

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Switch>
        <Route path="/login" exact component={Login} />
      
        <PrivateRoute path="/" exact component={Main} />
      </Switch>
    
    </div>
  );
}

export default App;
