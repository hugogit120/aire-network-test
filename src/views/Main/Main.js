import Axios from "axios";
import React, { useState, useEffect } from "react";
import qs from "qs";
import UserCard from "../../components/UserCard/UserCard"
import MovieCard from "../../components/MovieCard/MovieCard"
import SearchBox from "../../components/SearchBox/SearchBox"
import NavBar from "../../components/Navbar/Navbar";

const Main = () => {
    const device = "web"
    const token = localStorage.getItem("token")

    const [theMovies, setTheMovies] = useState([])
    const [searchField, setSearchField] = useState("")
    const [user, setTheUser] = useState({})
    const [isFavoriteView, setIsFavoriteView] = useState(false)
    const [requestState, setRequestState] = useState("")

    useEffect(() => {
        setRequestState("loading");
        Axios.post("https://dev.perseo.tv/ws/GetView.php",
            qs.stringify({ device, token }))
            .then(({ data }) => {
                setRequestState("");
                return (
                    setTheMovies(data.contents),
                    setTheUser(data.user))
            })
            .then(console.log(user))
            .catch(err => setRequestState("error"))
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const addFavoriteHandler = (id) => {
        const { favs } = user;
        if (favs.includes(id)) {
            const newFavs = favs.filter(favId => favId !== id);
            setTheUser({ ...user, favs: newFavs });
        } else {
            favs.push(id);
            setTheUser({ ...user, favs });
        }
    }

    let filteredMovies = theMovies.filter((movie) => {
        return movie.id.includes(searchField) || movie.title.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isFavoriteView && user.favs) {
        filteredMovies = filteredMovies.filter(movie => user.favs.includes(movie.id))
    }

    if (requestState === "loading") {
        return (
            <h1>loading</h1>
        )
    }

    if (requestState === "error") {
        return (
            <h1>ups!</h1>
        )
    }

    return (
        <div className="">
            <NavBar
                favoritesView={isFavoriteView}
                toggleFavoriteView={setIsFavoriteView} />
            <div className="mt6 vh-100 overflow-y-auto">
                <SearchBox searchChange={onSearchChange}
                    favoritesView={isFavoriteView} />
                <div className="movie-container flex flex-wrap">
                    {filteredMovies.map(movie => {
                        return (
                            <MovieCard
                                addFavorite={addFavoriteHandler}
                                movie={movie}
                                isFavorite={user.favs && user.favs.some(id => movie.id === id)}
                            />
                        )
                    })}
                </div>
            </div>
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
