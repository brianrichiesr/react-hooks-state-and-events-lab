import React from "react";

function Item({ name, category, toggleFromCart, cartObj }) {
  return (
    <li className={cartObj && cartObj[name] ? "in-cart" : null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => toggleFromCart(name)} className={cartObj && cartObj[name] ? "remove" : "add"}>{cartObj[name] ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
