// Service file to put all our Fetch calls
export async function getCartJar86() {
  return fetch("http://localhost:8000/cartJar86").then((response) =>
    response.json()
  );
}
export async function getInventory(newItem) {
  return fetch("http://localhost:8000/inventoryJar86").then((response) =>
    response.json()
  );
}
