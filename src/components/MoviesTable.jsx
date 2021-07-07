import React from "react";
import Table from "./common/Table";
const MoviesTable = ({ movies, onLike, onDelete, onSort }) => {
  return (
    <Table
      movies={movies}
      onSort={onSort}
      onLike={onLike}
      onDelete={onDelete}
    />
  );
};

export default MoviesTable;
