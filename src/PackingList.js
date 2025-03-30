import { useState } from "react";
import Item from "./Item";

export function PackingList({
  item,
  deleteItem,
  updateItem,
  handleClearButton,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = item;

  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div>
      <ul className='list'>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by Input order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed status</option>
        </select>
        <button onClick={handleClearButton}>Clear List</button>
      </div>
    </div>
  );
}
