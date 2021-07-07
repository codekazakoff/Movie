import React from "react";

const ListGroup = ({ items, onSelectGenre, name, id, selectGenre }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          onClick={() => onSelectGenre(item)}
          key={item[id] || index}
          className={`${
            selectGenre === item ? "list-group-item active " : "list-group-item"
          }`}
        >
          {item[name]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  name: "name",
  id: "_id",
};

export default ListGroup;
