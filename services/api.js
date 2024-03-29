const apiKey = '1c383d429dbb75c94641ae495afdce7f'; // Sua chave de API aqui

async function buscarFilmePorNome(nome) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${nome}&language=en-US&page=1`;
  const respostaFetch = await fetch(url);
  const { results } = await respostaFetch.json();
  return results;
}

async function buscarFilmesPopulares() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const respostaFetch = await fetch(url);
  const { results } = await respostaFetch.json();
  return results;
} 

export const API = {
  buscarFilmePorNome,
  buscarFilmesPopulares
};
