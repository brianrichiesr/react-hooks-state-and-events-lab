import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemsOnList, setItemsOnList] = useState([...items]);

  const filterItems = (e) => {
    let filterBy = e.target.value;
    let filteredArray = items.filter(item => {
      if (filterBy === "All") {
        return true
      } else {
        return filterBy === item.category;
      }
    });
    setItemsOnList(filteredArray);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterItems} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsOnList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
