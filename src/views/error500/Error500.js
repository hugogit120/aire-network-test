import React from "react";
import "../error404/Error404.css"

const ErrorPage = (props) => {

    const toHome = () => {
        props.history.push("/");
    };

    return (
        <div className="unknowPage">
            <div className="errorPage-Text">
                <h2>Lo sentimos, ha habido un error</h2>
                <h1>500</h1>
                <button className="backHomeButton" onClick={toHome}>
                    Volver
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
