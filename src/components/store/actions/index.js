import axios from 'axios';
import * as Types from '../types';

const API_KEY = '74d1111ff793d2c86a4104bab872bc34';

const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetflixOriginals = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`);
        dispatch({ type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results });
    } catch (error) {
        console.log('get Netflix api error', error);
    }
};

export const getTrendingMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`);
        dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('get trendding api error', error);
    }
};

export const getTopRatedMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`);
        dispatch({ type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('get top rated api error', error);
    }
};

export const getActionMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
        dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('get Action api error', error);
    }
};

export const getComedyMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`);
        dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('get comedy api error', error);
    }
};

export const getHorroryMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`);
        dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('get horror api error', error);
    }
};

export const getRomanceMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`);
        dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('get romance api error', error);
    }
};

export const getDocumentaries = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`);
        dispatch({ type: Types.GET_DOCUMENTARIES_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('get Documentaries api error', error);
    }
};

export const setMovieDetail = (movie) => (dispatch) => {
    dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};
