class MovieList extends React.Component {

  state = {
    movies: []
  }

  findAllMovies = () =>
    findAllMovies()
      .then(movies => this.setState({movies}))

  componentDidMount = () =>
    this.findAllMovies()

  createMovie = () =>
    createMovie()
      .then(this.findAllMovies)

  deleteMovie = (id) =>
    deleteMovie(id)
      .then(this.findAllMovies)

  render() {
    return(
      <div>
        <h1>Movie List</h1>
        <table>
          <tbody>
          {
            this.state.movies.map(movie =>
              <tr>
                <td>
                  {movie.title}
                </td>
                <td>
                  <button onClick={() => this.deleteMovie(movie.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <a href={`movie-editor.html?id=${movie.id}`}>
                    Edit
                  </a>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
        <button onClick={this.createMovie}>
          Create
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <MovieList/>, document.getElementById("root"))
