import React, { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import NavBar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading"
import "./Main.css";
import { handleGetMovies } from "../../lib/api";

const Main = (props) => {
    const [theMovies, setTheMovies] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [user, setTheUser] = useState({});
    const [isFavoriteView, setIsFavoriteView] = useState(false);
    const [toggleUserInfo, setToggleUserInfo] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState("");

    useEffect(() => {
        setIsLoading(true);
        handleGetMovies()
            .then(data => {
                setIsLoading(false);
                setTheMovies(data.contents);
                setTheUser(data.user);
            })
            .catch(err => {
                setIsLoading(false);
                props.history.push("/error");
            })
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const categoryHandler = (event) => {
        const { value } = event.target;
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

    if (isLoading) {
        return (
            <Loading />
        );
    }

    const categories = [...new Set(theMovies.map(movie => movie.section))];

    return (
        <div>
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