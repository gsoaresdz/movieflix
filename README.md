<h1 align="center">MovieFlix</h1>
<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/gsoaresdz/movieflix?color=56BEB8">
  <img alt="Github language count" src="https://img.shields.io/github/languages/count/gsoaresdz/movieflix?color=56BEB8">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gsoaresdz/movieflix?color=56BEB8">
</p>
<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#memo-estrutura-do-projeto">Estrutura do Projeto</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-execução">Execução</a> &#xa0; | &#xa0;
  <a href="#memo-licença">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/gsoaresdz" target="_blank">Autor</a>
</p>
<br>

## **:dart: Sobre**

Desafio realizado como requisito obrigatório do Bootcamp Spring React da [DevSuperior](https://devsuperior.com.br/). O desenvolvimento do back-end foi feito em Java, utilizando a metodologia TDD com testes escritos usando o JUnit5. O desenvolvimento do front-end utilizou TypeScript e React (React Router Dom, Context API e Axios).

## **:memo: Estrutura do Projeto**

O sistema MovieFlix é um catálogo de filmes que podem ser listados e avaliados pelos usuários. Existem dois tipos de usuários: visitantes (VISITOR) e membros (MEMBER). Apenas os usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, é necessário que o usuário faça login. Somente usuários logados podem navegar pelos filmes. Após o login, o usuário é direcionado para a listagem de filmes, que são exibidos de forma paginada e ordenados alfabeticamente por título. É possível filtrar os filmes por gênero.

Ao selecionar um filme, uma página de detalhes é exibida, mostrando todas as informações do filme, além de suas avaliações. Se o usuário for um MEMBER, ele também pode registrar uma avaliação nesta página.

Cada usuário tem um nome, email e senha, sendo o email utilizado como nome de usuário. Cada filme conta com um título, subtítulo, imagem, ano de lançamento, sinopse e gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

### **Layout mobile**

![image](https://github.com/gsoaresdz/movieflix/assets/69989654/753c9eba-9667-4d79-8af9-bba13d0428b9)

### **Layout Web**

![image](https://github.com/gsoaresdz/movieflix/assets/69989654/f0167a1e-5dc0-4417-a4c0-d763d54022a7)

### Modelo conceitual

![image](https://github.com/gsoaresdz/movieflix/assets/69989654/179f27cf-7ee2-401e-b2d0-3e816adb9951)

## **:sparkles: Features**

:heavy_check_mark: **Login de Usuário**: Apenas usuários autenticados podem acessar o sistema.

:heavy_check_mark: **Listagem de Filmes**: Filmes listados de forma paginada e ordenados alfabeticamente.

:heavy_check_mark: **Detalhes do Filme**: Página com informações detalhadas do filme e suas avaliações.

:heavy_check_mark: **Avaliação de Filmes**: Usuários membros podem registrar avaliações para os filmes.

:heavy_check_mark: **Filtragem por Gênero**: Opção de filtrar filmes por gênero.

## **:rocket: Tecnologias**

### **Back end**

- Java
- Spring Boot
- JUnit5
- JPA / Hibernate
- Maven

### **Front end**

- HTML / CSS / JS / TypeScript
- ReactJS

### **Implantação em produção**

- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

## **:white_check_mark: Requerimentos**

### **Back end**

- Java 11

### **Front end**

- npm / yarn

## **:checkered_flag: Execução**

### **Back end**

```bash
# clonar repositório
$ git clone https://github.com/gsoaresdz/movieflix.git

# entrar na pasta do projeto back end
$ cd backend

# executar o projeto
$ ./mvnw spring-boot:run

```

### **Front end**

```bash
# clonar repositório
$ git clone https://github.com/gsoaresdz/movieflix.git

# entrar na pasta do projeto front end web
$ cd frontend

# instalar dependências
$ yarn install

# executar o projeto
$ yarn start
```

## **:memo: Licença**

Este projeto está sob licença do MIT. Para obter mais detalhes, consulte o arquivo [LICENSE](LICENSE).

Feito com :heart: by <a href="https://github.com/gsoaresdz" target="_blank">gsoaresdz</a>

&#xa0;

<a href="#top">De volta ao topo</a>
