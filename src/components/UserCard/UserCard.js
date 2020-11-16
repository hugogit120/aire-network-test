import React, { useState, useEffect } from "react";
import "./UserCard.css"

const UserCard = () => {
    return (
        <div className="userCard" >
            <img src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png" width="100" height="100" />
            <h1>hugo alvarez</h1>
            <p> favoritos</p>
            <p>last showed</p>
        </div>
    )
}


export default UserCard