import Axios from "axios";
import qs from "qs";
import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player/file'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Player = () => {
    const { id } = useParams()
    const device = "Web"
    const token = localStorage.getItem("token")
    const [content, setContent] = useState({})


    useEffect(() => {
        Axios.post("https://dev.perseo.tv/ws/Play.php",
            qs.stringify({ token, device, id }))
            .then(response => setContent(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="bg-black flex justify-center vh-100 pt5">
            <h1>hola</h1>
            <ReactPlayer
                url={content.url}
                width="70%"
                height='70%'
                controls={true}
            />
        </div>
    )
}

export default Player