const FIND_ALL_MOVIES = "http://localhost:8080/findAllMovies"
const FIND_MOVIE_BY_ID = "http://localhost:8080/findMovieById"
const CREATE_MOVIE_URL = "http://localhost:8080/createMovie"
const DELETE_MOVIE_URL = "http://localhost:8080/deleteMovie"
const RENAME_MOVIE = "http://localhost:8080/renameMovie"

const findAllMovies = () =>
  fetch(`${FIND_ALL_MOVIES}`)
    .then(response => response.json())

const findMovieById = (id) =>
  fetch(`${FIND_MOVIE_BY_ID}/${id}`)
    .then(response => response.json())

const createMovie = () =>
  fetch(`${CREATE_MOVIE_URL}`)
    .then(response => response.json())

const deleteMovie = (id) =>
  fetch(`${DELETE_MOVIE_URL}/${id}`)

const renameMovie = (movie) =>
  fetch(`${RENAME_MOVIE}/${movie.id}/${movie.title}`)
   .then(response => response.json())
