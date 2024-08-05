import axios from "axios";

const API_KEY:string = 'abb31a7bed98d036dc34aaa5b39687ea';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovies() {
    const response = await axios('/trending/get-trending', {
        params: {
            api_key: API_KEY,
        },
    });
    return response.data.results;
}