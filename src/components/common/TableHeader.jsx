import React from "react";

const TableHeader = ({ onSort }) => {
  return (
    <thead>
      <tr>
        <th className="th__click" onClick={() => onSort("title")}>
          Title
        </th>
        <th className="th__click" onClick={() => onSort("genre.name")}>
          Genre
        </th>
        <th className="th__click" onClick={() => onSort("numberInStock")}>
          Stock
        </th>
        <th className="th__click" onClick={() => onSort("dailyRentalRate")}>
          Rate
        </th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
