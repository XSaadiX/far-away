import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 3, packed: false },
// ];

export default function App() {
  const [item, setItem] = useState([]);

  function handleAddItem(items) {
    setItem((item) => [...item, items]);
  }

  function deleteItem(id) {
    setItem((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function updateItem(id) {
    // id.packed = true;
    setItem((items) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearButton() {
    const confirmed = window.confirm("Are you sure you want to delete ?");
    if (confirmed) setItem([]);
  }

  return (
    <div className='App'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        item={item}
        deleteItem={deleteItem}
        updateItem={updateItem}
        handleClearButton={handleClearButton}
      />
      <Stats itemNum={item} />
    </div>
  );
}
