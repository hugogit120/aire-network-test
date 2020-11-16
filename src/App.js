import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Main from "./views/Main/Main";
import Player from "./views/Player/Player";
import Error404 from "./views/error404/Error404";
import Error500 from "./views/error500/Error500";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/player/:id" exact component={Player} />
        <Route path="/error" exact component={Error500} />
        <PrivateRoute path="/" exact component={Main} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
