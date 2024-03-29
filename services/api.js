const apiKey = '1c383d429dbb75c94641ae495afdce7f'; // Sua chave de API aqui

async function searchMovieByName(title) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&language=en-US&page=1`;
  const fetchResponse = await fetch(url);
  const { results } = await fetchResponse.json();
  return results;
}

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const fetchResponse = await fetch(url);
  const { results } = await fetchResponse.json();
  return results;
} 

export const API = {
  searchMovieByName,
  getPopularMovies
};
