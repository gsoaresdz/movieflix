import { useState, useEffect, useCallback } from 'react';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL, requestBackend } from 'util/requests';
import { Movie } from 'types/movie';
import { Link } from 'react-router-dom';
import { SpringPage } from 'types/vendor/spring';
import MovieCard from 'components/MovieCard';
import GenreFilter, { GenreFilterData } from 'components/GenreFilter';
import Pagination from 'components/Pagination';

import './styles.css';

const MovieCatalog = () => {
  return (
    <>
      <main className="movie-links-main-container">
        <section>
          <h2>Tela listagem de filmes</h2>
          <p className="movie-links">
            <Link to="/movies/1">
              Acessar /movies/1
            </Link>
          </p>
          <p className="movie-links">
            <Link to="/movies/2">
              Acessar /movies/2
            </Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default MovieCatalog;