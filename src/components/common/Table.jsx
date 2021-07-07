import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ onSort, movies, onLike, onDelete }) => {
  return (
    <table className="table">
      <TableHeader onSort={onSort} />
      <TableBody movies={movies} onLike={onLike} onDelete={onDelete} />
    </table>
};

export default Table;
