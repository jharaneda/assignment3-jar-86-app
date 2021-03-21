import ProductListJar86 from "./Components/ProductListJar86/ProductListJar86";
import CartJar86 from "./Components/CartJar86/CartJar86";
import HeaderJar86 from "./Components/HeaderJar86/HeaderJar86";
import { useState, useEffect } from "react";
import {
  getCartJar86,
  addItemJar86,
  removeItemJar86,
  checkout,
  getInventory,
  getTotals,
} from "./Components/ServicesJar86/inventoryServiceJar86";

function App() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState({
    total: 0,
  });

  useEffect(() => {
    refreshPage();
  }, []);

  async function refreshPage() {
    setLoading(true);

    getCartJar86()
      .then((json) => {
        setCart(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });

    await getInventory()
      .then((json) => {
        setInventory(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });

    await getTotals()
      .then((json) => {
        setTotal(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }

  async function addItem(sku) {
    var skuID = sku;
    let itemIndex = inventory
      .map((index) => index.sku)
      .indexOf(skuID.toString());

    var newItem = {
      sku: skuID,
      name: inventory[itemIndex].name,
      quantity: inventory[itemIndex].quantity,
      price: inventory[itemIndex].price,
    };

    await addItemJar86(newItem);
    await refreshPage();
  }

  return <div className="App">
    <HeaderJar86 />
      <ProductListJar86 inventory={inventory} addAction={addItem} />
      <CartJar86
        cart={cart}
        checkoutAction={checkoutCart}
        deleteAction={deleteItemFromCart}
        totalInfo={total.total.toFixed(2)}
      />
  </div>;
}

export default App;
