import React from "react";
import "./Error404.css";

const ErrorPage = (props) => {

  const toHome = () => {
    props.history.push("/");
  };

  return (
    <div className="unknowPage">
      <div className="errorPage-Text">
        <h2>Página no encontrada</h2>
        <h1>404</h1>
        <button className="backHomeButton" onClick={toHome}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
