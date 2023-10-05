import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const toggleFromCart = () => {
    setInCart(currentValue => !currentValue)
  }
  return (
    <li className={inCart ? "in-cart" : null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => toggleFromCart(name)} className={inCart ? "remove" : "add"}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
