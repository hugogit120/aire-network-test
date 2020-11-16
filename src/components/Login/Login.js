import React, { useState, useEffect } from "react";
import { handleLogin } from "../../lib/api"
import { useHistory } from "react-router-dom";
import "./Login.css";
import md5 from "md5";

const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [wrongEmailInput, setWrongEmailInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (wrongEmailInput && !user) {
            setWrongEmailInput("");
        }
    }, [user])

    const removeModal = () => {
        setErrorMessage("");
    }

    const onSubmitLogin = (event) => {
        event.preventDefault();

        if (user && !emailRegex.test(user)) {
            return setWrongEmailInput("Ingresa un correo válido");
        }

        handleLogin(user, pass)
            .then((data) => {
                if (data.error) {
                    setErrorMessage(data.message);
                } else {
                    localStorage.setItem("token", data.token);
                    history.push("/");
                }
            })
    }

    return (
        <div className="br4 ba b--black-10 mv4 w-1 w-50-m w-25-l mw6 shadow-5 center bg-white">
            <div className="pa4 relative">
                <form className="login measure" type="submit" >
                    <div id="sign_up" className="ba b--transparent ph0 mh0">
                        <h2 className="f1 fw6 ph0 mh0">Inicio de sesión</h2>
                        <div className="mt3 flex flex-column items-center">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70"
                                onChange={e => setUser(e.target.value)}
                                type="email"
                                name="email"
                                id="email-address" />
                            {wrongEmailInput && (
                                <span className="errorMessage">{wrongEmailInput}</span>
                            )}
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Contraseña</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70"
                                onChange={e => setPass(md5(e.target.value))}
                                type="password"
                                name="password"
                                id="password" />
                        </div>
                    </div>
                    <div className="">
                        <button
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            onClick={onSubmitLogin}>
                            Iniciar sesión
                        </button>
                    </div>
                </form>

                {errorMessage && (
                    <div className="frame">
                        <div className="modal absolute">
                            <img src="http://100dayscss.com/codepen/alert.png" width="44" height="38" />
                            <span className="title">Oh snap!</span>
                            <p className="loginErrorMessage">{errorMessage}</p>
                            <div className="button" onClick={removeModal} >Entendido</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login;