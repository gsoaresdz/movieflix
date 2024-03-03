# **MovieFlix**

Desafio realizado como requisito obrigatório do Bootcamp Spring React da [DevSuperior](https://devsuperior.com.br/). O desenvolvimento do back-end foi feito em Java, utilizando a metodologia TDD com testes escritos usando o JUnit5. O desenvolvimento do front-end utilizou TypeScript e React (React Router Dom, Context API e Axios).

## **Sobre o projeto**

O sistema MovieFlix é um catálogo de filmes que podem ser listados e avaliados pelos usuários. Existem dois tipos de usuários: visitantes (VISITOR) e membros (MEMBER). Apenas os usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, é necessário que o usuário faça login. Somente usuários logados podem navegar pelos filmes. Após o login, o usuário é direcionado para a listagem de filmes, que são exibidos de forma paginada e ordenados alfabeticamente por título. É possível filtrar os filmes por gênero.

Ao selecionar um filme, uma página de detalhes é exibida, mostrando todas as informações do filme, além de suas avaliações. Se o usuário for um MEMBER, ele também pode registrar uma avaliação nesta página.

Cada usuário tem um nome, email e senha, sendo o email utilizado como nome de usuário. Cada filme conta com um título, subtítulo, imagem, ano de lançamento, sinopse e gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

### **Layout mobile**

![image](https://github.com/gsoaresdz/movieflix/assets/69989654/753c9eba-9667-4d79-8af9-bba13d0428b9)

### **Layout Web**

![image](https://github.com/gsoaresdz/movieflix/assets/69989654/f0167a1e-5dc0-4417-a4c0-d763d54022a7)


## **Tecnologias utilizadas**

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

## **Como executar o projeto**

### **Back end**

Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/gsoaresdz/movieflix.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run

```

### **Front end**

Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/gsoaresdz/movieflix.git

# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
yarn install

# executar o projeto
yarn start

```
