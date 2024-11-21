<h1 align="center">MovieFlix</h1> <p align="center"> <img alt="Github top language" src="https://img.shields.io/github/languages/top/gsoaresdz/movieflix?color=56BEB8"> <img alt="Github language count" src="https://img.shields.io/github/languages/count/gsoaresdz/movieflix?color=56BEB8"> <img alt="Repository size" src="https://img.shields.io/github/repo-size/gsoaresdz/movieflix?color=56BEB8"> </p> <p align="center"> <a href="#dart-about">About</a> &#xa0; | &#xa0; <a href="#memo-project-structure">Project Structure</a> &#xa0; | &#xa0; <a href="#sparkles-features">Features</a> &#xa0; | &#xa0; <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0; <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0; <a href="#checkered_flag-execution">Execution</a> &#xa0; | &#xa0; <a href="#memo-license">License</a> &#xa0; | &#xa0; <a href="https://github.com/gsoaresdz" target="_blank">Author</a> </p> <br>

## **:dart: About**

This challenge was completed as a mandatory requirement of the Spring React Bootcamp by [DevSuperior](https://devsuperior.com.br/). The backend was developed in Java using the TDD methodology with tests written in JUnit5. The frontend was built using TypeScript and React (React Router Dom, Context API, and Axios).

## **:memo: Project Structure**

The MovieFlix system is a movie catalog where users can list and review movies. There are two types of users: visitors (VISITOR) and members (MEMBER). Only members can submit reviews.

To access the system, users must log in. Only authenticated users can browse the movies. After logging in, the user is redirected to a paginated list of movies, displayed alphabetically by title. Movies can also be filtered by genre.

When selecting a movie, a details page is displayed, showing all the movie’s information and its reviews. If the user is a MEMBER, they can also leave a review on this page.

Each user has a name, email, and password, with the email serving as the username. Each movie includes a title, subtitle, image, release year, synopsis, and genre. Member users can submit reviews for the movies. A single member user can leave more than one review for the same movie.

### **Mobile Layout**

![image](https://github.com/gsoaresdz/movieflix/assets/69989654/753c9eba-9667-4d79-8af9-bba13d0428b9)

### **Web Layout**

![image](https://github.com/gsoaresdz/movieflix/assets/69989654/f0167a1e-5dc0-4417-a4c0-d763d54022a7)

### **Conceptual Model**

![image](https://github.com/gsoaresdz/movieflix/assets/69989654/179f27cf-7ee2-401e-b2d0-3e816adb9951)

## **:sparkles: Features**

:heavy_check_mark: **User Login**: Only authenticated users can access the system.

:heavy_check_mark: **Movie Listing**: Paginated and alphabetically ordered movie listings.

:heavy_check_mark: **Movie Details**: Page with detailed movie information and reviews.

:heavy_check_mark: **Movie Reviews**: Member users can submit reviews for movies.

:heavy_check_mark: **Genre Filtering**: Option to filter movies by genre.

## **:rocket: Technologies**

### **Backend**

- Java
- Spring Boot
- JUnit5
- JPA / Hibernate
- Maven

### **Frontend**

- HTML / CSS / JS / TypeScript
- ReactJS

### **Production Deployment**

- Backend: Heroku
- Frontend Web: Netlify
- Database: PostgreSQL

## **:white_check_mark: Requirements**

### **Backend**

- Java 11

### **Frontend**

- npm / yarn

## **:checkered_flag: Execution**

### **Backend**

```bash
# Clone the repository
$ git clone https://github.com/gsoaresdz/movieflix.git

# Navigate to the backend project folder
$ cd backend

# Run the project
$ ./mvnw spring-boot:run
```

### **Frontend**

```bash
# Clone the repository
$ git clone https://github.com/gsoaresdz/movieflix.git

# Navigate to the frontend project folder
$ cd frontend

# Install dependencies
$ yarn install

# Run the project
$ yarn start
```

## **:memo: License**

This project is under the MIT license. For more details, see the [LICENSE](LICENSE) file.

Made with :heart: by <a href="https://github.com/gsoaresdz" target="_blank">gsoaresdz</a>
