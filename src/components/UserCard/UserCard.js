import React from "react";
import { useHistory } from "react-router-dom";
import "./UserCard.css";


const UserCard = ({ userInfo }) => {

    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("token");
        history.push("/login");
    }

    return (
        <div className="flex flex-column items-center userCard bg-black absolute z-1 pa2 white" >
            <div className="br-100 w4 h4 bg-gray">
                <img className="mt3" src={userInfo.avatar} width="100" height="100" />
            </div>

            <h1>{userInfo.name}</h1>
            <p>pelis favoritas: {userInfo.favs.length}</p>

            <button onClick={logout}> cerrar sesion </button>
        </div>
    )
}


export default UserCard;