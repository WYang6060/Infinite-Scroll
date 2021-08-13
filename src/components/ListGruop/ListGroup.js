import React from "react";
import "./ListGroup.css";

const ListGroup = ({ listItems }) => {
  return (
    <ul className="list-group">
      {listItems.map((val) => (
        <li className="list-group-item" key={val}>
          List Item {val}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
