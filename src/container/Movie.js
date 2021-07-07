import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "../components/common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/ListGroup";
import MoviesTable from "../components/MoviesTable";
class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      selectGenre: null,
    };
  }

  componentDidMount() {
    const genres = [{ name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (id) => {
    const movies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies });
  };

  handleLike = (id) => {
    this.setState((prevS) => ({
      movies: prevS.movies.map((movie) =>
        movie._id === id ? { ...movie, isLike: !movie.isLike } : movie
      ),
    }));
  };

  handleChangePage = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelectGenre = (genre) => {
    this.setState({ selectGenre: genre });
  };

  handleSort = (column) => {
    console.log(column);
  };

  render() {
    const {
      movies: allMovies,
      genres,
      pageSize,
      selectGenre,
      currentPage,
    } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return "Loading ....";

    const filtered =
      selectGenre && selectGenre._id
        ? allMovies.filter((m) => m.genre._id === selectGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectGenre={selectGenre}
            onSelectGenre={this.handleSelectGenre}
          />
        </div>
        <div className="col">
          <p>We have {filtered.length} movies </p>
          <MoviesTable
            movies={movies}
            onSort={this.handleSort}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
