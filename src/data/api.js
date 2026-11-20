const configuredApiBase = import.meta.env.VITE_API_BASE_URL?.trim();

export const API_BASE = (
    configuredApiBase || (import.meta.env.DEV ? 'http://localhost:3000' : '')
).replace(/\/+$/, '');

export const MOVIE_DATA_URL = `${import.meta.env.BASE_URL}data/movieData.json`;
export const BLOG_DATA_URL = `${import.meta.env.BASE_URL}data/blogData.json`;
