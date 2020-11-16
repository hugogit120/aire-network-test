import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactPlayer from 'react-player/file';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { handlePlayerView } from "../../lib/api";
import Loading from "../../components/Loading/Loading";


const Player = () => {
    const { id } = useParams();
    const history = useHistory();

    const [content, setContent] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        handlePlayerView(id)
            .then(data => {
                setIsLoading(false);
                setContent(data);
            })
            .catch(err => {
                setIsLoading(false);
                history.push("/error");
            })
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="bg-black flex justify-center vh-100 pt5">
            <ReactPlayer
                url={content.url}
                width="70%"
                height='70%'
                controls={true}
            />
        </div>
    )
}

export default Player;