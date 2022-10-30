import axios from 'axios';

const KEY = '0166c28893f9efa335e2a16915462c94';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/',
});

// export const getPopMovies = async (page = 1, language = 'en')
export const getPopMovies = async () => {
  try {
    const response = await api.get(`3/trending/movie/day?api_key=${KEY}`);
    const newObj = await response.data;
    return newObj;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchMovies = async name => {
  try {
    const response = await api.get(
      `3/search/movie?api_key=${KEY}&query=${name}&include_adult=false`
    );
    const newObj = await response.data;
    return newObj;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await api.get(`3/movie/${id}?api_key=${KEY}`);
    const newObj = await response.data;
    return newObj;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieActors = async id => {
  try {
    const response = await api.get(`3/movie/${id}/credits?api_key=${KEY}`);
    const newObj = await response.data;
    return newObj;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await api.get(`3/movie/${id}/reviews?api_key=${KEY}`);
    const newObj = await response.data;
    return newObj;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
