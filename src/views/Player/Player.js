import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player/file'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { handlePlayerView } from "../../lib/api";

const Player = () => {
    const { id } = useParams()
    const [content, setContent] = useState({})

    useEffect(() => {
        handlePlayerView(id)
            .then(data => setContent(data))
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