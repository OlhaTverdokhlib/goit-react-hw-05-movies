import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '55bbd5b4793347702f14e57aeb59d8e4';


export const getTrendingMovies = async()=> {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-GB`
  );
  return response.data.results;
}


export const getSearchMovie = async(query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
}


export const getMovieDetails = async (movie_id = '') => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-GB`
  );
  return data;
};

export const getMovieCredits = async (movie_id = '') => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-GB`
  );
  return data;
};

export const getMovieReviews = async (movie_id = '') => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-GB&page=1`
  );
  return data;
};

