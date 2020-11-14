import React, { useState, useEffect } from "react";

const MovieCard = ({movie: {title, cover, duration, section, id}}) => {
    return (
        <div className="container w-50 flex bg-white br4 pa3 ma2 shadow-3" >
            <div className="movie-cover">
                <img className="mt0" src={cover} width="150" height="150" />
                <p>{section}</p>
            </div>
            <div className="flex w-100 pl4 justify-between">
                <div className=" ">
                    <h2>{title}</h2>
                    <small>{duration}</small>
                    
                </div>
                <div>
                    <h2>Fav</h2>
                </div>
            </div>
        </div>
    )
}

export default MovieCard