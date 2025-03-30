export default function Item({ item, deleteItem, updateItem }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => {
          updateItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}{" "}
        <button onClick={() => deleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
}
