//  API key should be requested from backend for security reason, or in .env file
//  as REACT_APP_API_KEY = "da048c6d87614b9f543279e012d25f7b";
//  to access that API KEY use process.env.REACT_APP_API_KEY
const API_KEY = "da048c6d87614b9f543279e012d25f7b";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/moive?api_key=${API_KEY}&with_genres=99`,
};


export default requests ;