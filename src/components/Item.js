
import React from "react";

function Item({ name, category }) {
  return (
    <li className="Item">
      <span>{name}</span>
      <span className="category">{category}</span>
    </li>
  );
}

export default Item;
