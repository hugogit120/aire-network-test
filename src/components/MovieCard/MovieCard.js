import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart, faClock } from '@fortawesome/free-solid-svg-icons'
import { faHeart as outlinedHeart } from '@fortawesome/free-regular-svg-icons'
import "./MovieCard.css"


const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    return (`${hours}h : ${minutes}m : ${seconds}s`)
}

const MovieCard = ({ movie: { title, cover, duration, section, id }, addFavorite, isFavorite }) => {

    return (
        <div className="container mw8 grow bg-white br4 pa2 shadow-3 overflow-hidden">
            <div className="movie-cover">
                <Link to={`player/${id}`}>
                    <img className="mt0 br4" src={cover} width="300" height="300" />
                </Link>
                <div className="w6 f7">
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="flex w-100 pl4 justify-between f6">
                <div className="flex flex-column items-start ">
                    <p className="b">{section}</p>
                    <div>
                        <FontAwesomeIcon icon={faClock} />
                        <small className="ml2">{secondsToTime(duration)}</small>
                    </div>

                </div>
                <div className="w-20 pointer flex justify-center items-center" onClick={() => addFavorite(id)}>
                    <FontAwesomeIcon className="f2" color="red" icon={isFavorite ? solidHeart : outlinedHeart} />
                </div>
            </div>
        </div>
    )
}

export default MovieCard