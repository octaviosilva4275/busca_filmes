const chaveLocalStorage = 'filmesFavoritos';
const apiKey = '1c383d429dbb75c94641ae495afdce7f'; // Sua chave de API aqui

function obterFilmesFavoritos() {
  return JSON.parse(localStorage.getItem(chaveLocalStorage));
}

function salvarNoLocalStorage(filme) {
  const filmes = obterFilmesFavoritos() || [];
  filmes.push(filme);
  const filmesJSON = JSON.stringify(filmes);
  localStorage.setItem(chaveLocalStorage, filmesJSON);
}

function verificarFilmeFavorito(id) {
  const filmes = obterFilmesFavoritos() || [];
  return filmes.find(filme => filme.id == id);
}

function removerDoLocalStorage(id) {
  const filmes = obterFilmesFavoritos() || [];
  const filmeEncontrado = filmes.find(filme => filme.id == id);
  const novosFilmes = filmes.filter(filme => filme.id != filmeEncontrado.id);
  localStorage.setItem(chaveLocalStorage, JSON.stringify(novosFilmes));
}

export const LocalStorage = {
  obterFilmesFavoritos,
  salvarNoLocalStorage,
  verificarFilmeFavorito,
  removerDoLocalStorage
};
