import Axios from "axios";
import React, { useState, useEffect } from "react";
import qs from "qs";
import UserCard from "../../components/UserCard/UserCard"
import MovieCard from "../../components/MovieCard/MovieCard"
import SearchBox from "../../components/SearchBox/SearchBox"

const Main = () => {
    const device = "web"
    const token = localStorage.getItem("token")

    const [theMovies, setTheMovies] = useState([])
    const [searchField, setSearchField] = useState("")

    useEffect(() =>{
        Axios.post("https://dev.perseo.tv/ws/GetView.php" ,
        qs.stringify({device, token}))
        .then(({data} ) => setTheMovies(data.contents) )
        .then( console.log(theMovies) )
        .catch(err => console.log(err))
        }, []
    )

    const onSearchChange = (event) => {
        console.log(event.target.value);
        setSearchField(event.target.value);
      };

    const filteredMovies = theMovies.filter((movie) => {
        return movie.id.includes(searchField) || movie.title.toLowerCase().includes(searchField.toLowerCase());
      }); 
      
      return(
          <div className="movie-container">
        {/* <UserCard /> */}
        <SearchBox searchChange={onSearchChange}/>
        {filteredMovies.map(movie => {
            return (
                <MovieCard movie={movie}/>
            )
        })}
        
        </div>
    )
}

export default Main

// cover: "https://www.fotoefectos.com/i/775_aparece-portada-pelicula-goodfellas-montaje-online.jpg"
// duration: 7433
// id: "fcac80a489a23ce515ad169c1df5ceee"
// section: "Infantil"
// title: "Ad Astra"
// url: "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
