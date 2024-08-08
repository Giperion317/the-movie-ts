import axios from "axios";

const API_KEY:string = 'abb31a7bed98d036dc34aaa5b39687ea';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovies() {
    const response = await axios('/trending/movie/day', {
        params: {
            api_key: API_KEY,
        },
    });
    return response.data.results;
}


export async function fetchMovieFullInfo(id:string | undefined) {
   const response = await axios(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: 'videos',
    },
  });
  return response.data;
}

export async function fetchVideo(id:string | undefined) {
  const response = await axios(`/movie/${id}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}

export async function fetchMovieCast(id:string | undefined) {
  const response = await axios(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
}