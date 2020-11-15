import React from "react";
import {
    Link
} from "react-router-dom";
import regularSvg from "./fav-icon/heart-regular.svg"
import solidSvg from "./fav-icon/heart-solid.svg"

const MovieCard = ({ movie: { title, cover, duration, section, id }, addFavorite, isFavorite }) => {
    return (
        <div className="container grow center bg-white br4 pa3 f5 ma2 shadow-3" >
            <div className="movie-cover">
                <Link to={`player/${id}`}>
                    <img className="mt0" src={cover} width="300" height="300" />
                </Link>
                <h2>{title}</h2>
            </div>
            <div className="flex w-100 pl4 justify-between">
                <div className=" ">
                    <p>{section}</p>
                    <small>{duration}</small>
                </div>
                <div className="w-20 pointer" onClick={() => addFavorite(id)}>
                    <img src={isFavorite ? solidSvg : regularSvg} />
                </div>
            </div>
        </div>
    )
}

export default MovieCard