import React, { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import NavBar from "../../components/Navbar/Navbar";
import "./Main.css";
import { handleGetMovies } from "../../lib/api";

const Main = () => {
    const [theMovies, setTheMovies] = useState([])
    const [searchField, setSearchField] = useState("")
    const [user, setTheUser] = useState({})
    const [isFavoriteView, setIsFavoriteView] = useState(false)
    const [toggleUserInfo, setToggleUserInfo] = useState(false)
    const [requestState, setRequestState] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        setRequestState("loading");
        handleGetMovies()
            .then(data => {
                setRequestState("");
                return (
                    setTheMovies(data.contents),
                    setTheUser(data.user))
            })
            .catch(err => setRequestState("error"))
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const categoryHandler = (event) => {
        const { value } = event.target
        setCategory(value);
    }

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
        filteredMovies = filteredMovies.filter(movie => user.favs.includes(movie.id));
    }

    if (category) {
        filteredMovies = filteredMovies.filter(movie => movie.section.toLowerCase() === category.toLowerCase());
    }

    if (requestState === "loading") {
        return (
            <h1>loading</h1>
        );
    }

    if (requestState === "error") {
        return (
            <h1>ups!</h1>
        );
    }

    const categories = [...new Set(theMovies.map(movie => movie.section))];

    return (
        <div className="">
            <NavBar
                userInfo={user}
                toggleUserInfo={toggleUserInfo}
                setUserToggle={setToggleUserInfo}
                favoritesView={isFavoriteView}
                toggleFavoriteView={setIsFavoriteView}
            />
            <div className="mainView  overflow-y-auto">
                <SearchBox
                    categories={categories}
                    searchChange={onSearchChange}
                    categoryHandler={categoryHandler} />
                <div className="movie-container flex flex-wrap align-center justify-center">
                    {filteredMovies.map((movie, i) => {
                        return (
                            <MovieCard
                                key={i}
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

export default Main;