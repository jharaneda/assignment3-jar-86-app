// Service file to put all our Fetch calls
export async function getCartJar86() {
    // 35.153.66.33
//   return fetch("http://localhost:8000/cartJar86").then((response) =>
return fetch("http://35.153.66.33:8000/cartJar86").then((response) =>
    response.json()
  );
}

export async function getInventory(newItem) {
//   return fetch("http://localhost:8000/inventoryJar86").then((response) =>
return fetch("http://35.153.66.33:8000/cartJar86").then((response) =>
    response.json()
  );
}

export async function getTotals() {
//   return fetch("http://localhost:8000/cartJar86/totals").then((response) =>
return fetch("http://35.153.66.33:8000/cartJar86").then((response) =>
    response.json()
  );
}

export async function addItemJar86(newItem) {
  const itemData = JSON.stringify(newItem);
//   return fetch("http://localhost:8000/cartJar86", {
    return fetch("http://35.153.66.33:8000/cartJar86", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: itemData,
  }).then((response) => response.json());
}

export async function removeItemJar86(deleteItem) {
  const itemData = JSON.stringify(deleteItem);
//   return fetch("http://localhost:8000/cartJar86", {
    return fetch("http://35.153.66.33:8000/cartJar86", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: itemData,
  }).then((response) => response.json());
}

export async function checkout() {
//   return fetch("http://localhost:8000/cartJar86/checkout", {
    return fetch("http://35.153.66.33/cartJar86/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}
