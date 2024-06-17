export function formatCurrency(number) {
  let reversed = String(number).split("").reverse().join("");

  let result = [];

  for (let i = 0; i < reversed.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result.push(".");
    }
    result.push(reversed[i]);
  }

  return result.reverse().join("") + "đ";
}

export function saveItemToLocalStorage(item) {
  let storedItems = localStorage.getItem("items");
  storedItems = storedItems ? JSON.parse(storedItems) : [];

  let existingItem = storedItems.find(
    (storedItem) => storedItem.id === item.id && storedItem.size === item.size
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    storedItems.push(item);
  }

  localStorage.setItem("items", JSON.stringify(storedItems));
}

export function updateItemToLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

export function getItemFromLocalStorage() {
  let storedItems = localStorage.getItem("items");
  storedItems = storedItems ? JSON.parse(storedItems) : [];
  return storedItems;
}
