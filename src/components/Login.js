import React, { Component, useState, useEffect } from "react";
const md5 = require("md5")

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    return(
        <div className="br4 ba b--black-10 mv4 w-1 w-50-m w-25-l mw6 shadow-5 center">
            <div className="pa4">
                <form className="login measure" type="submit" onSubmit="">
                    <div id="sign_up" className="ba b--transparent ph0 mh0">
                        <h2 className="f1 fw6 ph0 mh0">Login</h2>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                            type="email" 
                            name="email" 
                            id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                            type="password" 
                            name="password" 
                            id="password" />
                        </div>
                    </div>
                    <div className="">
                        <button
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            onSubmit=""> 
                            login 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login