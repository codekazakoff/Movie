import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Like from "./Like";

const TableBody = ({ movies, onLike, onDelete }) => {
  return (
    <tbody>
      {movies.map(
        ({
          _id,
          title,
          genre: { name },
          numberInStock,
          dailyRentalRate,
          isLike,
        }) => (
          <tr key={_id}>
            <td>{title}</td>
            <td>{name}</td>
            <td>{numberInStock}</td>
            <td>{dailyRentalRate}</td>
            <td className="d-flex align-items-center">
              <Like isLike={isLike} onClick={() => onLike(_id)} />
              <button
                className="btn btn-danger btn-sm mx-2"
                onClick={() => onDelete(_id)}
              >
                <AiFillDelete />
              </button>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default TableBody;
