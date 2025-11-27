const API_KEY = '232e6ba0d9ab0864cd32a64c0da59f3c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.error(err);
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.error(err);
    }
};
