import axios from "axios";
import qs from "qs";
const device = "web";
const token = localStorage.getItem("token");

const api = axios.create({
    baseURL: "https://dev.perseo.tv/ws"
});

export const handleLogin = (user, pass) => {
    return (
        api.post("/Login.php",
            qs.stringify({ user, pass, device }))
            .then(({ data }) => data)
    )
}

export const handleGetMovies = () => {
    return (
        api.post("/GetView.php",
            qs.stringify({ device, token }))
            .then(({ data }) => data)
    )
}

export const handlePlayerView = (id) => {
    return (
        api.post("/Play.php",
            qs.stringify({ device, token, id }))
            .then(({ data }) => data)
    )
}