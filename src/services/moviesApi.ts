import axios from "axios";

const API_KEY: string = "abb31a7bed98d036dc34aaa5b39687ea";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchMovies = async (page: number | undefined) => {
  try {
    const { data } = await axios(
      `trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

export async function fetchMovieFullInfo(id: string | undefined) {
  try {
    const response = await axios(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchVideo(id: string | undefined) {
  try {
      const response = await axios(`/movie/${id}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCast(id: string | undefined) {
  try {
      const response = await axios(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoviesSearch(query: string, page: number) {
  try {
    const response = await axios("/search/movie", {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
  return response.data.results;
  } catch (error) {
    console.error(error);
  }
  }
