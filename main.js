import { API } from "./services/api.js";
import { LocalStorage } from "./services/localStorage.js";

const containerFilmes = document.querySelector('.filmes');
const formulario = document.querySelector('form');
const campoBusca = document.querySelector('input');
const botaoBusca = document.querySelector('.iconeBusca');
const checkboxFavoritos = document.querySelector('input[type="checkbox"]');

checkboxFavoritos.addEventListener('change', verificarStatusCheckbox);
botaoBusca.addEventListener('click', buscarFilme);
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();
  buscarFilme();
});

function verificarStatusCheckbox() {
  const marcado = checkboxFavoritos.checked;
  limparTodosFilmes();
  if (marcado) {
    const filmes = LocalStorage.obterFilmesFavoritos() || [];
    filmes.forEach(filme => renderizarFilme(filme));
  } else {
    buscarTodosFilmesPopulares();
  }
}

async function buscarFilme() {
  const termoBusca = campoBusca.value;
  limparTodosFilmes();
  if (termoBusca != '') {
    const filmes = await API.buscarFilmePorNome(termoBusca);
    filmes.forEach(filme => renderizarFilme(filme));
  } else {
    buscarTodosFilmesPopulares();
  }
}

function limparTodosFilmes() {
  containerFilmes.innerHTML = '';
}

function botaoFavoritoPressionado(evento, filme) {
  const estadoFavorito = {
    favoritado: 'images/heart-fill.svg',
    naoFavoritado: 'images/heart.svg'
  };
  if (evento.target.src.includes(estadoFavorito.naoFavoritado)) {
    evento.target.src = estadoFavorito.favoritado;
    LocalStorage.salvarNoLocalStorage(filme);
  } else {
    evento.target.src = estadoFavorito.naoFavoritado;
    LocalStorage.removerDoLocalStorage(filme.id);
  }
}

async function buscarTodosFilmesPopulares() {
  const filmes = await API.buscarFilmesPopulares();
  filmes.forEach(filme => renderizarFilme(filme));
}

window.onload = function() {
  buscarTodosFilmesPopulares();
}

function renderizarFilme(filme) {
  const { id, title, poster_path, vote_average, release_date, overview } = filme;

  const favoritado = LocalStorage.verificarFilmeFavorito(id);
  const ano = new Date(release_date).getFullYear();
  const imagem = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const elementoFilme = document.createElement('div');
  elementoFilme.classList.add('filme');
  containerFilmes.appendChild(elementoFilme);

  const informacoesFilme = document.createElement('div');
  informacoesFilme.classList.add('informacoes-filme');

  const containerImagemFilme = document.createElement('div');
  containerImagemFilme.classList.add('imagem-filme');

  const imagemFilme = document.createElement('img');
  imagemFilme.src = imagem;
  imagemFilme.alt = `${title} Poster`;

  containerImagemFilme.appendChild(imagemFilme);
  informacoesFilme.appendChild(containerImagemFilme);

  const containerTextoFilme = document.createElement('div');
  containerTextoFilme.classList.add('texto-filme');

  const tituloFilme = document.createElement('h4');
  tituloFilme.textContent = `${title} (${ano})`;

  containerTextoFilme.appendChild(tituloFilme);
  informacoesFilme.appendChild(containerTextoFilme);

  const ratingEFavoritos = document.createElement('div');
  ratingEFavoritos.classList.add('rating-favoritos');

  const containerRating = document.createElement('div');
  containerRating.classList.add('rating');

  const imagemEstrela = document.createElement('img');
  imagemEstrela.src = 'images/star.png';
  imagemEstrela.alt = 'Estrela';

  const avaliacaoFilme = document.createElement('span');
  avaliacaoFilme.classList.add('avaliacao-filme');
  avaliacaoFilme.textContent = vote_average;

  containerRating.appendChild(imagemEstrela);
  containerRating.appendChild(avaliacaoFilme);
  ratingEFavoritos.appendChild(containerRating);

  const favorito = document.createElement('div');
  favorito.classList.add('favorito');

  const imagemFavorito = document.createElement('img');
  imagemFavorito.src = favoritado ? 'images/heart-fill.svg' : 'images/heart.svg';
  imagemFavorito.alt = 'Coração';
  imagemFavorito.classList.add('imagem-favorito');
  imagemFavorito.addEventListener('click', (evento) => botaoFavoritoPressionado(evento, filme));

  const textoFavorito = document.createElement('span');
  textoFavorito.classList.add('filme-favorito');
  textoFavorito.textContent = 'Favoritar';

  favorito.appendChild(imagemFavorito);
  favorito.appendChild(textoFavorito);
  ratingEFavoritos.appendChild(favorito);

  const containerDescricaoFilme = document.createElement('div');
  containerDescricaoFilme.classList.add('descricao-filme');

  const descricaoFilme = document.createElement('span');
  descricaoFilme.textContent = overview;

  containerDescricaoFilme.appendChild(descricaoFilme);
  
  elementoFilme.appendChild(informacoesFilme);
  elementoFilme.appendChild(containerDescricaoFilme);
}
