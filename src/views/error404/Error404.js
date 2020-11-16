import React from "react";
import "./Error404.css";

const ErrorPage = (props) => {

  const toHome = () => {
    props.history.push("/");
  };

  return (
    <div className="unknowPage">
      {/* <img
        className="image-error"
        alt="404Error"
        src={require("../../images/doggie-question-mark.png")}
      /> */}
      <div className="errorPage-Text">
        <h2>Page not found</h2>
        <h1>404</h1>
        <h3>even the dog dont know where he went</h3>
        <button className="backHomeButton" onClick={toHome}>
          Return
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
