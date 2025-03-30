export function Stats({ itemNum }) {
  if (!itemNum.length)
    return <footer className='stats'> Start packing your things</footer>;

  const numItems = itemNum.length;
  const numPacked = itemNum.filter((item) => item.packed).length;
  const percent = (numPacked / numItems) * 100;
  return (
    <footer className='stats'>
      {percent !== 100
        ? `You have ${numItems} items on your list, already packed ${numPacked} of them (${Math.floor(
            percent
          )}%)`
        : "You got everything ready to go ✈️"}
    </footer>
  );
}
