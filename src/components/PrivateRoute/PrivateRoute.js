import React from "react";
import { Route, Redirect } from "react-router-dom";



function PrivateRoute({ component: Component}) {

    //obtengo el token del localStorage, si lo tenemos pasamos al nuevo componente que en este caso seria Main, de lo contrario redirijimos
    //al componente login
const token = localStorage.getItem("token")
  return (
   <Route
    render={ (props)  => token ? <Component {...props} /> : <Redirect to="/login" />}
   />
  );
}

export default PrivateRoute;