Filmes Populares

Este projeto permite que os usuários pesquisem filmes populares e vejam detalhes sobre eles, como avaliação, descrição e imagem do pôster. Além disso, os usuários podem marcar filmes como favoritos, e a aplicação permitirá que exiba apenas os filmes favoritados quando solicitado.

## Funcionalidades

- **Pesquisa de filmes**: O usuário pode digitar o nome de um filme e buscar por resultados.
- **Favoritar filmes**: O usuário pode marcar filmes como favoritos e esses filmes serão salvos localmente.
- **Filtrar filmes favoritados**: O usuário pode visualizar apenas filmes marcados como favoritos.
- **Exibição de informações detalhadas**: Para cada filme, são exibidas informações como título, ano de lançamento, avaliação e descrição.

## Tecnologias Usadas

- HTML
- CSS
- JavaScript (ES6+)
- API externa para busca de filmes: [The Movie Database (TMDb)](https://www.themoviedb.org/)

## Como Executar

1. Clone este repositório para a sua máquina local:

   git clone https://github.com/seu-usuario/filmes-populares.git

2. Navegue até a pasta do projeto:

   cd filmes-populares

3. Abra o arquivo index.html em seu navegador.

Ou, se você preferir rodar um servidor local para desenvolvimento, pode usar o comando:

   live-server

## Estrutura de Arquivos

- `index.html`: O arquivo HTML principal que contém a estrutura da página.
- `style.css`: O arquivo CSS para estilizar a página.
- `main.js`: O arquivo JavaScript responsável pela lógica da aplicação, incluindo a busca por filmes, favoritação e renderização dos filmes.
- `images/`: Pasta contendo as imagens utilizadas no projeto, como ícones de busca e favoritos.

## Como Funciona

1. **Pesquisa de Filmes**  
O usuário pode digitar o nome de um filme no campo de pesquisa, e a aplicação irá buscar filmes através da API do TMDb. Os resultados são exibidos na tela com informações relevantes sobre o filme, incluindo o título, avaliação e descrição.

2. **Favoritar Filmes**  
Os usuários podem favoritar filmes clicando no ícone de coração ao lado de cada filme. O status de favorito é salvo no armazenamento local (localStorage), e o ícone de coração será atualizado para indicar se o filme está favoritado ou não.

3. **Filtrar Filmes Favoritados**  
O usuário pode selecionar a opção "Mostrar apenas favoritos" para visualizar apenas os filmes que foram marcados como favoritos.

## Como Contribuir

1. Faça o fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Faça o commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para a branch principal (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
