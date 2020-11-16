import React, { useState, useEffect } from "react";
import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserCard from "../UserCard/UserCard"

const NavBar = ({ toggleFavoriteView, favoritesView, toggleUserInfo, setUserToggle, userInfo }) => {


    return (
        <div className="bg-black-90 fixed top-0 w-100 ph3 pb4 pv4-ns ph4-m ph5-l shadow-3 bb b--white z-1">
            <nav className="flex justify-between items-center f6 fw6 ttu tracked">
                <div className="w5 flex justify-around">
                    <a className={favoritesView ? "link dim red dib mr3" : "link dim white dib mr3"} href="#" onClick={() => !favoritesView && toggleFavoriteView(true)}>Mis favoritas</a>
                    <a className={favoritesView ? "link dim white dib mr3" : "link dim red dib mr3"} href="#" onClick={() => favoritesView && toggleFavoriteView(false)}>Peliculas</a>
                </div>
                <div className="" >

                    <a className="link dim white dib mr5" href="#" onClick={() => setUserToggle(!toggleUserInfo)} >
                        <FontAwesomeIcon className="f3" color="white" icon={solidUser} />
                    </a>
                    {toggleUserInfo ? <UserCard userInfo={userInfo} /> : null}
                </div>
            </nav>
        </div>
    )
}

export default NavBar