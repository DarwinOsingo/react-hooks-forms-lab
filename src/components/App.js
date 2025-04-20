import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";

const initialItems = [
  { id: uuid(), name: "Apples", category: "Produce" },
  { id: uuid(), name: "Milk", category: "Dairy" },
  { id: uuid(), name: "Cake", category: "Dessert" },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchText, setSearchText] = useState("");

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const visibleItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="App">
      <h1>🛒 Shopping List</h1>
      <Filter searchText={searchText} onSearchChange={setSearchText} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={visibleItems} />
    </div>
  );
}

export default App;
