import axios from "axios";

// base url to make requests to the movie  database
// https://axios-http.com/docs/instance

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


// instance.get('/foo-bar');

// // https://api.themoviedb.org/3/foo-bar



// https://www.themoviedb.org/documentation/api

export default instance;
