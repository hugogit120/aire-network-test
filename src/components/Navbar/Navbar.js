import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard"

const NavBar = ({ toggleFavoriteView, favoritesView, toggleUserInfo, setUserToggle }) => {


    return (
        <div className="bg-black-90 fixed top-0 w-100 ph3 pv3 pv4-ns ph4-m ph5-l shadow-3 bb b--white z-1">
            <nav className="flex justify-between f6 fw6 ttu tracked">
                <div className="w5 flex justify-around">
                    <a className={favoritesView ? "link dim red dib mr3" : "link dim white dib mr3"} href="#" onClick={() => !favoritesView && toggleFavoriteView(true)}>favorites</a>
                    <a className={favoritesView ? "link dim white dib mr3" : "link dim red dib mr3"} href="#" onClick={() => favoritesView && toggleFavoriteView(false)}>movies</a>
                </div>
                <div className="" >
                    <a className="link dim white dib mr3" href="#" onClick={() => setUserToggle(!toggleUserInfo)} >User</a>
                    {toggleUserInfo ? <UserCard /> : null}
                </div>
            </nav>
        </div>
    )
}

export default NavBar